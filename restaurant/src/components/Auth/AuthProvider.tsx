import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { AuthInit } from "../../dataModels/auth/AuthInit";


export function AuthProvider({children} : {children: ReactNode}) {
    const [auth, setAuth] = useState(AuthInit);

    const toggleAuth = () => {
      console.log(auth)
      setAuth((currAuth) =>
        currAuth.isAuthorized ? {isAuthorized: false} : {id: 1, name: "Николай", isAuthorized: true}
      );
    };
  
    return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
}