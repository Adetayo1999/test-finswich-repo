import { apiPost } from "@/lib/api-response";
import type {
  MerchantRegistrationRequest,
  MerchantRegistrationResponse,
} from "./types";

const MERCHANT_REGISTRATION_PATH = "onboarding/merchants/registration";

export async function registerMerchant(
  body: MerchantRegistrationRequest,
): Promise<MerchantRegistrationResponse> {
  return apiPost<MerchantRegistrationResponse>(
    MERCHANT_REGISTRATION_PATH,
    body,
    "Registration failed",
    (response) => Boolean(response.data?.id && response.data?.email),
  );
}
