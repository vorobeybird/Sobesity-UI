import { ReactNode } from 'react';

export interface ModalProps {
  onClose: () => void;
  visible: boolean;
  children: ReactNode;
}
