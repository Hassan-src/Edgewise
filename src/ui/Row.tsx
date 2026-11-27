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

type GapType = keyof typeof $gap;

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

type MarginBottomType = keyof typeof $marginBottom;

type RowProps = {
  $type?: "horizontal" | "horizontalSticky" | "vertical";
  $gap?: GapType;
  $marginBottom?: MarginBottomType;
  $responsive?: boolean | string;
  $responsiveAlign?: string;
};

const Row = styled.div<RowProps>`
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
  ${(props) => props.$gap && $gap[props.$gap]}
  ${(props) => props.$marginBottom && $marginBottom[props.$marginBottom]}
  ${(props) =>
    props.$responsive &&
    css`
      @media (max-width: ${typeof props.$responsive === "string"
          ? props.$responsive
          : "768px"}) {
        flex-direction: column;
        align-items: ${props.$responsiveAlign || "stretch"};
      }
    `}
`;

export default Row;
