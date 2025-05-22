import type { IRestaurantData } from "../../dataModels/IRestaurantData";
import Menu from "./Menu";
import Review from "./Review";

export function Restaurant({restaurant} : {restaurant: IRestaurantData}){
    return(
        <div style={{marginLeft: "10px"}} key={restaurant.id}>
            <h2>Название ресторана: {restaurant.name}</h2>
            <h3>Меню:</h3>
            {
                restaurant.menu.map((menu) => {
                    return (
                        <Menu key={menu.id} menu={menu}/>
                    )
                })
            }

            <h3>Отзывы:</h3>
            {
                restaurant.reviews.map((review) => {
                    return (
                        <Review key={review.id} review={review}/>
                    )
                })
            }
        </div>
    )
}

