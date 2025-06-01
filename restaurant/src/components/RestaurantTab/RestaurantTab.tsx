import { useState } from "react";
import { IRestaurantData } from "../../dataModels/IRestaurantData";
import { Restaurant } from "../Restaurant/Restaurant";


export function RestaurantTab({restaurants} : {restaurants: Array<IRestaurantData>}){
    const [activeId, setActiveId] = useState(restaurants[0]?.id);
    const activeRestaurant = restaurants.find(restauran => restauran.id === activeId);

    return (
        <>
            {
                restaurants.length ? <>
                    <div style={{marginBottom: "10px"}}>
                        {restaurants.map((restaurant) => (
                            <button
                                key={restaurant.id}
                                disabled={restaurant.id == activeId}
                                onClick={() => setActiveId(restaurant.id)}
                            >
                                {restaurant.name}
                            </button>
                        ))}
                    </div>
                    {activeRestaurant && <Restaurant key={activeId} restaurant={activeRestaurant} />}
                </>
                : <p>Рестораны отсутсвуют</p>
            }
        </>
    );
}

