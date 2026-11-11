import { useState } from "react";
import styled from "styled-components";

import { useLogin } from "./useLogin";

import Button from "../../ui/Buttons";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import Row from "../../ui/Row";
import SpinnerMini from "../../ui/SpinnerMini";
import TextLink from "../../ui/TextLink";
import FormRow from "../../ui/FormRow";
import InputPassword from "../../ui/InputPassword";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          (setEmail(""), setPassword(""));
        },
      },
    );
  }
  return (
    <StyledLoginForm>
      <Logo $type="LogIn" />
      <Row $type="vertical">
        <Heading $as="h4">Hi, welcome back!</Heading>
        <P>Enter your credentials to access your account.</P>
      </Row>
      <Form $type="regular" onSubmit={handleSubmit}>
        <FormRowVertical label="Email address" id="email">
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
        </FormRowVertical>
        <FormRowVertical label="password" id="password">
          <InputPassword
            type="password"
            id="password"
            autoComplete="corrent-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
        </FormRowVertical>
        <FormRow $type="action">
          <Button $variation="primary" $size="large" disabled={isPending}>
            {!isPending ? "Login" : <SpinnerMini />}
          </Button>
        </FormRow>
      </Form>
      <TextLink $linkText="Sign up" to="/signup">
        Don't have an account?
      </TextLink>
    </StyledLoginForm>
  );
}

export default LoginForm;
