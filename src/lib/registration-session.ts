import type { MerchantRegistrationData } from "@/api/auth";

const REGISTRATION_SESSION_KEY = "finswich:merchant-registration";

export function saveRegistrationSession(data: MerchantRegistrationData) {
  sessionStorage.setItem(REGISTRATION_SESSION_KEY, JSON.stringify(data));
}

export function getRegistrationSession(): MerchantRegistrationData | null {
  const raw = sessionStorage.getItem(REGISTRATION_SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as MerchantRegistrationData;
  } catch {
    return null;
  }
}

export function clearRegistrationSession() {
  sessionStorage.removeItem(REGISTRATION_SESSION_KEY);
}
