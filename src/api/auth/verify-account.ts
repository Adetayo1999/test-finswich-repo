import { apiPost } from "@/lib/api-response";
import type {
  ResendVerifyAccountOtpRequest,
  ResendVerifyAccountOtpResponse,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from "./verify-account-types";

const VERIFY_ACCOUNT_PATH = "auth/verify-account";
const RESEND_VERIFY_ACCOUNT_OTP_PATH = "auth/verify-account/resend";

export async function verifyAccount(
  body: VerifyAccountRequest,
): Promise<VerifyAccountResponse> {
  return apiPost<VerifyAccountResponse>(
    VERIFY_ACCOUNT_PATH,
    body,
    "Account verification failed",
  );
}

export async function resendVerifyAccountOtp(
  body: ResendVerifyAccountOtpRequest,
): Promise<ResendVerifyAccountOtpResponse> {
  return apiPost<ResendVerifyAccountOtpResponse>(
    RESEND_VERIFY_ACCOUNT_OTP_PATH,
    body,
    "Failed to resend verification code",
  );
}
