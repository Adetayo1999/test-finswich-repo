import { apiDelete, apiGet, apiPost, apiPut } from "@/lib/api-response";
import type {
  CreateMerchantAppRequest,
  CreateMerchantAppResponse,
  CreateMerchantAppConfigRequest,
  CreateMerchantAppConfigResponse,
  DeleteMerchantAppResponse,
  MerchantAppConfigsListResponse,
  MerchantAppsListResponse,
  PublishMerchantAppConfigResponse,
  UpdateMerchantAppRequest,
  UpdateMerchantAppResponse,
} from "./apps-types";

const MERCHANT_APPS_PATH = "merchants/apps";

export async function getMerchantApps(): Promise<MerchantAppsListResponse> {
  return apiGet<MerchantAppsListResponse>(
    MERCHANT_APPS_PATH,
    "Failed to load apps",
    (response) => Array.isArray(response.data),
  );
}

export async function createMerchantApp(
  body: CreateMerchantAppRequest,
): Promise<CreateMerchantAppResponse> {
  return apiPost<CreateMerchantAppResponse>(
    MERCHANT_APPS_PATH,
    body,
    "Failed to create app",
    (response) => Boolean(response.data?.app?.id),
  );
}

export async function updateMerchantApp(
  appId: string,
  body: UpdateMerchantAppRequest,
): Promise<UpdateMerchantAppResponse> {
  return apiPut<UpdateMerchantAppResponse>(
    `${MERCHANT_APPS_PATH}/${appId}`,
    body,
    "Failed to update app",
    (response) => Boolean(response.data?.id),
  );
}

export async function deleteMerchantApp(
  appId: string,
): Promise<DeleteMerchantAppResponse> {
  return apiDelete<DeleteMerchantAppResponse>(
    `${MERCHANT_APPS_PATH}/${appId}`,
    "Failed to delete app",
  );
}

export async function createMerchantAppConfig(
  appId: string,
  body: CreateMerchantAppConfigRequest,
): Promise<CreateMerchantAppConfigResponse> {
  return apiPost<CreateMerchantAppConfigResponse>(
    `${MERCHANT_APPS_PATH}/${appId}/configs`,
    body,
    "Failed to save app configuration",
  );
}

export async function getMerchantAppConfigs(
  appId: string,
): Promise<MerchantAppConfigsListResponse> {
  return apiGet<MerchantAppConfigsListResponse>(
    `${MERCHANT_APPS_PATH}/${appId}/configs`,
    "Failed to load app configurations",
    (response) => Array.isArray(response.data),
  );
}

export async function publishMerchantAppConfig(
  appId: string,
  configId: string,
): Promise<PublishMerchantAppConfigResponse> {
  return apiPut<PublishMerchantAppConfigResponse>(
    `${MERCHANT_APPS_PATH}/${appId}/configs/${configId}/publish`,
    undefined,
    "Failed to publish app configuration",
    (response) => Boolean(response.data?.id),
  );
}
