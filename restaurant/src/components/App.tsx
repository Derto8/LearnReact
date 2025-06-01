import { Layout } from "./Layout/Layout";
import { RestaurantTab } from "./RestaurantTab/RestaurantTab";
import { restaurants } from "../mockData/mock.js";

export function App(){
    return(
      <Layout>
        <RestaurantTab restaurants={restaurants}/>
      </Layout>
    )
}