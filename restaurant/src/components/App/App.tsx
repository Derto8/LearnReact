import { Layout } from "../Layout/Layout.js";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab.js";
import { restaurants } from "../../mockData/mock.js";
import "./normalize.css";
import { ThemeProvider } from "../Theme/ThemeProvider.js";
import { AuthProvider } from "../Auth/AuthProvider.js";

export function App(){
    return(
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <RestaurantTab restaurants={restaurants}/>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    )
}