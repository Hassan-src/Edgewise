import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Button from "../ui/Buttons";
import Row from "../ui/Row";

const StyledVerifyEmail = styled.div`
  max-width: 100%;
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  text-align: center;
`;

const Description = styled.p`
  color: var(--color-text-secondary);
`;

function VerifyEmail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const email = state?.email;

  return (
    <StyledVerifyEmail>
      <Logo $type="LogIn" />

      <Row $type="vertical">
        <Heading $as="h4">Verify your email</Heading>

        <Description>
          We send a verification link to
          <strong> {email || "your email address"}</strong>. Please check your
          inbox and follow the link to activate your account.
        </Description>
      </Row>

      <Button
        $variation="primary"
        $size="large"
        onClick={() => navigate("/login")}
      >
        Back to login
      </Button>
    </StyledVerifyEmail>
  );
}

export default VerifyEmail;
