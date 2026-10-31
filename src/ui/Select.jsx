import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: transparent;
  border: 2px solid var(--color-border);
  cursor: pointer;
  &:hover {
    background-color: var(--color-surface-muted);
    color: var(--color-text);
  }
`;

function Select({ options, value, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
