import styled, { css } from "styled-components";

const Form = styled.form`
  overflow: hidden;
  font-size: var(--text-xl);
  padding: 0 var(--space-4);
  ${(props) =>
    props.$type === "regular" &&
    css`
      padding: var(--space-5) var(--space-8);
      border-radius: var(--radius-md);
      @media (max-width: 1000px) {
        padding: var(--space-4) var(--space-6);
      }
      @media (max-width: 850px) {
        padding: var(--space-3) var(--space-5);
      }
      @media (max-width: 500px) {
        padding: var(--space-2) var(--space-3);
      }
    `}
  ${(props) =>
    props.$type === "modal" &&
    css`
      width: 100%;
      height: 100%;
    `}
`;

export default Form;
