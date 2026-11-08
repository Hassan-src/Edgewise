import styled, { css } from "styled-components";

import imageSide from "/Logo-horizontal-light.svg";
import imageSideDark from "/Logo-horizontal-dark.svg";
import imageVertical from "/Logo-vertical-light.svg";
import imageVerticalDark from "/Logo-vertical-dark.svg";
import symbolLight from "/LogoSymbolLight.svg";
import symbolDark from "/LogoSymbolDark.svg";
import { useAppMode } from "../context/useAppMode";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  ${(props) =>
    props.$type === "SideBar" &&
    css`
      height: 10rem;
      width: auto;
    `}
  ${(props) =>
    props.$type === "SideBarSmall" &&
    css`
      width: 100%;
      height: 3rem;
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
  const { isDarkMode } = useAppMode();
  const logos = {
    SideBar: isDarkMode ? imageSideDark : imageSide,
    SideBarSmall: isDarkMode ? symbolDark : symbolLight,
    Header: isDarkMode ? imageSideDark : imageSide,
    LogIn: isDarkMode ? imageVerticalDark : imageVertical,
  };

  return (
    <StyledLogo>
      <Image
        fetchPriority="high"
        src={logos[$type]}
        alt="Edgewise logo"
        $type={$type}
      />
    </StyledLogo>
  );
}

export default Logo;
