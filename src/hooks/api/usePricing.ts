import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPricingRules,
  getPricingRules,
  normalizePricingRules,
  replacePricingRules,
  type PricingRulesRequest,
} from "@/api/pricing";
import type { ServiceType } from "@/api/services";

export const pricingQueryKey = (
  appId: string | undefined,
  serviceType?: ServiceType,
  currency?: string,
) => ["pricing", appId, serviceType, currency] as const;

export function usePricingRules(
  appId: string | undefined,
  serviceType?: ServiceType,
  currency?: string,
) {
  return useQuery({
    queryKey: pricingQueryKey(appId, serviceType, currency),
    queryFn: async () => {
      if (!appId) return [];
      const response = await getPricingRules({
        appId,
        serviceType,
        currency,
      });
      return normalizePricingRules(response.data);
    },
    enabled: Boolean(appId && serviceType),
  });
}

function invalidatePricingQueries(
  queryClient: ReturnType<typeof useQueryClient>,
  variables: PricingRulesRequest,
) {
  queryClient.invalidateQueries({
    queryKey: pricingQueryKey(variables.appId, variables.serviceType),
  });
  queryClient.invalidateQueries({
    queryKey: pricingQueryKey(
      variables.appId,
      variables.serviceType,
      variables.currency,
    ),
  });
}

export function useCreatePricingRules() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: PricingRulesRequest) => createPricingRules(body),
    onSuccess: (_response, variables) => {
      invalidatePricingQueries(queryClient, variables);
    },
  });
}

export function useReplacePricingRules() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: PricingRulesRequest) => replacePricingRules(body),
    onSuccess: (_response, variables) => {
      invalidatePricingQueries(queryClient, variables);
    },
  });
}
