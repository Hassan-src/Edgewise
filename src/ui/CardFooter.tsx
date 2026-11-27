import type { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type ValueType = "Profit" | "Loss";

type ValueProps = {
  $type?: ValueType;
};

const Value = styled.span<ValueProps>`
  width: fit-content;
  font-size: var(--text-lg);
  font-weight: 600;
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  ${(props) =>
    props.$type === "Profit" &&
    css`
      background-color: var(--color-profit-transparent);
      color: var(--color-profit);
    `}
  ${(props) =>
    props.$type === "Loss" &&
    css`
      background-color: var(--color-loss-transparent);
      color: var(--color-loss);
    `}
`;

type CardFooterProps = PropsWithChildren<{
  $type?: ValueType;
}>;

function CardFooter({ $type, children }: CardFooterProps) {
  return <Value $type={$type}>{children}</Value>;
}

export default CardFooter;
