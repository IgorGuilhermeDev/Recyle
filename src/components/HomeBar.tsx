import { FC } from "react";
import './homebar.css'

export const HomeBar: FC  = () => {
    return <div className="navbar">
    <div className="left">
      <span className="title-main">GREEN CAMPUS</span>
    </div>
    <div className="right">
      <a href="#inicio">Início</a>
      <a href="#sobre-nos">Sobre Nós</a>
      <a href="#reciclagem">Reciclagem</a>
    </div>
  </div>
}