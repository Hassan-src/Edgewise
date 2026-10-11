import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.$as === "h1" &&
    css`
      font-size: var(--text-4xl);
      font-weight: 800;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--text-3xl);
      font-weight: 700;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--text-2xl);
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: var(--text-xl);
      font-weight: 600;
    `}
  
  line-height: 1.4;
`;

export default Heading;
