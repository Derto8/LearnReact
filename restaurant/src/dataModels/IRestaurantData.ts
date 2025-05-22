export interface IRestaurantData{
    id: string,
    name: string,
    menu: Array<IMenu>,
    reviews: Array<IReview>
}

export interface IMenu{
    id: string,
    name: string,
    price: number,
    ingredients: Array<string>
}

export interface IReview{
    id: string,
    user: string,
    text: string,
    rating: number
}

