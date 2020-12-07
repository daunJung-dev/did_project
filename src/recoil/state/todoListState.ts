import { atom, RecoilState } from "recoil";

export const todoListState:RecoilState<any> = atom({
  key: "todoListState",
  default: {},
});

export default todoListState;
