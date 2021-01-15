import React, { createContext, useCallback, useContext, useState } from 'react';
import Toast from 'components/Toast';
import { uuid } from 'uuidv4';
import { ToastContextData, ToastMessage } from './useToast.interface';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      console.log('addToast');
      const id = uuid();

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
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast need a Context');

  return context;
}

export { ToastProvider, useToast };
