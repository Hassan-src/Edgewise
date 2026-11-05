import styled from "styled-components";

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
`;

function Card({ $columns, children }) {
  return <StyledCard $columns={$columns}>{children}</StyledCard>;
}

export default Card;
