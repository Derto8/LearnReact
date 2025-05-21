import { IMenu } from "../../dataModels/IRestaurantData";
import Counter from "../Counter/Counter";

function Menu({data} : {data: IMenu}){
    return (
        <ul key={data.id}>
        <li>Название: {data.name}</li>
        <li>Цена: {data.price}</li>
        <li>Ингридиенты: </li>
        {
            data.ingredients.map((ingr) => {
                return (
                    <ul>
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