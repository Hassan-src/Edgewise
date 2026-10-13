import styled, { css } from "styled-components";

const $sizes = {
  small: css`
    font-size: var(--text-base);
    font-weight: 600;
    padding: var(--space-1) var(--space-2);
  `,
  medium: css`
    font-size: var(--text-lg);
    font-weight: 500;
    padding: var(--space-2) var(--space-3);
  `,
  large: css`
    font-size: var(--text-lg);
    font-weight: 600;
    padding: var(--space-3) var(--space-4);
  `,
};

const $variations = {
  primary: css`
    background-color: var(--color-accent);
    color: var(--color-text-light);
    &:hover {
      background-color: var(--color-accent-hover);
    }
  `,
  secondary: css`
    background-color: var(--color-accent-200);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    &:hover {
      background-color: var(--color-accent-400);
    }
  `,
  danger: css`
    background-color: var(--color-error);
    color: var(--color-text-light);
    &:hover {
      background-color: var(--color-error-hover);
    }
  `,
};

const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  border: none;
  border-radius: var(--radius-md);
  text-transform: capitalize;
  ${(props) => $sizes[props.$size]}
  ${(props) => $variations[props.$variation]}
`;

export default Button;
