import React, { Children, ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...propsRest }) => {
  return (
    <Container type="button" {...propsRest}>
      {children}
    </Container>
  );
};

export default Button;
