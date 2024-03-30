import { atom } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "",
});

export const userpasswordState = atom({
  key: "userpasswordState",
  default: "",
});
