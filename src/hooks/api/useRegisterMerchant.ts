import { useMutation } from "@tanstack/react-query";
import { registerMerchant } from "@/api/auth";

export function useRegisterMerchant() {
  return useMutation({ mutationFn: registerMerchant });
}
