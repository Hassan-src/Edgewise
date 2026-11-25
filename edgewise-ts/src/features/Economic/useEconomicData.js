import { useQuery } from "@tanstack/react-query";
import { getEconomicData } from "../../data/getEconomicData";

export function useEconomicData() {
  const { data, error, isPending } = useQuery({
    queryKey: ["events"],
    queryFn: getEconomicData,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 15 * 60 * 1000,
  });
  return { data, error, isPending };
}
