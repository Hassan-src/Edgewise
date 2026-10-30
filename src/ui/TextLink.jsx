import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTextLink = styled.div`
  text-align: center;
  padding: var(--space-1);
  color: var(--color-text-secondary);
`;

const StyledLink = styled(Link)`
  color: var(--color-accent);
  transition: all 0.2s;
  &:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }
`;

function TextLink({ $type }) {
  return (
    <StyledTextLink>
      <p>
        {$type === "Signup" ? (
          <>
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </>
        ) : (
          <>
            Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
          </>
        )}
      </p>
    </StyledTextLink>
  );
}

export default TextLink;
