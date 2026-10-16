import { useQuery } from "@tanstack/react-query";
import { getTrades } from "../../services/apiTrades";

export function useTrades() {
  // fetching the data
  const {
    isLoading,
    data: trades,
    error,
  } = useQuery({
    queryKey: ["trades"],
    queryFn: getTrades,
  });
  return { isLoading, trades, error };
}
