export const API_URL = {
  CREATURES: {
    LIST: (cnt?: number) => `/api/creatures?cnt=${cnt}`,
  },
  WEAPONS: {
    LIST: (cnt?: number) => `/api/weapons?cnt=${cnt}`,
  },
};
