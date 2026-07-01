import { useCallback, useState } from "react";
import {
  clearComplianceDraft,
  getComplianceDraft,
  saveComplianceDraft,
  type ComplianceDraft,
} from "@/lib/compliance-draft";

export function useComplianceDraft() {
  const [draft, setDraft] = useState<ComplianceDraft>(() => getComplianceDraft());

  const saveDraft = useCallback((nextDraft: ComplianceDraft) => {
    saveComplianceDraft(nextDraft);
    setDraft(nextDraft);
  }, []);

  const updateDraft = useCallback(
    (updater: (current: ComplianceDraft) => ComplianceDraft) => {
      setDraft((current) => {
        const nextDraft = updater(current);
        saveComplianceDraft(nextDraft);
        return nextDraft;
      });
    },
    [],
  );

  const reloadDraft = useCallback(() => {
    setDraft(getComplianceDraft());
  }, []);

  const clearDraft = useCallback(() => {
    clearComplianceDraft();
    setDraft(getComplianceDraft());
  }, []);

  return { draft, saveDraft, updateDraft, reloadDraft, clearDraft };
}
