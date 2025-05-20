import { exec } from "@/lib/db";
import { CreaturesInfo } from "@/types/dto";
import { NextResponse } from "next/server";

/**
 * 몹 리스트 조회
 */
async function selectAllCreatures(page = 1, cnt: number) {
  try {
    const startIdx = (page - 1) * cnt,
      endIdx = startIdx + cnt;
    const sql = `SELECT * FROM CREATURES LIMIT ${startIdx}, ${endIdx}`;
    const result = await exec<CreaturesInfo>(sql);
    return NextResponse.json(result);
  } catch (err: unknown) {
    let msg;
    if (err instanceof Error) {
      msg = err.message;
    }
    return NextResponse.json(
      {
        error: "## FAIL: creatures.selectAll",
        detail: msg,
      },
      {
        status: 500,
      },
    );
  }
}
