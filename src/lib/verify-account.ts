export function isUnverifiedAccountError(message: string): boolean {
  const normalized = message.toLowerCase();

  return (
    normalized.includes("not verified") ||
    normalized.includes("unverified") ||
    normalized.includes("verify your email") ||
    normalized.includes("email verification") ||
    normalized.includes("account verification") ||
    normalized.includes("email not verified") ||
    normalized.includes("verify your account") ||
    normalized.includes("verification required") ||
    normalized.includes("account is pending")
  );
}

const VERIFICATION_EMAIL_KEY = "finswich:verify-email";

export function saveVerificationEmail(email: string) {
  sessionStorage.setItem(VERIFICATION_EMAIL_KEY, email);
}

export function getVerificationEmail(): string | null {
  return sessionStorage.getItem(VERIFICATION_EMAIL_KEY);
}

export function clearVerificationEmail() {
  sessionStorage.removeItem(VERIFICATION_EMAIL_KEY);
}

export function resolveVerificationEmail(
  ...candidates: Array<string | undefined | null>
): string {
  for (const email of candidates) {
    const trimmed = email?.trim();
    if (trimmed) return trimmed;
  }
  return "";
}
