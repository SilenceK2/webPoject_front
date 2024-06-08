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

/**
 * 오늘의 투두리스트 저장
 */
export const todoMainContentListAtom = atom({
  key: "todoMainContentList",
  default: "",
});
export const todoMainContentListSelector = selector({
  key: "todoMainContentListSelector",
  get: ({ get }) => {
    const todoSelector = get(todoMainContentListAtom);
    return todoSelector;
  },
  set: ({ set }, newValue) => {
    set(todoMainContentListAtom, newValue);
  },
});

/**
 * 날씨 저장하는 리코일 아톰, 셀렉터
 */
export const weatherAtom = atom({
  key: "weatherAtom",
  default: "",
});
export const weatherSelector = selector({
  key: "weatherSelector",
  get: ({ get }) => {
    const weatherAtomSelector = get(weatherAtom);
    return weatherAtomSelector;
  },
  set: ({ set }, newValue) => {
    set(weatherAtom, newValue);
  },
});

/**
 * 검색결과 성공했을시에 담는 아톰 / 셀렉터
 */
export const searchSuccessAtom = atom({
  key: "searchListAtom",
  default: "",
});
export const searchSuccessSelector = selector({
  key: "serachListSelector",
  get: ({ get }) => {
    const searchAtomSelector = get(searchSuccessAtom);
    return searchAtomSelector;
  },
  set: ({ set }, newValue) => {
    set(searchSuccessAtom, newValue);
  },
});

/**
 * 검색결과 전송시 전송값 담아두는 List ( 최근 검색결과 )
 */

export const searchListAtom = atom({
  key: "searchListAtom",
  default: [],
});

export const searchListSelector = selector({
  key: "searchListSelector",
  get: ({ get }) => {
    const searchListAtomSelector = get(searchListAtom);
    return searchListAtomSelector;
  },
  set: ({ set }, newValue) => {
    set(searchListAtom, newValue);
  },
});

/**
 * 검색 input창 클릭시 모달 backdrop생성 (home)
 */

export const searchBackDropAtom = atom({
  key: "searchBackDropAtom",
  default: false,
});

export const searchBackDropSelector = selector({
  key: "searchBackDropSelector",
  get: ({ get }) => {
    const searchBackDropAtomSelector = get(searchBackDropAtom);
    return searchBackDropAtomSelector;
  },
  set: ({ set }, newValue) => {
    set(searchBackDropAtom, newValue);
  },
});
