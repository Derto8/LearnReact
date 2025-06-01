import { useState } from "react";
import type { IRestaurantData } from "../../dataModels/IRestaurantData";
import { Menu } from "../Menu/Menu";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";

export function Restaurant({restaurant} : {restaurant: IRestaurantData}){

    const [isAddReview, setIsAddReview] = useState(false);

    return(
        <div style={{marginLeft: "10px"}} key={restaurant.id}>
            <h2>Название ресторана: {restaurant.name}</h2>
            <h3>Меню:</h3>
            {
                restaurant.menu.length ? <>
                {
                    restaurant.menu.map((menu) => {
                        return (
                            <Menu key={menu.id} menu={menu}/>
                        )
                    })
                }
                </>
                : <p>Меню отсутствует</p>
            }

            <h3>Отзывы:</h3>
            {
                restaurant.reviews.length ? <>
                {
                    restaurant.reviews.map((review) => {
                        return (
                            <Review key={review.id} review={review}/>
                        )
                    })
                }
                </> : <p>Отзывы отсутствуют</p>
            }

            <button onClick={() => setIsAddReview(!isAddReview)}>Оставить отзыв</button>
            {
                isAddReview && <ReviewForm key={restaurant.id}/>
            }
        </div>
    )
}

