import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Cross from 'components/shared/icons/Cross';
import { ModalProps } from './modal.types';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal = ({ visible, onClose, children }: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <CSSTransition
      in={visible}
      timeout={150}
      classNames={{
        enter: 'opacity-0',
        enterActive: 'opacity-100 easy-out duration-150',
        enterDone: 'opacity-100',
        exit: 'opacity-100',
        exitActive: 'opacity-50 easy-out duration-150',
        exitDone: 'opacity-0',
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        onMouseDown={onClose}
        aria-hidden
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
      >
        <div
          aria-hidden
          onMouseDown={(e) => e.stopPropagation()}
          className="relative"
        >
          <button
            type="button"
            className="absolute right-[3%] translate-y-full"
            onClick={onClose}
          >
            <Cross className="fill-secondary-dark h-[1rem] w-[1rem] lg:h-[1rem] lg:w-[1rem]" />
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>,
    modalRoot,
  );
};
