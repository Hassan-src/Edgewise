import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import imageVertical from "/Logo-vertical-light.svg";
import imageVerticalDark from "/Logo-vertical-dark.svg";
import logoSymbolLight from "/LogoSymbolLight.svg";
import logoSymbolDark from "/LogoSymbolDark.svg";

import { useAppMode } from "../context/useAppMode";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  ${(props) =>
    props.$type === "Header" &&
    css`
      height: 3rem;
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
    Header: isDarkMode ? logoSymbolDark : logoSymbolLight,
    LogIn: isDarkMode ? imageVerticalDark : imageVertical,
  };

  return (
    <StyledLogo>
      <Link to="/dashboard">
        <Image
          fetchPriority="high"
          src={logos[$type]}
          alt="Edgewise logo"
          $type={$type}
        />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
