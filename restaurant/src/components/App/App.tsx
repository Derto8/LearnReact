import { Layout } from "../Layout/Layout.js";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab.js";
import { restaurants } from "../../mockData/mock.js";
import "./normalize.css";

export function App(){
    return(
      <Layout>
        <RestaurantTab restaurants={restaurants}/>
      </Layout>
    )
}