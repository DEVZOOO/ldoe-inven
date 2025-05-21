import { ApiStatus } from "@/constants/status";

export interface CommonRes<T> {
  status: ApiStatus;
  data?: T;
  error?: unknown;
}
