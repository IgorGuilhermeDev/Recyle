import { FC } from "react";
import './InfoBox.css'
export const Proposal: FC = () => {
  return (
    <div className="info-box">
      <h3 className="info-title">Como Conscientizamos As Pessoas?</h3>
      <p className="info-text">
      A conscientização das pessoas é promovida por meio de banners distribuídos em todo o campus e através de sites como este, que buscam informar sobre nosso projeto e a importância da coleta seletiva e da reciclagem. Além disso, temos planos de implementar lixeiras inteligentes pelo campus no futuro. Essas lixeiras serão capazes de identificar o conteúdo descartado nelas e fornecer feedback caso o material não seja apropriado para aquela lixeira específica. Esse avanço tecnológico visa facilitar ainda mais o processo de coleta seletiva e promover uma cultura de sustentabilidade em nosso ambiente acadêmico.
      </p>
    </div>
  );
};

export default Proposal;
