import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.$as === "h1" &&
    css`
      font-size: var(--text-4xl);
      font-weight: 800;
      text-transform: capitalize;
    `}
  ${(props) =>
    props.$as === "h2" &&
    css`
      font-size: var(--text-3xl);
      font-weight: 700;
      text-transform: capitalize;
    `}
  ${(props) =>
    props.$as === "h3" &&
    css`
      font-size: var(--text-2xl);
      font-weight: 600;
      text-transform: capitalize;
    `}
  ${(props) =>
    props.$as === "h4" &&
    css`
      font-size: var(--text-4xl);
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      letter-spacing: 3px;
    `}
  
  line-height: 1.4;
`;

export default Heading;
