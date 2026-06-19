import { getCurrentUser } from "@/api/auth";
import { isAuthenticated, updateAuthSessionUser } from "@/lib/auth-session";
import { useQuery } from "@tanstack/react-query";

export const CURRENT_USER_QUERY_KEY = ["currentUser"] as const;

export function useCurrentUser() {
  return useQuery({
    queryKey: CURRENT_USER_QUERY_KEY,
    queryFn: async () => {
      const response = await getCurrentUser();
      updateAuthSessionUser(response.data);
      return response.data;
    },
    enabled: isAuthenticated(),
    retry: false,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });
}
