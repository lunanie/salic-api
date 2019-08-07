import React from "react";
import "../estilos/Titulo.css";
import editar from "../img/editar.png";

export default function Titulo(props) {
  return (
    <div className="cartao">
      <div className="titulo">
        <div className="titulo__texto">
          <h3>{props.nome}</h3>
        </div>
        <div className="titulo__img">
          <a href="#">
            <img
              className="titulo__img--png"
              src={editar}
              alt="Imagem para editar"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
