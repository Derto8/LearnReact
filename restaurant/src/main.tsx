import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./mockData/mock.js";
import Restaurant from "./components/Restaurant";
import { IRestaurantData } from "./dataModels/IRestaurantData.ts";

const root = document.getElementById("root");
const reactRoot = createRoot(root != null ? root : new HTMLElement());

const data: Array<IRestaurantData> = restaurants;

reactRoot.render(
  <div>
    {data?.map((restaurant) => {
      return <Restaurant data={restaurant} />;
    })}
  </div>
);
