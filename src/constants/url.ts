import {SelectCreaturesListParamType} from "@/types";
import {convertToQueryString} from "@/utils";

export const API_URL = {
  CREATURES: {
    LIST: (param: SelectCreaturesListParamType) => `/api/creatures` + convertToQueryString(param),
  },
  WEAPONS: {
    LIST: (cnt?: number) => `/api/weapons` + (cnt ? `?cnt=${cnt}` : ""),
  },
  FOOD: {
    LIST: (cnt?: number) => `/api/food` + (cnt ? `?cnt=${cnt}` : ""),
  },
  ADMIN: {
    USERS: {
      INSERT: "/api/admin/user",
    },
  },
};

export const VIEW_URL = {
  ADMIN: {
    ITEMS: {
      CREATURES: {
        LIST: `/admin/creatures`,
      },
    },
    USERS: {
      LIST: `/admin/users`,
      REGIST: `/admin/users/regist`,
    },
  },
};
