import styled from "styled-components";
import Heading from "./Heading";
import CreateTradeAccount from "../features/Trades/CreateTradeAccount";
import Row from "./Row";

const StyledNoAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-3);
`;

function NoAccount() {
  return (
    <StyledNoAccount>
      <Heading $as="h1">Let's start by creating a trading account.</Heading>
      <Row $type="vertical">
        <CreateTradeAccount />
      </Row>
    </StyledNoAccount>
  );
}

export default NoAccount;
