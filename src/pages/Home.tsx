import { FC } from "react";
import { HomeBar } from "../components/HomeBar";
import MainContent from "../components/MainContent";
import { FAQ } from "../components/FAQ";
import { HelpUs } from "../components/HelpUs";

export const Home: FC  = () => {
    return <div>
        <HomeBar/>
        <MainContent/>
        <FAQ/>
        <HelpUs/>
    </div>;
}