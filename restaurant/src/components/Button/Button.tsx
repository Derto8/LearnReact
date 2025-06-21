import classNames from "classnames";
import { useContext } from "react";
import { THEMES } from "../../dataModels/env/Env";
import { ThemeContext } from "../Theme/themeContext";
import { IButtonProps } from "../../dataModels/button/IButtonProps";
import styles from "./button.module.css";

export const Button = ({...props} : IButtonProps) => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <button
        {...props}
        className={classNames(styles.buttonDefault, props.className, {
          [styles.buttonLarge]: !props.isSmall,
          [styles.buttonSmall]: props.isSmall,
          [styles.buttonJuicy]: theme === THEMES.light,
          [styles.buttonBarbie]: theme !== THEMES.light,
        })}
      >
        {props.children}
      </button>
    );
  };
  