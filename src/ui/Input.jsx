import styled, { css } from "styled-components";

const $size = {
  small: css`
    width: 11rem;
  `,
};

const Input = styled.input`
  background-color: var(--color-surface-muted);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  ${(props) => $size[props.$size]}
`;

export default Input;
