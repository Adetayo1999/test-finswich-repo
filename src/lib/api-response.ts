import axios from "axios";
import { api } from "@/lib/api";

export type ApiErrorBody = {
  status?: boolean;
  message?: string;
};

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;

    if (data && typeof data === "object" && "message" in data) {
      const message = (data as ApiErrorBody).message;
      if (message) return message;
    }

    if (typeof data === "string" && data.trim()) {
      return data;
    }

    return error.message || fallback;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

export function assertApiSuccess<T extends { status: boolean; message: string }>(
  body: unknown,
  validate: (response: T) => boolean,
  fallbackError: string,
): T {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid response");
  }

  const response = body as T;

  if (!response.status) {
    throw new Error(response.message || fallbackError);
  }

  if (!validate(response)) {
    throw new Error("Invalid response data");
  }

  return response;
}

export async function apiGet<
  T extends { status: boolean; message: string },
>(
  path: string,
  fallbackError: string,
  validate: (response: T) => boolean = () => true,
): Promise<T> {
  try {
    const { data } = await api.get<T>(path);
    return assertApiSuccess(data, validate, fallbackError);
  } catch (error) {
    throw new Error(getApiErrorMessage(error, fallbackError));
  }
}

export async function apiDelete<
  T extends { status: boolean; message: string },
>(
  path: string,
  fallbackError: string,
  validate: (response: T) => boolean = () => true,
): Promise<T> {
  try {
    const { data } = await api.delete<T>(path);
    return assertApiSuccess(data, validate, fallbackError);
  } catch (error) {
    throw new Error(getApiErrorMessage(error, fallbackError));
  }
}

export async function apiPut<
  T extends { status: boolean; message: string },
  B = unknown,
>(
  path: string,
  body: B,
  fallbackError: string,
  validate: (response: T) => boolean = () => true,
): Promise<T> {
  try {
    const { data } = await api.put<T>(path, body);
    return assertApiSuccess(data, validate, fallbackError);
  } catch (error) {
    throw new Error(getApiErrorMessage(error, fallbackError));
  }
}

export async function apiPost<
  T extends { status: boolean; message: string },
  B = unknown,
>(
  path: string,
  body: B,
  fallbackError: string,
  validate: (response: T) => boolean = () => true,
): Promise<T> {
  try {
    const { data } = await api.post<T>(path, body);
    return assertApiSuccess(data, validate, fallbackError);
  } catch (error) {
    throw new Error(getApiErrorMessage(error, fallbackError));
  }
}
