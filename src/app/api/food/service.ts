import { DateFormat, TimeZone } from "@/constants";
import { exec } from "@/lib/db";
import { FoodInfo, SelectListParamType } from "@/types";

/**
 * 음식 리스트 조회
 */
export async function selectAllFood({ page = 1, cnt }: SelectListParamType) {
  const startIdx = (page - 1) * cnt,
    endIdx = startIdx + cnt;
  const sql = `
    SELECT 
        FNO AS fno
        , IMG_URL AS imgUrl
        , NAME AS name
        , NAME_EN AS nameEn
        , HEALTH AS health
        , HUNGER AS hunger
        , THIRST AS thirst
        , CRAFT_YN AS craftYn
        , URL AS url
        , DATE_FORMAT(CONVERT_TZ(REG_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS regDt
        , DATE_FORMAT(CONVERT_TZ(UPD_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS updDt
    FROM FOOD 
    ORDER BY FNO DESC 
    LIMIT ${startIdx}, ${endIdx}`;
  const result = await exec<FoodInfo>(sql);
  return result;
}
