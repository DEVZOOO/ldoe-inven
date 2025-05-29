import { DateFormat, TimeZone } from "@/constants";
import { exec } from "@/lib/db";
import { SelectListParamType } from "@/types";
import { CreaturesInfo } from "@/types/dto";

/**
 * 몹 리스트 조회
 */
export async function selectAllCreatures({
  page = 1,
  cnt,
}: SelectListParamType) {
  let sql = `
    SELECT 
        CNO AS cno
        , IMG_URL AS imgUrl
        , NAME AS name
        , NAME_EN AS nameEn
        , HEALTH AS health
        , DAMAGE AS damage
        , ARMOUR AS armour
        , FOUND AS found
        , URL AS url
        , DATE_FORMAT(CONVERT_TZ(REG_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS regDt
        , DATE_FORMAT(CONVERT_TZ(UPD_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS updDt
    FROM CREATURES 
    ORDER BY CNO DESC 
    `;
  if (cnt != 0) {
    const startIdx = (page - 1) * cnt,
      endIdx = startIdx + cnt;
    sql += `LIMIT ${startIdx}, ${endIdx}`;
  }

  const result = await exec<CreaturesInfo[]>(sql);
  return result;
}
