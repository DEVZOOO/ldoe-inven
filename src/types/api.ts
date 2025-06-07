import { SortOrder, ApiStatus } from "@/constants";

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
  /**
   * 정렬 컬럼명
   */
  sortCol?: string;
  /**
   * 정렬 기준(ASC/DESC)
   */
  sortOrder?: string;
}

/**
 * 몹 조회 파라미터
 */
export interface SelectCreaturesListParamType extends SelectListParamType {
  /**
   * 검색 텍스트
   */
  searchText?: string;
}
