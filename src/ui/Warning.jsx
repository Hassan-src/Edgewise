import styled, { css } from "styled-components";

const $type = {
  oredered: css`
    display: flex;
  `,
  unordered: css`
    display: flex;
  `,
};

const StyledWarning = styled.div`
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

function Warning({ children, $type = "unordered" }) {
  return (
    <StyledWarning $type={$type}>
      {$type === "ordered" ? <Ol>{children}</Ol> : <Ul>{children}</Ul>}
    </StyledWarning>
  );
}

export default Warning;
