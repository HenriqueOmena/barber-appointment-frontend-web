import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from 'components/ToastContainer';
import { ToastContextData, ToastMessage } from './useToast.interface';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      console.log('addToast');
      const id = Math.random().toString();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages([...messages, toast]);
    },
    [messages]
  );
  const removeToast = useCallback((id: string) => {
    setMessages(messages.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messages} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast need a Context');

  return context;
}

export { ToastProvider, useToast };
