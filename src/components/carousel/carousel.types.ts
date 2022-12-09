export type CarouselProp = {
  children: React.ReactNode;
  interval: number;
  transitionTime: number;
  hasControls?: boolean;
};

export interface ICarouselState {
  offset?: number;
  desired: number;
  active: number;
  type?: string;
}
export interface ICarouselStyle {
  transform: string;
  width: string;
  left: string;
  transition?: string;
}

export enum CarouselActionTypes {
  jump = 'jump',
  next = 'next',
  prev = 'prev',
  done = 'done',
  drag = 'drag',
}

interface ICarouselActionJump {
  type: CarouselActionTypes.jump;
  desired: number;
}

interface ICarouselActionNext {
  type: CarouselActionTypes.next;
  desired: number;
  length: number;
}

interface ICarouselActionPrev {
  type: CarouselActionTypes.prev;
  desired: number;
  length: number;
}

interface ICarouselActionDone {
  type: CarouselActionTypes.done;
}

interface ICarouselActionDrag {
  type: CarouselActionTypes.drag;
  offset: number;
}

export type ICarouselAction =
  | ICarouselActionJump
  | ICarouselActionNext
  | ICarouselActionPrev
  | ICarouselActionDone
  | ICarouselActionDrag;
