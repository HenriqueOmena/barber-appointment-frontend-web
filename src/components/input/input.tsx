import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...propsRest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...propsRest} />
    </Container>
  );
};

export default Input;
