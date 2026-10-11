import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-surface);
  padding: var(--space-3) var(--space-8);
  border-bottom: 1px solid var(--color-border);
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
