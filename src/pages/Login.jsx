import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LogIn = styled.main`
  min-height: 100dvh;
  grid-template-columns: 48rem;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
`;

function Login() {
  return (
    <LogIn>
      <LoginForm />
    </LogIn>
  );
}

export default Login;
