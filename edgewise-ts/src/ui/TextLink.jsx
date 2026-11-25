import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const $type = {
  link: css`
    display: flex;
    align-items: center;
  `,
};

const StyledTextLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-1);
  color: var(--color-text-secondary);
`;

const StyledLink = styled(Link)`
  color: var(--color-accent);
  transition: all 0.2s;
  ${(props) => $type[props.$type]}
  &:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }
`;

function TextLink({ $linkText, children, to, icon, $type }) {
  return (
    <StyledTextLink>
      <p>
        {children}
        <StyledLink $type={$type} to={to}>
          {$linkText}
          {icon}
        </StyledLink>
      </p>
    </StyledTextLink>
  );
}

export default TextLink;
