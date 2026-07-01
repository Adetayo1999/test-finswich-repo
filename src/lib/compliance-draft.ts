import type {
  BusinessDocumentPayload,
  BusinessInfoPayload,
  BusinessSurveyPayload,
  RiskAssessmentPayload,
  SubmitBusinessComplianceRequest,
} from "@/api/compliance";

const COMPLIANCE_DRAFT_KEY = "finswich_compliance_draft";

export type ComplianceDraft = {
  businessInfo: BusinessInfoPayload;
  businessSurvey: BusinessSurveyPayload;
  riskAssessment: RiskAssessmentPayload;
  documents: BusinessDocumentPayload[];
};

export const emptyComplianceDraft: ComplianceDraft = {
  businessInfo: {
    companyName: "",
    industry: "",
    businessDescription: "",
    country: "Nigeria",
    website: "",
    registrationNumber: "",
    address: "",
    email: "",
    phoneNumber: "",
    taxIdentificationNumber: "",
    companyLogoUrl: "",
  },
  businessSurvey: {
    businessType: "",
    country: "Nigeria",
    businessModel: "",
    monthlyProcessedVolume: 0,
  },
  riskAssessment: {
    annualTurnover: 0,
    expectedTransactionVolume: 0,
    highRiskJurisdiction: false,
    sanctionListCheck: true,
    adverseMediaCheck: true,
  },
  documents: [],
};

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage);
}

function mergeDraft(draft: Partial<ComplianceDraft>): ComplianceDraft {
  return {
    businessInfo: {
      ...emptyComplianceDraft.businessInfo,
      ...draft.businessInfo,
    },
    businessSurvey: {
      ...emptyComplianceDraft.businessSurvey,
      ...draft.businessSurvey,
    },
    riskAssessment: {
      ...emptyComplianceDraft.riskAssessment,
      ...draft.riskAssessment,
    },
    documents: Array.isArray(draft.documents) ? draft.documents : [],
  };
}

export function getComplianceDraft(): ComplianceDraft {
  if (!canUseStorage()) return emptyComplianceDraft;

  const rawDraft = window.localStorage.getItem(COMPLIANCE_DRAFT_KEY);
  if (!rawDraft) return emptyComplianceDraft;

  try {
    return mergeDraft(JSON.parse(rawDraft) as Partial<ComplianceDraft>);
  } catch {
    return emptyComplianceDraft;
  }
}

export function saveComplianceDraft(draft: ComplianceDraft) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(COMPLIANCE_DRAFT_KEY, JSON.stringify(draft));
}

export function updateComplianceDraft(
  patch: Partial<ComplianceDraft>,
): ComplianceDraft {
  const nextDraft = mergeDraft({
    ...getComplianceDraft(),
    ...patch,
  });

  saveComplianceDraft(nextDraft);
  return nextDraft;
}

export function clearComplianceDraft() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(COMPLIANCE_DRAFT_KEY);
}

export function toSubmitBusinessComplianceRequest(
  draft: ComplianceDraft,
): SubmitBusinessComplianceRequest {
  return {
    businessInfo: draft.businessInfo,
    businessSurvey: draft.businessSurvey,
    documents: draft.documents,
    riskAssessment: draft.riskAssessment,
  };
}

export function getComplianceDraftMissingFields(draft: ComplianceDraft) {
  const missingFields: string[] = [];
  const { businessInfo, businessSurvey, riskAssessment, documents } = draft;

  const requiredBusinessInfo: Array<[keyof BusinessInfoPayload, string]> = [
    ["companyName", "Company name"],
    ["industry", "Industry"],
    ["businessDescription", "Business description"],
    ["country", "Business country"],
    ["website", "Website"],
    ["registrationNumber", "Registration number"],
    ["address", "Address"],
    ["email", "Email"],
    ["phoneNumber", "Phone number"],
    ["taxIdentificationNumber", "Tax identification number"],
    ["companyLogoUrl", "Company logo URL"],
  ];

  requiredBusinessInfo.forEach(([field, label]) => {
    if (!businessInfo[field]) missingFields.push(label);
  });

  if (!businessSurvey.businessType) missingFields.push("Business type");
  if (!businessSurvey.country) missingFields.push("Survey country");
  if (!businessSurvey.businessModel) missingFields.push("Business model");
  if (!businessSurvey.monthlyProcessedVolume) {
    missingFields.push("Monthly processed volume");
  }
  if (!riskAssessment.annualTurnover) missingFields.push("Annual turnover");
  if (!riskAssessment.expectedTransactionVolume) {
    missingFields.push("Expected transaction volume");
  }
  if (!documents.length) missingFields.push("Company documents");

  return missingFields;
}
