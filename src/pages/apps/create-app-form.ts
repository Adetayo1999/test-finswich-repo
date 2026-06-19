export type CreateAppFormValues = {
  name: string;
  websiteUrl: string;
  alias: string;
  description: string;
  subdomain: string;
};

const URL_PATTERN = /^https?:\/\/.+/;
const ALIAS_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SUBDOMAIN_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]*)*$/;

export const createAppFormRules = {
  name: {
    required: "App name is required",
    minLength: {
      value: 2,
      message: "App name must be at least 2 characters",
    },
  },
  websiteUrl: {
    required: "Website URL is required",
    pattern: {
      value: URL_PATTERN,
      message: "Enter a valid URL (include https://)",
    },
  },
  alias: {
    required: "App alias is required",
    pattern: {
      value: ALIAS_PATTERN,
      message: "Use lowercase letters, numbers, and hyphens only",
    },
  },
  description: {
    required: "Description is required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters",
    },
  },
  subdomain: {
    required: "Subdomain is required",
    pattern: {
      value: SUBDOMAIN_PATTERN,
      message: "Use lowercase letters, numbers, and hyphens only",
    },
  },
} as const;

export function slugifyAppName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatAppDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}
