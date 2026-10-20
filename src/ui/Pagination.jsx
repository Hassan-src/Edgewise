import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: var(--text-lg);
  margin-left: var(--space-2);
  & span {
    font-weight: 600;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  gap: var(--space-3);
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.$active ? "var(--color-text-secondary)" : "var(--color-text)"};
  border: none;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-1) var(--space-2);
  transition: all 0.2s;
  &:has(:last-child) {
    padding-left: var(--space-2);
  }
  &:has(:first-child) {
    padding-right: var(--space-2);
  }
  & svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  &:hover:not(:disabled) {
    background-color: var(--color-accent-hover);
    color: var(--color-accent-200);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <StyledPagination>
      <P>
        showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </P>
      <ButtonsBox>
        <PaginationButton
          onClick={previousPage}
          disabled={currentPage === 1}
          $active={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
          $active={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </ButtonsBox>
    </StyledPagination>
  );
}

export default Pagination;
