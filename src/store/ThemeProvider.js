import React from "react";

import useLocalStorage from "use-local-storage";

export const ThemeContext = React.createContext({
  setTheme: () => {},
  themeHandler: () => {},
});

const ThemeProvider = (props) => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.querySelector("body").dataset.theme = theme;
  };

  const themeContext = {
    setTheme: themeHandler,
    themeHandler: themeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
