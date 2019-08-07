import React from "react";
import ampliar from "../img/ampliar.png";
import procurar from "../img/procurar.png";
import home from "../img/home.png";
import "../estilos/Botoes.css";

export default function Botoes(props) {
  return (
    <div className="botoes">
      <div className="botoes__div">
        <div className="botoes__item">
          <a href="#">
            <img
              className="botoes__png"
              src={ampliar}
              alt="Imagem para ampliar"
            />
          </a>
        </div>
        <div className="botoes__item">
          <a href="#">
            <img
              className="botoes__png"
              src={procurar}
              alt="Imagem para procurar"
            />
          </a>
        </div>
        <div className="botoes__item">
          <a href="#">
            <img className="botoes__png" src={home} alt="Imagem para home" />
          </a>
        </div>
      </div>
      <div className="botoes__meEscolhe">
        <a href="#">
          <p>Me escolhe :D</p>
        </a>
      </div>
    </div>
  );
}
