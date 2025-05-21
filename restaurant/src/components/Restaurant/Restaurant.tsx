import type { IRestaurantData } from "../../dataModels/IRestaurantData";
import Menu from "./Menu";
import Review from "./Review";

function Restaurant({data} : {data: IRestaurantData}){
    return(
        <div style={{marginLeft: "10px"}} key={data.id}>
            <h2>Название ресторана: {data.name}</h2>
            <h3>Меню:</h3>
            {
                data.menu.map((value) => {
                    return (
                        <Menu data={value}/>
                    )
                })
            }

            <h3>Отзывы:</h3>
            {
                data.reviews.map((review) => {
                    return (
                        <Review review={review}/>
                    )
                })
            }
        </div>
    )
}

export default Restaurant;