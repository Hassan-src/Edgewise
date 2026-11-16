import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";

const LogIn = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: minmax(0, 48rem);
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
  padding: var(--space-6) var(--space-4);
`;

function Login() {
  return (
    <LogIn>
      <LoginForm />
    </LogIn>
  );
}

export default Login;
