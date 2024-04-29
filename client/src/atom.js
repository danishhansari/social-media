import { atom } from "recoil";

export const signinAtom = atom({
  key: "signinAtom",
  default: {
    email: "",
    password: "",
  },
});

// const signupAtom = atom({
//   key: "signupAtom",
//   default: {},
// });
