import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createShareholders,
  getBusinessKycStatus,
  getShareholders,
  submitBusinessCompliance,
  type CreateShareholdersRequest,
  type SubmitBusinessComplianceRequest,
} from "@/api/compliance";

export const shareholdersQueryKey = ["compliance", "shareholders"] as const;
export const businessKycStatusQueryKey = ["compliance", "businessKycStatus"] as const;

export function useShareholders() {
  return useQuery({
    queryKey: shareholdersQueryKey,
    queryFn: async () => {
      const response = await getShareholders();
      return response.data;
    },
  });
}

export function useCreateShareholders() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateShareholdersRequest) => createShareholders(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: shareholdersQueryKey });
    },
  });
}

export function useSubmitBusinessCompliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: SubmitBusinessComplianceRequest) =>
      submitBusinessCompliance(body),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: businessKycStatusQueryKey });
    },
  });
}

export function useBusinessKycStatus(enabled = true) {
  return useQuery({
    queryKey: businessKycStatusQueryKey,
    queryFn: async () => {
      const response = await getBusinessKycStatus();
      return response.data;
    },
    enabled,
  });
}
