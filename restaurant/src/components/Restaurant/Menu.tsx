import { IMenu } from "../../dataModels/IRestaurantData";
import Counter from "../Counter/Counter";

function Menu({menu} : {menu: IMenu}){
    return (
        <ul key={menu.id}>
        <li>Название: {menu.name}</li>
        <li>Цена: {menu.price}</li>
        <li>Ингридиенты: </li>
        {
            menu.ingredients.map((ingr, index) => {
                return (
                    <ul key={index}>
                        <li>{ingr}</li>
                    </ul>
                )
            })
        }
        <Counter/>
    </ul>
    )
}

export default Menu;