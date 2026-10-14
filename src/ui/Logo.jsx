import styled, { css } from "styled-components";
import imageSide from "/Logo-horizontal-light.svg";

const StyledLogo = styled.div`
  text-align: center;
`;

const Image = styled.img`
  ${(props) =>
    props.$type === "SideBar" &&
    css`
      height: 10rem;
      width: auto;
    `}
  ${(props) =>
    props.$type === "Header" &&
    css`
      height: 5rem;
      width: auto;
    `}
`;

function Logo() {
  return (
    <StyledLogo>
      <Image fetchPriority="high" src={imageSide} alt="" />
    </StyledLogo>
  );
}

export default Logo;
