import { ToastMessage } from 'hooks/useToast/useToast.interface';
import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { useToast } from 'hooks/useToast';
import { Container } from './Toast.styles';

const Toast: React.FC<{ message: ToastMessage }> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container type={message.type}>
      <FiAlertCircle size={20} />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
