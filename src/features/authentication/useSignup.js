import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      if (data.session) {
        toast.success("Account successfully created!");
        navigate("/dashboard", { replace: true });
      } else {
        toast.success("Account created! Please verify your email.");
        navigate("/login", { replace: true });
      }
    },
    onError: (error) => toast.error(error.message),
  });
  return { signup, isLoading };
}
