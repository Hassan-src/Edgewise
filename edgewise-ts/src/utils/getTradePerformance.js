export function getTradePerformance(trades = []) {
  const sortedTrades = trades
    .filter(
      (trade) => trade.close_time && Number.isFinite(Number(trade.net_profit)),
    )
    .sort((a, b) => new Date(a.close_time) - new Date(b.close_time));

  let cumulativePnL = 0;

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
