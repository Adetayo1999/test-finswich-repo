import type { ServiceType } from "@/api/services";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-response";
import type {
  PricingRule,
  PricingRulesListResponse,
  PricingRulesMutationResponse,
  PricingRulesRequest,
} from "./types";

function assertPricingSuccess<
  T extends { success: boolean; message: string; data: unknown },
>(
  body: unknown,
  fallbackError: string,
): T {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid response");
  }

  const response = body as T;

  if (!response.success) {
    throw new Error(response.message || fallbackError);
  }

  if (!("data" in response)) {
    throw new Error("Invalid response data");
  }

  return response;
}

export function normalizePricingRules(
  data: PricingRulesListResponse["data"] | PricingRulesMutationResponse["data"],
): PricingRule[] {
  if (Array.isArray(data)) return data;

  if (data && typeof data === "object" && Array.isArray(data.pricings)) {
    return data.pricings;
  }

  return [];
}

export async function getPricingRules(params: {
  appId: string;
  serviceType?: ServiceType;
  currency?: string;
}): Promise<PricingRulesListResponse> {
  try {
    const { data } = await api.get<PricingRulesListResponse>("pricing", {
      params,
    });

    return assertPricingSuccess<PricingRulesListResponse>(
      data,
      "Failed to load pricing rules",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to load pricing rules"));
  }
}

export async function createPricingRules(
  body: PricingRulesRequest,
): Promise<PricingRulesMutationResponse> {
  try {
    const { data } = await api.post<PricingRulesMutationResponse>(
      "pricing",
      body,
    );

    return assertPricingSuccess<PricingRulesMutationResponse>(
      data,
      "Failed to create pricing rules",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to create pricing rules"));
  }
}

export async function replacePricingRules(
  body: PricingRulesRequest,
): Promise<PricingRulesMutationResponse> {
  try {
    const { data } = await api.patch<PricingRulesMutationResponse>(
      "pricing",
      body,
    );

    return assertPricingSuccess<PricingRulesMutationResponse>(
      data,
      "Failed to replace pricing rules",
    );
  } catch (error) {
    throw new Error(
      getApiErrorMessage(error, "Failed to replace pricing rules"),
    );
  }
}

export type {
  PricingRule,
  PricingRuleInput,
  PricingRulesListResponse,
  PricingRulesMutationResponse,
  PricingRulesRequest,
  PricingType,
} from "./types";
