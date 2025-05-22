import { NextRequest, NextResponse } from "next/server";
import { CommonRes } from "@/types/api";
import { ApiStatus } from "@/constants/status";
import { WeaponsInfo } from "@/types";
import { selectAllWeapons } from "./service";

/**
 * 전체 리스트 조회
 */
export async function GET(req: NextRequest) {
  let result: CommonRes<WeaponsInfo[]>;

  try {
    const searchParams = req.nextUrl.searchParams;
    const cnt = Number(searchParams.get("cnt")) ?? 10;
    const data = await selectAllWeapons({ cnt });
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
