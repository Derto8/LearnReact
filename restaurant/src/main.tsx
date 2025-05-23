import { createRoot } from "react-dom/client";
import { restaurants } from "./mockData/mock.js";
import { IRestaurantData } from "./dataModels/IRestaurantData.ts";
import { RestaurantTab } from "./components/RestaurantTab/RestaurantTab.tsx";
import { Layout } from "./components/Layout/Layout.tsx";

const root = document.getElementById("root");
''
const reactRoot = createRoot(root!);

const data: Array<IRestaurantData> = restaurants;

reactRoot.render(
  <Layout>
    <RestaurantTab restaurants={data}/>
  </Layout>
);
