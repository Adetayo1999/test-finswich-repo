import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createService,
  getServices,
  toggleService,
  type CreateServiceRequest,
  type ToggleServiceRequest,
} from "@/api/services";

export const servicesQueryKey = (appId: string | undefined) =>
  ["services", appId] as const;

export function useServices(appId: string | undefined) {
  return useQuery({
    queryKey: servicesQueryKey(appId),
    queryFn: async () => {
      if (!appId) return [];
      const response = await getServices(appId);
      return response.data;
    },
    enabled: Boolean(appId),
  });
}

export function useCreateService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateServiceRequest) => createService(body),
    onSuccess: (_response, variables) => {
      queryClient.invalidateQueries({
        queryKey: servicesQueryKey(variables.appId),
      });
    },
  });
}

export function useToggleService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      serviceId,
      body,
    }: {
      serviceId: string;
      appId: string;
      body: ToggleServiceRequest;
    }) => toggleService(serviceId, body),
    onSuccess: (_response, variables) => {
      queryClient.invalidateQueries({
        queryKey: servicesQueryKey(variables.appId),
      });
    },
  });
}
