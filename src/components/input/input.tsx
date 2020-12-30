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
  const [value, setValue] = useState<string>('');
  const innerRef = useRef<HTMLInputElement>(null);
  const handleInputBlur = useCallback(e => {
    setIsFilled(!!e.target.value);
    setIsFocused(false);
  }, []);
  const handleInputFocus = useCallback(e => {
    setIsFocused(true);
  }, []);

  const handleValue = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);
  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...propsRest}
      />
    </Container>
  );
};

export default Input;
