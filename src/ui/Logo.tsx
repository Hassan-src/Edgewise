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

type LogoType = "Header" | "LogIn" | "SideBar";

type ImageProps = {
  $type: LogoType;
};

const Image = styled.img<ImageProps>`
  ${(props) =>
    props.$type === "Header" &&
    css`
      height: 3rem;
      width: auto;
      @media (max-width: 850px) {
        height: 2.5rem;
      }
    `}
  ${(props) =>
    props.$type === "LogIn" &&
    css`
      height: 12rem;
      width: auto;
      @media (max-width: 850px) {
        height: 8rem;
      }
    `}
`;

type LogoProps = {
  $type?: LogoType;
};

function Logo({ $type = "SideBar" }: LogoProps) {
  const { isDarkMode } = useAppMode();
  const logos = {
    Header: isDarkMode ? logoSymbolDark : logoSymbolLight,
    LogIn: isDarkMode ? imageVerticalDark : imageVertical,
  };
  const src =
    $type === "Header" ? logos.Header : $type === "LogIn" ? logos.LogIn : null;
  return (
    <StyledLogo>
      <Link to="/dashboard">
        {src !== null && (
          <Image
            fetchPriority="high"
            src={src}
            alt="Edgewise logo"
            $type={$type}
          />
        )}
      </Link>
    </StyledLogo>
  );
}

export default Logo;
