import { IReview } from "../../dataModels/IRestaurantData";

function Review({review} : {review : IReview}){
    return (
        <ul key={review.id}>
            <li>Пользователь: {review.user}</li>
            <li>Отзыв: {review.text}</li>
            <li>Рейтинг: {review.rating}</li>
        </ul>
    )
}

export default Review;