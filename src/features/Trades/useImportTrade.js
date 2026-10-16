import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addImportedTrades as addImportedTradesApi } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useImportTrade() {
  const queryClient = useQueryClient();
  const { isLoading: isSending, mutate: addImportedTrades } = useMutation({
    mutationFn: addImportedTradesApi,
    onSuccess: () => {
      (toast.success("Trades Imported!"),
        queryClient.invalidateQueries({ queryKey: ["trades"] }));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isSending, addImportedTrades };
}
