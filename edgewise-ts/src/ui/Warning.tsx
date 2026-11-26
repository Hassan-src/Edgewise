import type { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const $type = {
  ordered: css`
    display: flex;
  `,
  unordered: css`
    display: flex;
  `,
};

type OrderType = keyof typeof $type;

type StyledWarningProp = {
  $type: OrderType;
};

const StyledWarning = styled.div<StyledWarningProp>`
  width: fit-content;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-warning);
  background-color: var(--color-warning-light);
  border-radius: var(--radius-md);
  color: var(--color-text-warning);
  ${(props) => $type[props.$type]}
`;

const Ol = styled.ol`
  padding: 0 var(--space-3);
`;
const Ul = styled.ul`
  padding: 0 var(--space-3);
`;

type orderProps = PropsWithChildren<{
  $type?: OrderType;
}>;

function Warning({ children, $type = "unordered" }: orderProps) {
  return (
    <StyledWarning $type={$type}>
      {$type === "ordered" ? <Ol>{children}</Ol> : <Ul>{children}</Ul>}
    </StyledWarning>
  );
}

export default Warning;
