import styled, { css } from "styled-components";

const $gap = {
  small: css`
    gap: var(--space-2);
  `,
  medium: css`
    gap: var(--space-4);
  `,
  large: css`
    gap: var(--space-6);
  `,
  xlarge: css`
    gap: var(--space-8);
  `,
  button: css`
    margin-left: auto;
  `,
};

const $marginBottom = {
  small: css`
    margin-bottom: var(--space-2);
  `,
  medium: css`
    margin-bottom: var(--space-4);
  `,
  large: css`
    margin-bottom: var(--space-6);
  `,
  xlarge: css`
    margin-bottom: var(--space-8);
  `,
};

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.$type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.$type === "horizontalSticky" &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.$type === "vertical" &&
    css`
      flex-direction: column;
    `}
  ${(props) => $gap[props.$gap]}
  ${(props) => $marginBottom[props.$marginBottom]}
`;

export default Row;
