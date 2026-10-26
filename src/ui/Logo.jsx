import styled, { css } from "styled-components";
import imageSide from "/Logo-horizontal-light.svg";
import imageVertical from "/Logo-vertical-light.svg";

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
    ${(props) =>
    props.$type === "LogIn" &&
    css`
      height: 15rem;
      width: auto;
    `}
`;

function Logo({ $type = "SideBar" }) {
  return (
    <StyledLogo>
      <Image
        fetchPriority="high"
        src={$type === "LogIn" ? imageVertical : imageSide}
        alt=""
        $type={$type}
      />
    </StyledLogo>
  );
}

export default Logo;
