export const API_URL = {
  CREATURES: {
    LIST: (cnt?: number) => `/api/creatures` + (cnt ? `?cnt=${cnt}` : ""),
  },
  WEAPONS: {
    LIST: (cnt?: number) => `/api/weapons` + (cnt ? `?cnt=${cnt}` : ""),
  },
  FOOD: {
    LIST: (cnt?: number) => `/api/food` + (cnt ? `?cnt=${cnt}` : ""),
  },
  ADMIN: {
    INSERT: "/api/admin/user",
  },
};

export const VIEW_URL = {
  ADMIN: {
    USERS: {
      LIST: `/admin/users`,
      REGIST: `/admin/users/regist`,
    },
  },
};
