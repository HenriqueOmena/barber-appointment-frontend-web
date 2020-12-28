import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  inputRef?: React.ClassAttributes<HTMLInputElement>['ref'];
}

const Input: React.FC<InputProps> = ({
  inputRef,
  icon: Icon,
  ...propsRest
}) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} {...propsRest} />
    </Container>
  );
};

export default Input;
