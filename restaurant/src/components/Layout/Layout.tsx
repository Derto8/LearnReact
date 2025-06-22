import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export function Layout({children} : {children: ReactNode}){
    return <>
        <Header/>
        {children}
        <Footer/>
        <ProgressBar/>
    </>
}
