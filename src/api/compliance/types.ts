export type ComplianceDocument = {
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  uploadDate?: string;
};

export type ShareholderDelegation = "director" | "shareholder" | string;

export type ShareholderPayload = {
  fullName: string;
  delegation: ShareholderDelegation;
  email: string;
  phoneNumber: string;
  bvn: string;
  bankAccount: string;
  ownershipPercentage: number;
  uboDocument: ComplianceDocument;
  bankStatement: ComplianceDocument;
};

export type Shareholder = ShareholderPayload & {
  status?: string;
  submittedAt?: string | null;
  kyc?: {
    url: string;
    expiresAt: string;
    status: string;
    providerReference: string;
  };
};

export type CreateShareholdersRequest = {
  shareholders: ShareholderPayload[];
};

export type ShareholdersResponse = {
  status: boolean;
  message: string;
  data: Shareholder[];
};

export type BusinessInfoPayload = {
  companyName: string;
  industry: string;
  businessDescription: string;
  country: string;
  website: string;
  registrationNumber: string;
  address: string;
  email: string;
  phoneNumber: string;
  taxIdentificationNumber: string;
  companyLogoUrl: string;
};

export type BusinessSurveyPayload = {
  businessType: string;
  country: string;
  businessModel: string;
  monthlyProcessedVolume: number;
};

export type BusinessDocumentPayload = ComplianceDocument & {
  type: string;
};

export type RiskAssessmentPayload = {
  annualTurnover: number;
  expectedTransactionVolume: number;
  highRiskJurisdiction: boolean;
  sanctionListCheck: boolean;
  adverseMediaCheck: boolean;
};

export type SubmitBusinessComplianceRequest = {
  businessInfo: BusinessInfoPayload;
  businessSurvey: BusinessSurveyPayload;
  documents: BusinessDocumentPayload[];
  riskAssessment: RiskAssessmentPayload;
};

export type SubmitBusinessComplianceResponse = {
  status: boolean;
  message: string;
  data?: unknown;
};

export type BusinessKycStatus = {
  userId: string;
  userType: string;
  status: string;
  documentCount: number;
  submittedAt?: string;
  completedAt?: string;
  riskLevel?: string;
  tiers: {
    tier2: unknown | null;
    tier3: unknown | null;
  };
};

export type BusinessKycStatusResponse = {
  status: boolean;
  message: string;
  data: BusinessKycStatus;
};
