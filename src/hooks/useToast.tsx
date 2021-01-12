import React, { createContext, useCallback, useContext } from 'react';
import Toast from 'components/Toast';

interface ToatContextData {
  addToast: () => void;
  removeToast: () => void;
}

const ToastContext = createContext<ToatContextData>({} as ToatContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

function useToast(): ToatContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast need a Context');

  return context;
}

export { ToastProvider, useToast };
