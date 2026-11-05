import styled, { css } from "styled-components";

import imageSide from "/Logo-horizontal-light.svg";
import imageSideDark from "/Logo-horizontal-dark.svg";
import imageVertical from "/Logo-vertical-light.svg";
import imageVerticalDark from "/Logo-vertical-dark.svg";

import { useDarkMode } from "../context/useDarkMode";

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
  const { isDarkMode } = useDarkMode();
  const srcLogin =
    $type === "LogIn" && isDarkMode ? imageVerticalDark : imageVertical;
  const srcSideBar =
    $type === "SideBar" && isDarkMode ? imageSideDark : imageSide;
  return (
    <StyledLogo>
      <Image
        fetchPriority="high"
        src={$type === "LogIn" ? srcLogin : srcSideBar}
        alt=""
        $type={$type}
      />
    </StyledLogo>
  );
}

export default Logo;
