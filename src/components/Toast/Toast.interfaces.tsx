export interface ToastType {
  type?: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastProps extends ToastType {
  highlight?: string;
  description?: string;
}
