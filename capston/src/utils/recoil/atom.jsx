import { atom } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "",
});

export const userpasswordState = atom({
  key: "userpasswordState",
  default: "",
});

export const location = atom({
  key: "userLocation",
  default: "",
});
export const locationSuccessState = atom({
  key: "locationState",
  default: "",
});
