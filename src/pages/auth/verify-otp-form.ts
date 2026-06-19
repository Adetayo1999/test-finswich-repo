export type VerifyOtpFormValues = {
  token: string;
};

export const verifyOtpFormRules = {
  token: {
    required: "OTP is required",
    minLength: {
      value: 4,
      message: "Enter a valid OTP code",
    },
  },
} as const;
