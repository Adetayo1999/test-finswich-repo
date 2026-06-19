import { useMutation } from "@tanstack/react-query";
import { resendVerifyAccountOtp, verifyAccount } from "@/api/auth";

export function useVerifyAccount() {
  return useMutation({ mutationFn: verifyAccount });
}

export function useResendVerifyAccountOtp() {
  return useMutation({ mutationFn: resendVerifyAccountOtp });
}
