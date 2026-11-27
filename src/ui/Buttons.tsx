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
    @media (max-width: 950px) {
      padding: var(--space-2) var(--space-2);
    }
  `,
  large: css`
    font-size: var(--text-lg);
    font-weight: 600;
    padding: var(--space-3) var(--space-4);
    @media (max-width: 950px) {
      padding: var(--space-2) var(--space-3);
    }
    @media (max-width: 600px) {
      padding: var(--space-2) var(--space-2);
    }
  `,
};

type SizeType = keyof typeof $sizes;

const $variations = {
  primary: css`
    background-color: var(--color-accent);
    color: var(--color-text-on-accent);
    &:hover {
      background-color: var(--color-accent-hover);
    }
  `,
  secondary: css`
    background-color: var(--color-accent-surface);
    color: var(--color-on-accent-surface);
    border: 1px solid var(--color-border);
    &:hover {
      background-color: var(--color-accent-surface-hover);
    }
  `,
  danger: css`
    background-color: var(--color-error-dark);
    color: var(--color-text-light);
    &:hover {
      background-color: var(--color-error-hover);
    }
  `,
};

type VariationType = keyof typeof $variations;

type ButtonProps = {
  $size: SizeType;
  $variation: VariationType;
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  border: none;
  border-radius: var(--radius-md);
  text-transform: capitalize;
  ${(props) => props.$size && $sizes[props.$size]}
  ${(props) => props.$variation && $variations[props.$variation]}
`;

export default Button;
