import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../../services/apiTradesAccount";

export function useAccount() {
  const {
    isPending,
    data: account = [],
    error,
  } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });
  return { isPending, account, error };
}
