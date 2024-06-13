import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

interface locationStateType {
  gridX?: string | number;
  girdY?: string | number;
}
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "memberEmailAtom",
  storage: sessionStorage,
});

export const usernameState = atom({
  key: "usernameState",
  default: "",
});

export const useremailState = atom({
  key: "useremailState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userpasswordState = atom({
  key: "userpasswordState",
  default: "",
});

export const wheaterCondition = atom({
  key: "userLocation",
  default: "",
});
export const locationSuccessState = atom({
  key: "locationState",
  default: "",
});

export const locationXY = atom({
  key: "locationXY",
  default: "",
});

// export const myLocation = selector<locationStateType>({
//   key: "mylocation",
//   get: ({ get }) => {
//     const userCompare = get(locationXY);
//     return userCompare;
//   },
//   set: ({ set }, newValue: any) => {
//     set(locationXY, newValue);
//   },
// });
