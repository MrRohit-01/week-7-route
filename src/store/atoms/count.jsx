import { atom,selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});
export const isCountEven = selector({
  key: 'IsCountEven',
  get: ({get}) => {
    const toggle = get(countAtom);
    if (toggle%2==0) {
      return <>{"this is even"}</>;
    }
  },
});      