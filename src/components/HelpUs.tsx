import React, { FC } from "react";
import './HelpUs.css';
import InfoTrash from "./InfoTrash";
import imgUrlPlastic from '../assets/imgs/plastic.png';
import imgUrlPaper from '../assets/imgs/paper.png';
import imgUrlGlass from '../assets/imgs/glass.png';
import imgUrlOrganic from '../assets/imgs/organic.png';
import imgUrlMetal from '../assets/imgs/metal.png';

export const HelpUs: FC = () => {
    return (
        <div id="help-us" className="help-us">
            <h2 className="general-title">Como nos ajudar</h2>
            <p>
            Uma maneira altamente eficaz de apoiar nosso projeto é desempenhando o seu papel no processo. A seguir, você aprenderá sobre os conteúdos ideais de cada tipo de lixo, contribuindo assim para o sucesso da iniciativa.
            </p>
            <div className="row">
                <InfoTrash title="Plástico" imageUrl={imgUrlPlastic} items={['Guarrafa de água', 'Guarrafas plásticas de refrigerante', 'Colheres e Talheres de plástico no geral']} />
                <InfoTrash title="Papel" imageUrl={imgUrlPaper} items={['Embalagens de papelão', 'Jornais', 'Revistas', 'Papel de escrita e embrulho']} />
                <InfoTrash title="Vidro" imageUrl={imgUrlGlass} items={['Garrafas de vidro', 'Cacos de vidro', 'Vidros de cosméticos']} />
            </div>
            <div className="row">
                <InfoTrash title="Orgânico" imageUrl={imgUrlOrganic} items={['Folhas Secas', 'Pequenos Galhos', 'Restos de comida', 'Casca de Ovo']} />
                <InfoTrash title="Metal" imageUrl={imgUrlMetal} items={['Tampas', 'Latas de alumínio', 'Latas de aço', 'Utensílios de cozinha']} />
            </div>
        </div>
    );
};



