import { DateFormat, TimeZone } from "@/constants";
import { exec } from "@/lib/db";
import { SelectCreaturesListParamType } from "@/types";
import { CreaturesInfo } from "@/types/dto";

/**
 * 몹 리스트 조회
 */
export async function selectAllCreatures({
    page = 1,
    cnt,
    searchText,
    sortCol,
    sortOrder,
}: SelectCreaturesListParamType) {
    let sql = `
        SELECT CNO     AS cno
             , IMG_URL AS imgUrl
             , NAME    AS name
             , NAME_EN AS nameEn
             , HEALTH  AS health
             , DAMAGE  AS damage
             , ARMOUR  AS armour
             , FOUND AS found
             , URL AS url
             , DATE_FORMAT(CONVERT_TZ(REG_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS regDt
             , DATE_FORMAT(CONVERT_TZ(UPD_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS updDt
        FROM CREATURES
    `;

    // 검색
    if (searchText) {
        // null 컬럼은 coalesce로 처리
        sql += `WHERE CONCAT_WS(REPLACE(C.NAME, ' ', ''), REPLACE(C.NAME_EN, ' ', ''), COALESCE(C.FOUND, '')) LIKE "%${searchText}%"`;
    }

    // 정렬
    if (sortCol) {
        sql += `ORDER BY ${sortCol} ${sortOrder ?? "ASC"}`;
    }

    // 카운팅
    if (cnt != 0) {
        const startIdx = (page - 1) * cnt,
            endIdx = startIdx + cnt;
        sql += `LIMIT ${startIdx}, ${endIdx}`;
    }

    const result = await exec<CreaturesInfo[]>(sql);
    return result;
}
