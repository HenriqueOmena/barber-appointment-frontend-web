import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastContainer, ToastComp } from './Toast.styles';

interface ToastProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  highlight?: string;
  description?: string;
}

const Toast: React.FC<ToastProps> = ({
  children,
  type,
  description,
  highlight,
}) => (
  <ToastContainer data-testid="Toast">
    <ToastComp type={'success'}>
      <FiAlertCircle size={20} />

      <div>
        <strong>{highlight}</strong>
        <p>{description}</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </ToastComp>
  </ToastContainer>
);

export default Toast;
