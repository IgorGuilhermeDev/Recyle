import { FC } from "react";
import './FAQ.css'
import Proposal from "./Proposal";
import SeletiveCollect from "./SeletiveCollect";
import Recycle from "./Recycle";

export const FAQ: FC  = () => {
    return (
    <div>
        <h2 className="FAQ">FAQ - Perguntas frequentes</h2>
        <Proposal/>
        <Recycle/>
        <SeletiveCollect/>
    </div>
    )
}