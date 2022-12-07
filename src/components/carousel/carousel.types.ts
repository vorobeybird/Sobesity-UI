export type CarouselProp = {
  children: React.ReactNode;
  interval: number;
  transitionTime: number;
  hasControls?: boolean;
};

export interface ICarouselState {
  offset: number;
  desired: number;
  active: number;
  type?: string;
}

export interface ICarouselAction {
  offset?: number;
  desired?: number;
  active?: number;
  type?: string;
  length?: number;
}
