import type { ServiceType } from "@/api/services";

export type PricingType =
  | "FLAT_RANGE"
  | "FLAT_NO_RANGE"
  | "PERCENTAGE_WITH_CAP"
  | "PERCENTAGE_NO_CAP";

export type PricingRuleInput = {
  title: string;
  description: string;
  isActive: boolean;
  type: PricingType;
  lowerRangeValue?: number;
  upperRangeValue?: number;
  flatAmount?: number;
  percentageValue?: number;
  lowerCapValue?: number;
  upperCapValue?: number;
};

export type PricingRule = PricingRuleInput & {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  appId?: string;
  serviceType?: ServiceType;
  currency?: string;
};

export type PricingRulesRequest = {
  appId: string;
  serviceType: ServiceType;
  currency: string;
  pricings: PricingRuleInput[];
};

export type PricingRulesListResponse = {
  success: boolean;
  message: string;
  data: PricingRule[] | { pricings?: PricingRule[] };
};

export type PricingRulesMutationResponse = {
  success: boolean;
  message: string;
  data: PricingRule[] | { pricings?: PricingRule[] };
};
