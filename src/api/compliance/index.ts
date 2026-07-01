import { apiGet, apiPost } from "@/lib/api-response";
import type {
  BusinessKycStatusResponse,
  CreateShareholdersRequest,
  ShareholdersResponse,
  SubmitBusinessComplianceRequest,
  SubmitBusinessComplianceResponse,
} from "./types";

const SHAREHOLDERS_PATH = "compliance/kyc/business/shareholders";

export function getShareholders() {
  return apiGet<ShareholdersResponse>(
    SHAREHOLDERS_PATH,
    "Failed to fetch shareholders",
    (response) => Array.isArray(response.data),
  );
}

export function createShareholders(body: CreateShareholdersRequest) {
  return apiPost<ShareholdersResponse, CreateShareholdersRequest>(
    `${SHAREHOLDERS_PATH}/create`,
    body,
    "Failed to create shareholders",
    (response) => Array.isArray(response.data),
  );
}

export function submitBusinessCompliance(
  body: SubmitBusinessComplianceRequest,
) {
  return apiPost<
    SubmitBusinessComplianceResponse,
    SubmitBusinessComplianceRequest
  >(
    "compliance/kyc/business/submit",
    body,
    "Failed to submit compliance",
  );
}

export function getBusinessKycStatus() {
  return apiGet<BusinessKycStatusResponse>(
    "compliance/kyc/business/status",
    "Failed to fetch business KYC status",
    (response) => Boolean(response.data?.status),
  );
}

export type {
  BusinessDocumentPayload,
  BusinessInfoPayload,
  BusinessKycStatus,
  BusinessSurveyPayload,
  ComplianceDocument,
  CreateShareholdersRequest,
  RiskAssessmentPayload,
  Shareholder,
  ShareholderPayload,
  SubmitBusinessComplianceRequest,
} from "./types";
