import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-response";
import type {
  CreateServiceRequest,
  CreateServiceResponse,
  ServicesListResponse,
  ToggleServiceRequest,
  ToggleServiceResponse,
} from "./types";

function assertServiceSuccess<T extends { success: boolean; message: string }>(
  body: unknown,
  validate: (response: T) => boolean,
  fallbackError: string,
): T {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid response");
  }

  const response = body as T;

  if (!response.success) {
    throw new Error(response.message || fallbackError);
  }

  if (!validate(response)) {
    throw new Error("Invalid response data");
  }

  return response;
}

export async function getServices(appId: string): Promise<ServicesListResponse> {
  try {
    const { data } = await api.get<ServicesListResponse>("services", {
      params: { appid: appId },
    });

    return assertServiceSuccess<ServicesListResponse>(
      data,
      (response) => Array.isArray(response.data),
      "Failed to load services",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to load services"));
  }
}

export async function createService(
  body: CreateServiceRequest,
): Promise<CreateServiceResponse> {
  try {
    const { data } = await api.post<CreateServiceResponse>("services", body);

    return assertServiceSuccess<CreateServiceResponse>(
      data,
      (response) => Boolean(response.data?.id),
      "Failed to create service",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to create service"));
  }
}

export async function toggleService(
  serviceId: string,
  body: ToggleServiceRequest,
): Promise<ToggleServiceResponse> {
  try {
    const { data } = await api.patch<ToggleServiceResponse>(
      `services/${serviceId}`,
      body,
    );

    return assertServiceSuccess<ToggleServiceResponse>(
      data,
      (response) => Boolean(response.data?.id),
      "Failed to update service",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to update service"));
  }
}

export type {
  AppService,
  CreateServiceRequest,
  CreateServiceResponse,
  ServiceType,
  ServicesListResponse,
  ToggleServiceRequest,
  ToggleServiceResponse,
} from "./types";
