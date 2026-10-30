import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";

const StyledSignup = styled.main`
  min-height: 100dvh;
  grid-template-columns: 60rem;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
`;

function Signup() {
  return (
    <StyledSignup>
      <SignupForm />
    </StyledSignup>
  );
}

export default Signup;
