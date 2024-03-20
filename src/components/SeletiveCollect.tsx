import { FC } from "react";
import './InfoBox.css'
export const SeletiveCollect: FC = () => {
  return (
    <div className="info-box">
      <h3 className="info-title">O que é Coleta Seletiva?</h3>
      <p className="info-text">
        A coleta seletiva é um processo de recolhimento de materiais
        recicláveis, como papel, plástico, vidro e metal, que são separados na
        fonte de origem para posterior reciclagem. O objetivo da coleta seletiva
        é reduzir a quantidade de resíduos enviados para aterros sanitários,
        preservar recursos naturais e diminuir os impactos ambientais causados
        pela produção de novos materiais.
      </p>
    </div>
  );
};

export default SeletiveCollect;
