import { FC } from "react";
import './InfoBox.css'
export const Recycle: FC = () => {
  return (
    <div className="info-box">
      <h3 className="info-title">Para Onde Vão Os Resíduos Reciclados?</h3>
      <p className="info-text">
        Os resíduos coletados por meio da coleta seletiva são reciclados, contribuindo para a preservação do meio ambiente. Esses materiais são reutilizados em processos de produção, além de serem destinados para doação e venda, promovendo a economia circular e reduzindo o desperdício. Dessa forma, a coleta seletiva não apenas beneficia o meio ambiente, mas também apoia iniciativas de caridade e sustentabilidade econômica.
      </p>
    </div>
  );
};

export default Recycle;
