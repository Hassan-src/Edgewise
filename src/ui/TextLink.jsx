import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTextLink = styled.div`
  text-align: center;
  padding: var(--space-1);
  color: var(--color-text-secondary);
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-accent);
  transition: all 0.2s;
  &:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }
`;

function TextLink({ $linkText, children, to, icon }) {
  return (
    <StyledTextLink>
      <p>
        {children}
        <StyledLink to={to}>
          {$linkText}
          {icon}
        </StyledLink>
      </p>
    </StyledTextLink>
  );
}

export default TextLink;
