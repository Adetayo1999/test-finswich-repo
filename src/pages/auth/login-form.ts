const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LoginFormValues = {
  email: string;
  password: string;
};

export const loginFormRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: EMAIL_PATTERN,
      message: "Enter a valid email address",
    },
  },
  password: {
    required: "Password is required",
  },
} as const;
