import { useQuery } from "@tanstack/react-query";
import { getTradeSymbols } from "../../services/apiTrades";

export function useTradesSymbol() {
  const {
    isPending,
    data: symbols = [],
    error,
  } = useQuery({
    queryKey: ["tradesSymbols"],
    queryFn: getTradeSymbols,
  });
  return { isPending, symbols, error };
}
