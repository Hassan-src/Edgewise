import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: var(--text-lg);
  font-family: inherit;
  border-radius: var(--radius-sm);
  &::file-selector-button {
    font-family: inherit;
    font-weight: 500;
    font-size: var(--text-lg);
    color: var(--color-text-light);
    background-color: var(--color-accent);
    border: none;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-sm);
    padding: var(--space-2) var(--space-3);
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
`;

export default FileInput;
