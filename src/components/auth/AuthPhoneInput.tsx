import type { CountryOption } from "@/api/countries";
import clsx from "clsx";

type AuthPhoneInputProps = {
  label: string;
  countryCode: string;
  onCountryChange: (code: string) => void;
  onCountryBlur?: () => void;
  phone: string;
  onPhoneChange: (value: string) => void;
  onPhoneBlur?: () => void;
  countries: CountryOption[];
  loading?: boolean;
  loadError?: string;
  disabled?: boolean;
  error?: string;
};

export function AuthPhoneInput({
  label,
  countryCode,
  onCountryChange,
  onCountryBlur,
  phone,
  onPhoneChange,
  onPhoneBlur,
  countries,
  loading = false,
  loadError,
  disabled,
  error,
}: AuthPhoneInputProps) {
  const selected =
    countries.find((country) => country.code === countryCode) ?? countries[0];
  const hasError = Boolean(error || loadError);
  const displayError = error ?? loadError;

  return (
    <label className="block">
      <span className="mb-2 block text-xs md:text-sm text-[#969696]">{label}</span>
      <span
        className={clsx(
          "flex h-12 md:h-14 items-center rounded-xl border bg-white px-3 md:px-4",
          hasError
            ? "border-[#e53935] focus-within:border-[#e53935] focus-within:shadow-[0_0_0_3px_rgba(229,57,53,0.18)]"
            : "border-[#969696] focus-within:border-[#3C0DCB] focus-within:shadow-[0_0_0_3px_rgba(114,105,235,0.18)]",
        )}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="mr-3 shrink-0 text-[#c2c4ce]"
          aria-hidden="true"
        >
          <path
            d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <select
            value={countryCode}
            onChange={(e) => onCountryChange(e.target.value)}
            onBlur={onCountryBlur}
            disabled={disabled || loading || countries.length === 0}
            className="max-w-30 shrink-0 cursor-pointer appearance-none border-0 bg-transparent pr-5 text-sm font-medium text-[#33364a] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Country code"
          >
            {loading ? (
              <option value="">Loading...</option>
            ) : countries.length === 0 ? (
              <option value="">No countries available</option>
            ) : (
              countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.dialCode}
                </option>
              ))
            )}
          </select>
          <span className="h-6 w-px shrink-0 bg-[#d8dbe5]" aria-hidden="true" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            onBlur={onPhoneBlur}
            placeholder={selected ? "Phone number" : "Loading..."}
            disabled={disabled || loading}
            className="h-full min-w-0 flex-1 border-0 bg-transparent text-sm text-[#33364a] placeholder:text-[#D2D2D2] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </span>
      {displayError ? (
        <p className="mt-1 text-xs text-[#e53935]" role="alert">
          {displayError}
        </p>
      ) : null}
    </label>
  );
}
