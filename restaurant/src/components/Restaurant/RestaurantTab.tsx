import { useState } from "react";
import Restaurant from "./Restaurant";
import { IRestaurantData } from "../../dataModels/IRestaurantData";


function RestaurantTab({restaurants} : {restaurants: Array<IRestaurantData>}){
    const [activeId, setActiveId] = useState(restaurants[0]?.id);
    const activeRestaurant = restaurants.find(restauran => restauran.id === activeId);

    return (
        <>
            <div style={{marginBottom: "10px"}}>
                {restaurants.map((restaurant) => (
                    <button
                        key={restaurant.id}
                        onClick={() => setActiveId(restaurant.id)}
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>
            {activeRestaurant && <Restaurant data={activeRestaurant} />}
        </>
    );
}

export default RestaurantTab;