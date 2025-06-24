import {NextRequest, NextResponse} from "next/server";
import {selectCreatureInfo} from "@/app/api/creatures/service";
import {CommonRes, CreaturesInfo} from "@/types";
import {ApiStatus} from "@/constants";

type getParams = {
    params: Promise<{ cno: string }>
};

/**
 * 몹 상세정보 조회
 */
export async function GET(req: NextRequest, ctx: getParams) {
    const cno = parseInt((await ctx.params).cno, 10);

    let result: CommonRes<CreaturesInfo>;

    try {
        const data = await selectCreatureInfo(cno);

        if (data) {
            result = {
                status: ApiStatus.SUCCESS,
                data,
            };
        } else {
            result = {
                status: ApiStatus.ERROR,
                error: `Invalid CNO: ${cno}`,
            };
        }
    } catch (e) {
        console.error(`## FAIL ::`, e);
        result = { status: ApiStatus.ERROR, error: e };
    }

    return NextResponse.json(result);
}
