import { useReducer, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ICarouselState, ICarouselAction } from './carousel.types';

/*
  useCarousel Hook
  */
function previous(length: number, current: number) {
  return (current - 1 + length) % length;
}

function next(length: number, current: number) {
  return (current + 1) % length;
}

function threshold(target: Element) {
  const width = target.clientWidth;
  return width / 10;
}

const initialCarouselState: ICarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};

function carouselReducer(
  state: ICarouselState,
  action: ICarouselAction,
): ICarouselState {
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
        type: action.type,
      };
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
        type: action.type,
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
        type: action.type,
      };
    case 'done':
      return {
        ...state,
        offset: 0,
        active: state.desired,
        type: action.type,
      };
    case 'drag':
      return {
        ...state,
        offset: action.offset,
        type: action.type,
      };
    default:
      return state;
  }
}

function swiped(e: any, dispatch: any, length: number, direction: number) {
  const t = threshold(e.event.target);
  const d = direction * -e.deltaX;

  if (d >= t) {
    dispatch({
      type: direction > 0 ? 'next' : 'prev',
      length,
    });
  } else {
    dispatch({
      type: 'drag',
      offset: 0,
    });
  }
}

export function useCarousel(
  length: number,
  interval = 15000,
  transitionTime = 300,
) {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, 0, 0.265, 1.55)`;
  const smooth = `transform ${transitionTime}ms ease-out`;
  const lengthWithClones = length + 2;

  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: 'drag',
        offset: e.deltaX,
      });
    },
    onSwipedLeft(e) {
      swiped(e, dispatch, length, 1);
    },
    onSwipedRight(e) {
      swiped(e, dispatch, length, -1);
    },
    trackMouse: true,
    trackTouch: true,
  });

  // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (interval) {
  //     const id = setTimeout(() => dispatch({ type: 'next', length }), interval);
  //     return () => clearTimeout(id);
  //   }
  // }, [state.offset, state.active, interval]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style = {
    transform: 'translateX(0)',
    width: `${100 * lengthWithClones}%`,
    left: `-${(state.active + 1) * 100}%`,
    transition: smooth,
  };

  const slideDistance = Math.abs(state.active - state.desired);
  const desiredDirectionOnSwipe = Math.sign(state.offset || 0);

  const direction =
    (slideDistance > length / 2 ? 1 : -1) *
    Math.sign(state.desired - state.active);

  const shift =
    (100 * (desiredDirectionOnSwipe || direction)) / lengthWithClones;

  if (state.desired !== state.active) {
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (state.type === 'drag') {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  const returnType: Array<any> = [
    state.active,
    (n: number) => dispatch({ type: 'jump', desired: n }),
    handlers,
    style,
  ];

  return returnType;
}
