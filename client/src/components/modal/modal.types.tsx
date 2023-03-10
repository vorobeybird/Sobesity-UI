import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Modal close function
   */
  onClose: () => void;
  /**
   * Modal state
   */
  isOpen: boolean;
  /**
   * can pass React components, the modal will adjust
   */
  children: ReactNode;
}
