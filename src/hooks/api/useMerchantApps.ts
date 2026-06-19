import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createMerchantAppConfig,
  createMerchantApp,
  deleteMerchantApp,
  getMerchantAppConfigs,
  getMerchantApps,
  publishMerchantAppConfig,
  updateMerchantApp,
} from "@/api/merchants";
import type {
  CreateMerchantAppRequest,
  CreateMerchantAppConfigRequest,
  UpdateMerchantAppRequest,
} from "@/api/merchants";

export const MERCHANT_APPS_QUERY_KEY = ["merchantApps"] as const;
export const merchantAppConfigsQueryKey = (appId: string | undefined) =>
  ["merchantAppConfigs", appId] as const;

export function useMerchantApps() {
  return useQuery({
    queryKey: MERCHANT_APPS_QUERY_KEY,
    queryFn: async () => {
      const response = await getMerchantApps();
      return response.data;
    },
  });
}

export function useCreateMerchantApp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateMerchantAppRequest) => createMerchantApp(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MERCHANT_APPS_QUERY_KEY });
    },
  });
}

export function useUpdateMerchantApp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      appId,
      body,
    }: {
      appId: string;
      body: UpdateMerchantAppRequest;
    }) => updateMerchantApp(appId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MERCHANT_APPS_QUERY_KEY });
    },
  });
}

export function useDeleteMerchantApp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (appId: string) => deleteMerchantApp(appId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MERCHANT_APPS_QUERY_KEY });
    },
  });
}

export function useCreateMerchantAppConfig() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      appId,
      body,
    }: {
      appId: string;
      body: CreateMerchantAppConfigRequest;
    }) => createMerchantAppConfig(appId, body),
    onSuccess: (_response, variables) => {
      queryClient.invalidateQueries({ queryKey: MERCHANT_APPS_QUERY_KEY });
      queryClient.invalidateQueries({
        queryKey: merchantAppConfigsQueryKey(variables.appId),
      });
    },
  });
}

export function useMerchantAppConfigs(appId: string | undefined) {
  return useQuery({
    queryKey: merchantAppConfigsQueryKey(appId),
    queryFn: async () => {
      if (!appId) return [];
      const response = await getMerchantAppConfigs(appId);
      return response.data;
    },
    enabled: Boolean(appId),
  });
}

export function usePublishMerchantAppConfig() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      appId,
      configId,
    }: {
      appId: string;
      configId: string;
    }) => publishMerchantAppConfig(appId, configId),
    onSuccess: (_response, variables) => {
      queryClient.invalidateQueries({ queryKey: MERCHANT_APPS_QUERY_KEY });
      queryClient.invalidateQueries({
        queryKey: merchantAppConfigsQueryKey(variables.appId),
      });
    },
  });
}
