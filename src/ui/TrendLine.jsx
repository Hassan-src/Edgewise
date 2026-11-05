import styled, { css } from "styled-components";
import { useDarkMode } from "../context/useDarkMode";

import profitLight from "/TrendProfitLight.svg";
import profitDark from "/TrendProfitDark.svg";
import lossLight from "/TrendLossLight.svg";
import lossDark from "/TrendLossDark.svg";

const StyledTrendLine = styled.div`
  width: 100%;
`;

const Image = styled.img`
  ${(props) =>
    props.$type === "Profit" &&
    css`
      height: 50%;
      width: auto;
      position: absolute;
      bottom: -13%;
      right: -5%;
    `}
  ${(props) =>
    props.$type === "Loss" &&
    css`
      height: 50%;
      width: auto;
      position: absolute;
      bottom: -8%;
      left: 0;
    `}
`;

function TrendLine({ $type }) {
  const { isDarkMode } = useDarkMode();
  const srcProfit = $type === "Profit" && isDarkMode ? profitDark : profitLight;
  const srcLoss = $type === "Loss" && isDarkMode ? lossDark : lossLight;
  return (
    <StyledTrendLine>
      <Image
        src={$type === "Profit" ? srcProfit : srcLoss}
        alt={$type}
        $type={$type}
      />
    </StyledTrendLine>
  );
}

export default TrendLine;
