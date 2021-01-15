import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastContainer, ToastComp } from './Toast.styles';
import { ToastType, ToastProps } from './Toast.interfaces';

const Toast: React.FC<ToastProps> = ({ children, messages }) => (
  <ToastContainer data-testid="Toast">
    {messages.map(message => (
      <ToastComp key={message.id} type={message.type}>
        <FiAlertCircle size={20} />
        <div>
          <strong>{message.title}</strong>
          {message.description && <p>{message.description}</p>}
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastComp>
    ))}
  </ToastContainer>
);

export default Toast;
