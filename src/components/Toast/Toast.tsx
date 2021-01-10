import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastContainer, ToastComp } from './Toast.styles';

const Toast: React.FC = ({ children }) => (
  <ToastContainer data-testid="Toast">
    <ToastComp>
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
