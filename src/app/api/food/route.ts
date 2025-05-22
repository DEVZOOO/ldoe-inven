import { CommonRes, FoodInfo } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { selectAllFood } from "./service";
import { ApiStatus } from "@/constants";

/**
 *
 * @param req 전체 리스트 조회
 * @returns
 */
export async function GET(req: NextRequest) {
  let result: CommonRes<FoodInfo[]>;

  try {
    const searchParams = req.nextUrl.searchParams;
    const cnt = Number(searchParams.get("cnt")) ?? 10;
    const data = await selectAllFood({ cnt });
    result = {
      status: ApiStatus.SUCCESS,
      data,
    };
  } catch (e) {
    console.error(`## FAIL ::`, e);
    result = { status: ApiStatus.ERROR, error: e };
  }

  return NextResponse.json(result);
}
