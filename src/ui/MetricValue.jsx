import styled, { css } from "styled-components";

const $status = {
  loss: css`
    color: var(--color-loss);
  `,
  profit: css`
    color: var(--color-profit);
  `,
  warning: css`
    color: var(--color-warning);
  `,
  normal: css`
    color: var(--color-text);
  `,
};

const $sizes = {
  normal: css`
    font-size: var(--text-base);
  `,
  medium: css`
    font-size: var(--text-lg);
  `,
  large: css`
    font-size: var(--text-4xl);
  `,
};

const MetricValue = styled.span`
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;

  ${(props) => $status[props.$status]}
  ${(props) => $sizes[props.$size]}
`;

export default MetricValue;
