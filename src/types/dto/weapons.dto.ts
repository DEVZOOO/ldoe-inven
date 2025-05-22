/**
 * @file weapons.dto.ts
 * @description Weapons 관련 DTO
 */

import { UseYn, WeaponType } from "@/constants";

export type WeaponsInfo = {
  /**
   * PK
   */
  wno: number;
  imgUrl: string;
  name: string;
  nameEn: string;
  weaponType: WeaponType;
  damage: number;
  speed: number;
  dps: string;
  duability: string;
  fireDmgYn: UseYn;
  modSlot: number;
  craftYn: UseYn;
  url: string;
  regDt: string;
  updDt: string;
};
