import { DateFormat, TimeZone } from "@/constants";
import { exec } from "@/lib/db";
import { SelectListParamType } from "@/types";
import { WeaponsInfo } from "@/types/dto/weapons.dto";

export async function selectAllWeapons({ page = 1, cnt }: SelectListParamType) {
  const startIdx = (page - 1) * cnt,
    endIdx = startIdx + cnt;
  const sql = `
        SELECT 
            WNO AS wno
            , IMG_URL AS imgUrl
            , NAME AS name
            , NAME_EN AS nameEn
            , WEAPON_TYPE AS weaponType
            , DAMAGE AS damage
            , SPEED AS speed
            , DPS AS dps
            , DUABILITY AS duability
            , FIRE_DMG_YN AS fireDmgYn
            , MOD_SLOT AS modSlot
            , CRAFT_YN AS craftYn
            , URL AS url
            , DATE_FORMAT(CONVERT_TZ(REG_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS regDt
            , DATE_FORMAT(CONVERT_TZ(UPD_DT, '${TimeZone.UTC}', '${TimeZone.SEOUL}'), '${DateFormat.YYYY_MM_DD_HH_II_SS}') AS updDt
        FROM WEAPONS
        ORDER BY WNO DESC 
        LIMIT ${startIdx}, ${endIdx}`;
  const result = await exec<WeaponsInfo>(sql);
  return result;
}
