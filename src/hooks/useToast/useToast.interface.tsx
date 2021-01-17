import { ToastType } from 'components/ToastContainer/ToastContainer.interfaces';

export interface ToastContextData {
  addToast: (messages: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

export interface ToastMessage extends ToastType {
  id: string;
  title: string;
  description?: string;
}
