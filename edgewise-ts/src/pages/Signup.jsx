import styled from "styled-components";

import SignupForm from "../features/authentication/SignupForm";

const StyledSignup = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: minmax(0, 50rem);
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
  padding: var(--space-6) var(--space-8);
  overflow-x: auto;
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    width: 100%;
    min-height: 100dvh;
    padding: 0;
  }
`;

function Signup() {
  return (
    <StyledSignup>
      <SignupForm />
    </StyledSignup>
  );
}

export default Signup;
