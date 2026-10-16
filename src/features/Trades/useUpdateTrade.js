import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditTrade } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useUpdateTrade() {
  const queryClient = useQueryClient();
  // Editing the added row
  const { isLoading: isUpdating, mutate: updatingTrade } = useMutation({
    mutationFn: ({ newTradeData, editId }) =>
      addEditTrade(newTradeData, editId),
    onSuccess: () => {
      toast.success("Trade successfully edited");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updatingTrade };
}
