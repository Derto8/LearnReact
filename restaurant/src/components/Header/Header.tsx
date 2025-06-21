import { useContext } from "react";
import { Button } from "../Button/Button";
import { ThemeContext } from "../Theme/themeContext";
import styles from "./header.module.css";
import { AuthContext } from "../Auth/AuthContext";

export function Header(){

    const { toggleTheme } = useContext(ThemeContext);
    const { auth, toggleAuth } = useContext(AuthContext);

    
    return (
        <header className={styles.header}>
            <h1>Restaurant app</h1>
            {/* <HelpText>aggregator of food delivery from restraunts</HelpText> */}
            <div>
            <Button isSmall onClick={toggleTheme} className={styles.buttonInHeader}>
                <small>Сменить тему</small>
            </Button>
            <Button isSmall onClick={toggleAuth} className={styles.buttonInHeader}>
                <small>{auth.isAuthorized ? `Разлогиниться (${auth.name})` : "Залогиниться"}</small>
            </Button>
            </div>
        </header>
    )
}

