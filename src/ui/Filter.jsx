import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-sm);
  padding: var(--space-1);
  display: flex;
  gap: var(--space-1);
`;

const FilterButton = styled.button`
  background-color: var(--color-bg);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-accent);
      color: var(--color-accent-200);
    `}

  border-radius: var(--radius-sm);
  font-weight: 500;
  text-transform: capitalize;
  font-size: var(--text-lg);
  padding: var(--space-2) var(--space-4);
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: var(--color-accent);
    color: var(--color-accent-200);
  }
`;

function Filter({ filteredField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filteredField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filteredField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $active={currentFilter === option.value}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
