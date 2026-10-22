import { useQuery } from "@tanstack/react-query";
import { getTradeSymbols } from "../../services/apiTrades";

export function useTradesSymbol() {
  const {
    isLoading,
    data: symbols = [],
    error,
  } = useQuery({
    queryKey: ["tradesSymbols"],
    queryFn: getTradeSymbols,
  });
  return { isLoading, symbols, error };
}
