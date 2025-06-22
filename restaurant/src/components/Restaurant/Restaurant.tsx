import { useContext, useState } from "react";
import type { IRestaurantData } from "../../dataModels/IRestaurantData";
import { Menu } from "../Menu/Menu";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from './restaurant.module.css';
import { AuthContext } from "../Auth/AuthContext";

export function Restaurant({restaurant} : {restaurant: IRestaurantData}){

    const [isAddReview, setIsAddReview] = useState(false);
    const { auth } = useContext(AuthContext);


    return(
        <div style={{marginLeft: "10px"}} key={restaurant.id}>
            <h2>Название ресторана: {restaurant.name}</h2>
            <h3>Меню:</h3>
            {
                restaurant.menu.length ? <div className={styles.menuFlex} >
                {
                    restaurant.menu.map((menu, index) => {
                        return (
                            <Menu key={index} menu={menu}/>
                        )
                    })
                }
                </div>
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

            {
                auth.isAuthorized && <button onClick={() => setIsAddReview(!isAddReview)}>Оставить отзыв</button>
            }

            {   
                auth.isAuthorized && isAddReview && <ReviewForm/>
            }
        </div>
    )
}

