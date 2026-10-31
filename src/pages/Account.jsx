import styled from "styled-components";

import SecondaryText from "../ui/SecondaryText";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdateUserPasswordForm from "../features/authentication/UpdateUserPasswordForm";

const StyledAccount = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  padding: var(--space-6);
  gap: var(--space-8);
`;

function Account() {
  return (
    <>
      <Row $type="vertical">
        <Heading $as="h1">Account</Heading>
        <SecondaryText>Real-time account information</SecondaryText>
      </Row>
      <StyledAccount>
        <UpdateUserDataForm />
        <UpdateUserPasswordForm />
      </StyledAccount>
    </>
  );
}

export default Account;
