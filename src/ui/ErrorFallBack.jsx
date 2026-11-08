import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "./Buttons";

const StyledErrorFallBack = styled.main`
  height: 100dvh;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
`;

const Box = styled.div`
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  flex: 0 1 96rem;
  & h1 {
    margin-bottom: var(--space-6);
  }
  & p {
    font-family: "sono";
    margin-bottom: var(--space-6);
    color: var(--color-text-secondary);
  }
`;

const ButonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallBack>
        <Box>
          <Heading $as="h1">Somthing went wrong!</Heading>
          <p>{error.message}</p>
          <ButonBox>
            <Button
              $variation="primary"
              $size="large"
              onClick={resetErrorBoundary}
            >
              Try again
            </Button>
          </ButonBox>
        </Box>
      </StyledErrorFallBack>
    </>
  );
}

export default ErrorFallBack;
