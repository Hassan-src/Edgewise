import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrade as deleteTradeApi } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useDeleteTrade() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteTrade } = useMutation({
    mutationFn: deleteTradeApi,
    onSuccess: () => {
      toast.success("Trade successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["trades"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteTrade };
}
