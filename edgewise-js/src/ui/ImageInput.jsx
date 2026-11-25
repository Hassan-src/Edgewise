import { HiOutlineCamera } from "react-icons/hi2";
import styled from "styled-components";

const StyledImageInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

const ImageInputLable = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  font-size: var(--text-lg);
  color: var(--color-text-light);
  background-color: var(--color-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
  gap: var(--space-1);
  position: absolute;
  right: 0;
  bottom: 0;
  &:hover {
    background-color: var(--color-surface-muted);
  }
  & svg {
    width: 1.7rem;
    height: 1.7rem;
    color: var(--color-text);
  }
`;

function ImageInput({ onChange, disabled }) {
  return (
    <>
      <StyledImageInput
        type="file"
        id="avatar"
        accept="image/*"
        onChange={onChange}
        disabled={disabled}
      />
      <ImageInputLable htmlFor="avatar">
        <HiOutlineCamera />
      </ImageInputLable>
    </>
  );
}

export default ImageInput;
