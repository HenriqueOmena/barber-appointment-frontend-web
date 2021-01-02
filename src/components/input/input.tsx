import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  inputRef?: React.ClassAttributes<HTMLInputElement>['ref'];
  errors?: string;
}

const Input: React.FC<InputProps> = ({
  inputRef,
  icon: Icon,
  errors,
  ...propsRest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputBlur = useCallback(e => {
    setIsFilled(!!e.target.value);
    setIsFocused(false);
  }, []);
  const handleInputFocus = useCallback(e => {
    setIsFocused(true);
  }, []);

  return (
    <>
      <Container hasError={!!errors} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...propsRest}
        />
        {errors && <FiAlertCircle color="#c53030" size={20} />}
      </Container>
      <Error>{errors}</Error>
    </>
  );
};

export default Input;
