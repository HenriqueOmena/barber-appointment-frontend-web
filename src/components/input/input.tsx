import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';
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
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const innerRef = useRef<HTMLInputElement>(null);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...propsRest}
      />
    </Container>
  );
};

export default Input;
