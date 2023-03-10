/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames';
import React, { FC } from 'react';

import { useCarousel } from './use-carousel';
import { CarouselProp } from './carousel.types';

const Carousel: FC<CarouselProp> = ({
  children,
  interval = 15000,
  transitionTime = 500,
  hasControls = true,
}) => {
  const slides = React.Children.toArray(children);
  const { length } = slides;
  const { active, setActive, handlers, style } = useCarousel(
    length,
    interval,
    transitionTime,
  );

  const handleSetActive = (index: number) => () => {
    setActive(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative w-full overflow-hidden rounded-lg cursor-grab backface-hidden active:cursor-grabbing ">
        <div
          className={classnames(
            'relative flex flex-nowrap overflow-hidden backface-hidden',
          )}
          style={style}
          {...handlers}
        >
          <div className="w-full">{slides[length - 1]}</div>
          {slides.map((slide, index) => (
            <div
              className="w-full"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {slide}
            </div>
          ))}
          <div className="w-full">{slides[0]}</div>
        </div>
      </div>
      {hasControls && (
        <div className="flex justify-center">
          {slides.map((_, index) => (
            <button
              type="button"
              aria-label="toggle slider"
              className={classnames(
                'bg-secondary-dark',
                'border-0 rounded-full inline-block w-5 h-5 m-1 cursor-pointer',
                {
                  'bg-secondary-light': active === index,
                },
              )}
              onClick={handleSetActive(index)}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
