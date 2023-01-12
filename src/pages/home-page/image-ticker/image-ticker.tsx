/* eslint-disable react/no-array-index-key */
import classNames from 'classnames';
import { IImageTickerProps } from './image-ticker-types';

export const ImageTicker = ({
  images,
  direction = 'top',
}: IImageTickerProps) => {
  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <div className="relative w-20 h-[200%] border-t border-b border-gray-600">
        <div
          className={classNames(
            'absolute  right-0 flex flex-col items-center justify-around w-20 h-[200%]',
            'hover:pause',
            { 'top-0 animate-scroll-top': direction === 'top' },
            { 'bottom-0 animate-scroll-bottom ': direction === 'bottom' },
          )}
        >
          {images.map((icon, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-start w-[20rem]"
              >
                {icon}
              </div>
            );
          })}
          {images.map((icon, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-start w-[20rem]"
              >
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
