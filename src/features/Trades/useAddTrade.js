import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditTrade } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useAddTrade() {
  // using query client to refetch the data from supabase
  const queryClient = useQueryClient();
  // mutating the data and adding new row
  const { isLoading: isAdding, mutate: addingTrade } = useMutation({
    mutationFn: (newTradeData) => addEditTrade(newTradeData),
    onSuccess: () => {
      toast.success("New trade added");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isAdding, addingTrade };
}
