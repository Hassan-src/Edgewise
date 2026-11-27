import { useQuery } from "@tanstack/react-query";
import { getRecentTrades } from "../../services/apiTrades";

export function useRecentTrades() {
  const {
    data: recentTrades,
    isPending,
    error,
  } = useQuery({
    queryKey: ["trades", "recent"],
    queryFn: getRecentTrades,
  });
  return { recentTrades, isPending, error };
}
