import { ReactNode, useState } from "react";
import { THEMES } from "../../dataModels/env/Env";
import { ThemeContext } from "./themeContext";


export function ThemeProvider({children} : {children: ReactNode}) {
    const [theme, setTheme] = useState(THEMES.light);

    const toggleTheme = () => {
      setTheme((currentTheme) =>
        currentTheme === THEMES.light ? THEMES.dark : THEMES.light
      );
    };
  
    return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}