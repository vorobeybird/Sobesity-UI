import { useReducer, useEffect } from 'react';

import { SwipeEventData, useSwipeable } from 'react-swipeable';

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

function threshold(target: SwipeEventData): number {
  const width = target.absX;

  return width / 10;
}

function carouselReducer(
  state: ICarouselState,
  action: ICarouselAction,
): ICarouselState {
  switch (action.type) {
    case actionTypes.jump:
      return {
        ...state,
        desired: action.desired,
        type: action.type,
      };
    case actionTypes.next:
      return {
        ...state,
        desired: next(action.length, state.active),
        type: action.type,
      };
    case actionTypes.prev:
      return {
        ...state,
        desired: previous(action.length, state.active),
        type: action.type,
      };
    case actionTypes.done:
      return {
        ...state,
        offset: NaN,
        active: state.desired,
        type: action.type,
      };
    case actionTypes.drag:
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
  event: SwipeEventData,
  dispatch: React.Dispatch<ICarouselAction>,
  length: number,
  direction: number,
): void {
  const t = threshold(event);
  const d = direction * -event.deltaX;

  if (d >= t) {
    dispatch({
      type: direction > 0 ? actionTypes.next : actionTypes.prev,
      length,
    });
  } else {
    dispatch({
      type: actionTypes.drag,
      offset: 0,
    });
  }
}

export function useCarousel(
  length: number,
  interval = 15000,
  transitionTime = 300,
) {
  let direction: number = 0;
  let shift: number = 0;
  const [{ offset, desired, active, type }, dispatch] = useReducer(
    carouselReducer,
    initialCarouselState,
  );
  const elastic: string = `transform ${transitionTime}ms cubic-bezier(0.68, 0, 0.265, 1.55)`;
  const smooth: string = `transform ${transitionTime}ms ease-out`;
  const lengthWithClones: number = length + 2;
  const style: ICarouselStyle = {
    transform: 'translateX(0)',
    width: `${100 * lengthWithClones}%`,
    left: `-${(active + 1) * 100}%`,
  };

  const slideDistance = Math.abs(active - desired);
  const desiredDirectionOnSwipe = Math.sign(offset || 0);

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

  useEffect(() => {
    const id = setTimeout(
      () => dispatch({ type: actionTypes.next, length }),
      interval,
    );

    return () => clearTimeout(id);
  }, [offset, active, interval, desired, length]);

  useEffect(() => {
    const id = setTimeout(
      () => dispatch({ type: actionTypes.done }),
      transitionTime,
    );

    return () => clearTimeout(id);
  }, [desired, transitionTime]);

  if (
    (desired === 0 || desired === length - 1) &&
    (active === 0 || active === length - 1)
  ) {
    direction =
      (slideDistance > length / 2 ? 1 : -1) * Math.sign(desired - active);
    shift = (100 * (desiredDirectionOnSwipe || direction)) / lengthWithClones;
  } else {
    direction = Math.sign(active - desired);
    shift =
      (100 * slideDistance * (desiredDirectionOnSwipe || direction)) /
      lengthWithClones;
  }

  if (desired !== active) {
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (type === 'drag') {
    if (offset !== 0) {
      style.transform = `translateX(${offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  const setActive = (n: number) =>
    dispatch({ type: actionTypes.jump, desired: n });

  return {
    active,
    setActive,
    handlers,
    style,
  };
}
