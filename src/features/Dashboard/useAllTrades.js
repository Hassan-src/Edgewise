import { useQuery } from "@tanstack/react-query";
import { getAllTrades } from "../../services/apiTrades";

export function useAllTrades() {
  const { isPending, data, error } = useQuery({
    queryKey: ["all-trades"],
    queryFn: () => getAllTrades(),
  });

  return {
    isPending,
    trades: data ?? [],
    error,
  };
}
