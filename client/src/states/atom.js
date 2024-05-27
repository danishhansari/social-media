import { atom } from "recoil";

export const signinAtom = atom({
  key: "signinAtom",
  default: {
    email: "",
    password: "",
    isEmail: false,
  },
});

export const signupAtom = atom({
  key: "signupAtom",
  default: {
    name: "",
    email: "",
    dob: {
      month: "",
      day: "",
      year: "",
    },
    password: "",
  },
});

export const currentUserAtom = atom({
  key: "currentUserAtom",
  default: {},
});

export const sidebarToggle = atom({
  key: "sidebarToggle",
  default: false,
});

export const tweetsAtom = atom({
  key: "tweet",
  default: [],
});
