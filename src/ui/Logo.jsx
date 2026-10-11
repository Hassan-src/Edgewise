import styled, { css } from "styled-components";
import imageSide from "../../public/Logo-vertical-light.svg";
import imageHead from "../../public/Logo-horizontal-light.svg";

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
      <Image src={imageSide} alt="" />
    </StyledLogo>
  );
}

export default Logo;
