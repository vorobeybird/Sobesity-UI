/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classnames from 'classnames';
import React from 'react';
import PropTypes, { number, bool } from 'prop-types';

import { useCarousel } from './use-carousel';
import { CarouselProp } from './carousel.types';

const Carousel = ({
  children,
  interval,
  transitionTime,
  hasControls = true,
}: CarouselProp) => {
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
    <div className="w-3/4 mx-auto">
      <div className="relative w-full overflow-hidden cursor-grab backface-hidden rounded-lg active:cursor-grabbing ">
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
              className={classnames('w-full', {
                active: active === index,
              })}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {slide}
            </div>
          ))}
          {/* Clone Ahead */}
          <div className="w-full">{slides[0]}</div>
        </div>
      </div>

      {hasControls && (
        <div className="carousel-arrows">
          <div
            className="carousel-arrows__arrow carousel-arrows__left"
            onClick={handleSetActive((active - 1 + length) % length)}
          >
            <span>&larr;</span>
          </div>
          <span className="carousel-arrows__counter">{`0${
            active + 1
          }/0${length}`}</span>
          <div
            className="carousel-arrows__arrow carousel-arrows__right"
            onClick={handleSetActive((active + 1) % length)}
          >
            <span>&rarr;</span>
          </div>
          <div>
            <div>
              <div className="flex justify-center">
                {slides.map((_, index) => (
                  <div
                    className={classnames(
                      'bg-secondary-dark',
                      'rounded-full inline-block w-5 h-5 m-1 cursor-pointer',
                      {
                        'bg-secondary-light': active === index,
                      },
                    )}
                    onClick={handleSetActive(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.element,
  interval: number,
  transitionTime: number,
  hasControls: bool,
};

Carousel.defaultProps = {
  children: null,
  interval: 15000,
  transitionTime: 500,
  hasControls: true,
};

export default Carousel;
