import React, { useCallback } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { useToast } from 'hooks/useToast';
import { ToastContainer, ToastComp } from './Toast.styles';
import { ToastType, ToastProps } from './Toast.interfaces';

const Toast: React.FC<ToastProps> = ({ children, messages }) => {
  const { removeToast } = useToast();

  return (
    <ToastContainer data-testid="Toast">
      {messages.map(message => (
        <ToastComp key={message.id} type={message.type}>
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </ToastComp>
      ))}
    </ToastContainer>
  );
};

export default Toast;
