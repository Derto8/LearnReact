import { createRoot } from "react-dom/client";
import { restaurants } from "./mockData/mock.js";
import { IRestaurantData } from "./dataModels/IRestaurantData.ts";
import Layout from "./components/Layout/Layout.tsx";
import { RestaurantTab } from "./components/Restaurant/RestaurantTab.tsx";

const root = document.getElementById("root");
const reactRoot = createRoot(root != null ? root : new HTMLElement());

const data: Array<IRestaurantData> = restaurants;

reactRoot.render(
  <Layout>
    <RestaurantTab restaurants={data}/>
  </Layout>
);
