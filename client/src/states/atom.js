import { atom } from "recoil";

export const signinAtom = atom({
  key: "signinAtom",
  default: {
    email: "",
    password: "",
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
