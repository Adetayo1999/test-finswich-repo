import axios from "axios";

export type CountryOption = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
};

type CountriesNowCode = {
  name: string;
  code: string;
  dial_code: string;
};

type CountriesNowCodesResponse = {
  error: boolean;
  msg: string;
  data: CountriesNowCode[];
};

const COUNTRIES_CODES_URL =
  "https://countriesnow.space/api/v0.1/countries/codes";

function toFlagEmoji(code: string): string {
  return [...code.toUpperCase()].map((char) =>
    String.fromCodePoint(127397 + char.charCodeAt(0)),
  ).join("");
}

function normalizeDialCode(dialCode: string): string {
  return dialCode.replace(/\s+/g, "");
}

export async function fetchCountries(): Promise<CountryOption[]> {
  const { data } = await axios.get<CountriesNowCodesResponse>(
    COUNTRIES_CODES_URL,
  );

  if (data.error || !Array.isArray(data.data)) {
    throw new Error(data.msg || "Failed to load countries");
  }

  return data.data
    .map((country) => {
      const dialCode = normalizeDialCode(country.dial_code);
      if (!country.code || !dialCode) return null;

      return {
        code: country.code,
        name: country.name,
        dialCode,
        flag: toFlagEmoji(country.code),
      };
    })
    .filter((country): country is CountryOption => country !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}
