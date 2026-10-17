import styled from "styled-components";

const StyledOption = styled.option`
  background-color: transparent;
  border: 1px solid var(--color-border);
  text-transform: capitalize;
  &:hover {
    background-color: var(--color-accent);
  }
`;

export default StyledOption;
