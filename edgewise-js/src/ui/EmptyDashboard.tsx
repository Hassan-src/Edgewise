import { Link } from "react-router-dom";
import styled from "styled-components";

import Heading from "./Heading";
import Button from "./Buttons";
import empty from "/emptyghost.svg";

const StyledEmptyDashboard = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-4);
`;

const Object = styled.object`
  width: 25rem;
  height: 25rem;
`;

function EmptyDashboard() {
  return (
    <StyledEmptyDashboard>
      <Object data={empty} type="image/svg+xml" />
      <Heading>There are no trades yet!</Heading>
      <Link to="/trades">
        <Button $variation="primary" $size="large">
          Upload your trades
        </Button>
      </Link>
    </StyledEmptyDashboard>
  );
}

export default EmptyDashboard;
