import type { CountryOption } from "@/api/countries";

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  password: string;
};

export const REGISTER_DEFAULT_COUNTRY = "NG";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function buildFullPhone(dialCode: string, localNumber: string) {
  const digits = localNumber.replace(/\D/g, "");
  const code = dialCode.startsWith("+") ? dialCode : `+${dialCode}`;
  return `${code}${digits}`;
}

export function validatePhone(
  localNumber: string,
  countryCode: string,
  countries: CountryOption[],
) {
  if (!localNumber.trim()) {
    return "Phone number is required";
  }

  const selected = countries.find((country) => country.code === countryCode);
  if (!selected) {
    return "Please wait for countries to load";
  }

  const digits = localNumber.replace(/\D/g, "");
  if (digits.length < 7) {
    return "Enter a valid phone number";
  }

  const fullPhone = buildFullPhone(selected.dialCode, localNumber);
  if (fullPhone.replace(/\D/g, "").length < 10) {
    return "Enter a valid phone number";
  }

  return true;
}

export const registerFormRules = {
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
    maxLength: {
      value: 50,
      message: "First name must be at most 50 characters",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters",
    },
    maxLength: {
      value: 50,
      message: "Last name must be at most 50 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: EMAIL_PATTERN,
      message: "Enter a valid email address",
    },
  },
  country: {
    required: "Country is required",
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
  },
} as const;
