import { selectAllCreatures } from "@/app/api/creatures/service";
import { NextRequest, NextResponse } from "next/server";
import { CreaturesInfo } from "@/types/dto";
import { CommonRes } from "@/types/api";
import { ApiStatus } from "@/constants/status";

/**
 * 전체 리스트 조회
 */
export async function GET(req: NextRequest) {
  let result: CommonRes<CreaturesInfo[]>;

  try {
    const searchParams = req.nextUrl.searchParams;
    const cnt = Number(searchParams.get("cnt") ?? 0);
    const data = await selectAllCreatures({ cnt });
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
