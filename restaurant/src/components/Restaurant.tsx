import type { IRestaurantData } from "../dataModels/IRestaurantData";

function Restaurant({data} : {data: IRestaurantData}){
    return(
        <div style={{border: "1px solid black"}} key={data.id}>
            <h2>Название ресторана: {data.name}</h2>
            <h3>Меню:</h3>
            {
                data.menu.map((value) => {
                    return (
                        <ul key={value.id}>
                            <li>Название: {value.name}</li>
                            <li>Цена: {value.price}</li>
                            <li>Ингридиенты: </li>
                            {
                                value.ingredients.map((ingr) => {
                                    return (
                                        <ul>
                                            <li>{ingr}</li>
                                        </ul>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }

            <h3>Отзывы:</h3>
            {
                data.reviews.map((review) => {
                    return (
                        <ul key={review.id}>
                            <li>Пользователь: {review.user}</li>
                            <li>Отзыв: {review.text}</li>
                            <li>Рейтинг: {review.rating}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Restaurant;