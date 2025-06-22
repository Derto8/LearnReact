import classNames from "classnames";
import { IMenu } from "../../dataModels/IRestaurantData";
import Counter from "../Counter/Counter";
import styles from './menu.module.css';
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

export function Menu({menu} : {menu: IMenu}){
    const { auth } = useContext(AuthContext);

    return (
        <ul className={classNames(styles.menuBorder, styles.menuSpacing)}>
            <li>Название: {menu.name}</li>
            <li>Цена: {menu.price}</li>
            <li>Ингридиенты: </li>
            {
                menu.ingredients.length ? <ul>
                {
                    menu.ingredients.map((ingredient, index) => {
                        return (
                            <li key={index}>{ingredient}</li>
                        )
                    })
                }
                </ul> : <p>Блюдо состоит из воздуха</p>
            }
            {auth.isAuthorized && <Counter/>}
    </ul>
    )
}

