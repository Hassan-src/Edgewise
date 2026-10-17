import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Buttons";

const StyledConfirmDelete = styled.div`
  width: fit-content;
  height: fit-content;
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  gap: var(--space-4);
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>Are you sure you want to delete {resourceName} permanently?</p>
      <BtnDiv>
        <Button
          $variation="secondary"
          $size="medium"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          $variation="danger"
          $size="medium"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </BtnDiv>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
