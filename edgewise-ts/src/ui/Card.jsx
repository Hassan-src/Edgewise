import styled, { css } from "styled-components";

const $gap = {
  small: css`
    gap: var(--space-2);
  `,
  medium: css`
    gap: var(--space-4);
  `,
  large: css`
    gap: var(--space-8);
  `,
};

const StyledCard = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.$columns || "1fr"};
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  background-color: var(--color-surface);
  position: relative;
  overflow: hidden;
  ${(props) => $gap[props.$gap]}
  @media (max-width: 950px) {
    padding: var(--space-3);
  }
  @media (max-width: 650px) {
    padding: var(--space-3);
  }
`;

function Card({ $columns, children, $gap }) {
  return (
    <StyledCard $columns={$columns} $gap={$gap}>
      {children}
    </StyledCard>
  );
}

export default Card;
