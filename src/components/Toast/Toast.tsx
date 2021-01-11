import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastContainer, ToastComp } from './Toast.styles';

interface ToastProps {
  type?: 'success' | 'error' | 'warning' | 'info';
}
const Toast: React.FC<ToastProps> = ({ children, type }) => (
  <ToastContainer data-testid="Toast">
    <ToastComp type={type}>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Nao foi possivel fazer login na App</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </ToastComp>
  </ToastContainer>
);

export default Toast;
