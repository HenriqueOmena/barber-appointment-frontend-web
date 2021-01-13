import { ToastType } from 'components/Toast/Toast.interfaces';

export interface ToastContextData {
  addToast: () => void;
  removeToast: () => void;
}

export interface ToastMessage extends ToastType {
  id: string;
  title: string;
  description?: string;
}
