type Trade = {
  symbol: string;
  close_time: string;
  close_price: string;
  net_profit: number;
  net_profit_percentage: number;
};

export function getTradePerformance(trades: Trade[] = []) {
  const sortedTrades = trades
    .filter(
      (trade) => trade.close_time && Number.isFinite(Number(trade.net_profit)),
    )
    .sort(
      (a, b) =>
        new Date(a.close_time).getTime() - new Date(b.close_time).getTime(),
    );

  let cumulativePnL: number = 0;

  return sortedTrades.map((trade, index) => {
    const pnl = Number(trade.net_profit);

    cumulativePnL += pnl;

    return {
      ...trade,
      tradeNumber: index + 1,
      pnl,
      cumulativePnL,
      balance: cumulativePnL,
    };
  });
}
