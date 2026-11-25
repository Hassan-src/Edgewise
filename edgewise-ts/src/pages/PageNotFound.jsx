import styled from "styled-components";
import { Link } from "react-router-dom";

import Heading from "../ui/Heading";
import Button from "../ui/Buttons";

const StyledPageNotFound = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-4);
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Heading $as="h1">404 Not Found!</Heading>
      <Link to="/dashboard">
        <Button $variation="primary" $size="large">
          Homepage
        </Button>
      </Link>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
