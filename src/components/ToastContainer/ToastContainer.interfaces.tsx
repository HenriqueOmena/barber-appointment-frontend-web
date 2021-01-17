import { ToastMessage } from 'hooks/useToast/useToast.interface';

export interface ToastType {
  type?: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastProps extends ToastType {
  messages: ToastMessage[];
}
