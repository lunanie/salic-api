import React from "react";
import "../estilos/Descricao.css";

export default function Descricao(props) {
  return (
    <div className="descricao">
      <p className="descricao__organizacao">{props.proponente}</p>
      <p className="descricao__tipologia">{props.segmento}</p>
      <div className="descricao__cidade--lei">
        <div className="descricao__cidade">
          <p className="descricao__cidade--texto">
            {props.municipio} - {props.uf}
          </p>
        </div>
        <div className="descricao__lei">
          <p className="descricao__lei--texto">
            {" "}
            ROUANET - {props.enquadramento}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
