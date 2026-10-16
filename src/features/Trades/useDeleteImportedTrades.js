import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteImportedTrades as deleteImportedTradesApi } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useDeleteImportedTrades() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteImportedTrades } = useMutation({
    mutationFn: deleteImportedTradesApi,
    onSuccess: () => {
      toast.success("Imported data successfully deleted.");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteImportedTrades };
}
