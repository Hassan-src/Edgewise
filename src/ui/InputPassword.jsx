import styled, { css } from "styled-components";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const $size = {
  small: css`
    width: 11rem;
  `,
  medium: css`
    width: 20rem;
  `,
};

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  min-width: 0;
  background-color: var(--color-surface-muted);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  ${(props) => $size[props.$size]}
  &[value]:disabled {
    color: var(--color-text);
    opacity: 1;
  }
`;

const ButtonView = styled.button`
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-1);
  position: absolute;
  right: 0;
  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-accent);
  }
`;

function InputPassword({ type = "password", $size, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputWrapper>
      <StyledInput
        {...props}
        $size={$size}
        type={showPassword ? "text" : type}
      />
      <ButtonView
        type="button"
        onClick={() => setShowPassword((pass) => !pass)}
      >
        {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
      </ButtonView>
    </InputWrapper>
  );
}

export default InputPassword;
