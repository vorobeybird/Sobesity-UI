import { useReducer, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  ICarouselState,
  ICarouselAction,
  CarouselActionTypes as actionTypes,
  ICarouselStyle,
} from './carousel.types';

const initialCarouselState: ICarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};

function previous(length: number, current: number): number {
  return (current - 1 + length) % length;
}

function next(length: number, current: number): number {
  return (current + 1) % length;
}

function threshold(target: Element): number {
  const width = target.clientWidth;

  return width / 10;
}

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
        offset: NaN,
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

function swiped(
  e: any,
  dispatch: any,
  length: number,
  direction: number,
): void {
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
  let direction: number = 0;
  let shift: number = 0;
  const elastic: string = `transform ${transitionTime}ms cubic-bezier(0.68, 0, 0.265, 1.55)`;
  const smooth: string = `transform ${transitionTime}ms ease-out`;
  const lengthWithClones: number = length + 2;

  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: actionTypes.drag,
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
  useEffect(() => {
    if (interval) {
      const id = setTimeout(
        () => dispatch({ ...state, type: actionTypes.next, length }),
        interval,
      );

      return () => clearTimeout(id);
    }
  }, [state.offset, state.active, interval]);

  useEffect(() => {
    const id = setTimeout(
      () => dispatch({ ...state, type: actionTypes.done }),
      transitionTime,
    );

    return () => clearTimeout(id);
  }, [state.desired]);

  const style: ICarouselStyle = {
    transform: 'translateX(0)',
    width: `${100 * lengthWithClones}%`,
    left: `-${(state.active + 1) * 100}%`,
  };

  const slideDistance = Math.abs(state.active - state.desired);
  const desiredDirectionOnSwipe = Math.sign(state.offset || 0);

  if (
    (state.desired === 0 || state.desired === length - 1) &&
    (state.active === 0 || state.active === length - 1)
  ) {
    direction =
      (slideDistance > length / 2 ? 1 : -1) *
      Math.sign(state.desired - state.active);
    shift = (100 * (desiredDirectionOnSwipe || direction)) / lengthWithClones;
  } else {
    direction = Math.sign(state.active - state.desired);
    shift =
      (100 * slideDistance * (desiredDirectionOnSwipe || direction)) /
      lengthWithClones;
  }

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

  const setActive = (n: number) =>
    dispatch({ ...state, type: actionTypes.jump, desired: n });

  return {
    active: state.active,
    setActive,
    handlers,
    style,
  };
}
