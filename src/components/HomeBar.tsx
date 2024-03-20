import { FC } from "react";
import './homebar.css'

export const HomeBar: FC  = () => {
    return <div className="navbar">
    <div className="left">
      <span className="title-main">GREEN CAMPUS</span>
    </div>
    <div className="right">
      <a href="#main-content">Início</a>
      <a href="#FAQ">FAQ</a>
      <a href="#help-us">Ajude-nos</a>
    </div>
  </div>
}