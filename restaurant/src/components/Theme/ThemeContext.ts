import { createContext } from "react";
import { THEMES } from "../../dataModels/env/Env";


export const ThemeContext = createContext(THEMES.light);