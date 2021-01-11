import styled, { css } from 'styled-components';
import { isPropertyAccessExpression } from 'typescript';

interface ToastProps {
  type?: 'success' | 'error' | 'warning' | 'info';
}

const toastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
  warning: css`
    background-color: #ffa900;
    color: #ebf8ff;
  `,
};

export const ToastContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const ToastComp = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  background-color: #ebf8ff;
  color: #3172b7;

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: auto 12px auto 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background-color: transparent;
    color: inherit;
  }
`;
