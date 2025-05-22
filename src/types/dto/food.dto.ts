import { UseYn } from "@/constants";

export type FoodInfo = {
  /**
   * PK
   */
  fno: number;
  imgUrl?: string;
  name: string;
  nameEn: string;
  health: number;
  hunger: number;
  thirst: number;
  craftYn: UseYn;
  url?: string;
  regDt: string;
  updDt?: string;
};
