export type CreaturesInfo = {
  /**
   * PK
   */
  cno: number;
  imgUrl: string;
  name: string;
  nameEn: string;
  health: number;
  damage: number;
  armour: number;
  found: string;
  url: string;
  regDt: string;
  updDt: string;
};

/**
 * 신규 생성
 */
export type InsertCreaturesDto = {
  imgUrl: string;
  name: string;
  nameEn: string;
  health: number;
  damage: number;
  armour: number;
  found: string;
  url: string;
};
