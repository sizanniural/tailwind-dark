const { atom } = require("recoil");
const { getTheme } = require("../utils/getTheme");

const theme = getTheme();

export const themeAtom = atom({
  key: "themeAtom",
  default: theme ?? "light",
});
