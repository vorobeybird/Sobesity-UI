import classNames from 'classnames';

export const ImageTicker = ({ images, direction = 'top' }: any): any => {
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
          {images.map((icon: any) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                {icon}
              </div>
            );
          })}
          {images.map((icon: any) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
