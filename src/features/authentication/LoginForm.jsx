import styled from "styled-components";
import Button from "../../ui/Buttons";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import Row from "../../ui/Row";

const StyledLoginForm = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  gap: var(--space-8);
`;

const P = styled.p`
  color: var(--color-text-secondary);
  text-align: center;
`;

function LoginForm() {
  return (
    <StyledLoginForm>
      <Logo $type="LogIn" />
      <Row $type="vertical">
        <Heading $as="h4">Hi, welcome back!</Heading>
        <P>Enter your credentials to access your account.</P>
      </Row>
      <Form $type="regular">
        <FormRowVertical label="email">
          <Input />
        </FormRowVertical>
        <FormRowVertical label="password">
          <Input />
        </FormRowVertical>
        <FormRowVertical>
          <Button $variation="primary" $size="large">
            Login
          </Button>
        </FormRowVertical>
      </Form>
    </StyledLoginForm>
  );
}

export default LoginForm;
