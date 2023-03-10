import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import { Cross } from '@/components/shared/icons';
import { ModalProps } from './modal.types';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames={{
        enter: 'opacity-0',
        enterActive: 'opacity-100 duration-200',
        exitActive: 'opacity-0 duration-200',
      }}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        onMouseDown={onClose}
        aria-hidden
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        ref={nodeRef}
      >
        <FocusTrap>
          <div
            aria-hidden
            onMouseDown={(e) => e.stopPropagation()}
            className="relative"
          >
            <button
              type="button"
              className="absolute right-[2%] translate-y-1/2"
              onClick={onClose}
            >
              <Cross className="fill-secondary-dark h-[0.9rem] m-2 w-[0.9rem] lg:h-4 lg:w-4" />
            </button>
            {children}
          </div>
        </FocusTrap>
      </div>
    </CSSTransition>,
    modalRoot,
  );
};
