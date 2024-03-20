import { FC } from "react";
import { HomeBar } from "../components/HomeBar";
import MainContent from "../components/MainContent";
import { FAQ } from "../components/FAQ";

export const Home: FC  = () => {
    return <div>
        <HomeBar/>
        <MainContent/>
        <FAQ/>
    </div>;
}