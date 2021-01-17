import React from 'react';
import { Container } from './ToastContainer.styles';
import { ToastProps } from './ToastContainer.interfaces';
import Toast from './components/Toast';

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  return (
    <Container data-testid="Toast">
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
