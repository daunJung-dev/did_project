import { atom, RecoilState } from "recoil";

export const authState: RecoilState<any> = atom({
  key: "authState",
  default: {
    logged: false,
  },
});

export default authState;
