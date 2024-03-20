import { FC } from "react";
import './MainContent.css'; // Import the CSS file for styling
import imgSrc  from "../assets/imgs/main-img.png";
const MainContent: FC = () => {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={imgSrc} alt="Image" />
      </div>
      <div className="pretty-text">
        <p>
        <span className="green-word">GREEN</span>  CAMPUS é um projeto que visa questões sociais, principalmente deixar o campus do IFMG Ouro Branco mais limpo, conscientizando as pessoas e utilizando a reciclagem para a venda de novos projetos. Nosso objetivo é promover a sustentabilidade ambiental e educar a comunidade sobre a importância da preservação do meio ambiente, enquanto buscamos oportunidades para criar um futuro mais verde e sustentável. Junte-se a nós nessa jornada em direção a um campus mais ecológico e uma comunidade mais consciente.</p>
      </div>
    </div>
  );
};

export default MainContent;
