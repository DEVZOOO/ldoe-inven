import { ApiStatus } from "@/constants/status";

export interface CommonRes<T> {
  status: ApiStatus;
  data?: T;
  error?: unknown;
}

/**
 * 리스트 조회시 파라미터
 */
export interface SelectListParamType {
  page?: number;
  cnt: number;
}
