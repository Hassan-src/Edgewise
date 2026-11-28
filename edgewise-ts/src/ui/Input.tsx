import styled, { css } from "styled-components";

const $size = {
  small: css`
    width: 11rem;
  `,
  medium: css`
    width: 20rem;
    @media (max-width: 900px) {
      width: 100%;
    }
  `,
};

type SizeType = keyof typeof $size;

type InputProps = {
  $size?: SizeType;
};

const Input = styled.input<InputProps>`
  width: 100%;
  min-width: 0;
  background-color: var(--color-surface-muted);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  ${(props) => props.$size && $size[props.$size]}
  &[value]:disabled {
    color: var(--color-text);
    opacity: 1;
  }
`;

export default Input;
