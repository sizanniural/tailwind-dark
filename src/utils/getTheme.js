const getTheme = () => {
  return localStorage.getItem("theme");
};

const setTheme = (theme) => {
  if (!theme) return;
  localStorage.setItem("theme", theme);
};

export { getTheme, setTheme };
