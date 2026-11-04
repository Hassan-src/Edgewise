import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditAccount } from "../../services/apiTradesAccount";
import toast from "react-hot-toast";

export function useCreateAccount() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createAccount } = useMutation({
    mutationFn: (newAccount) => addEditAccount(newAccount),
    onSuccess: () => {
      toast.success("Account successfully created.");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, createAccount };
}
