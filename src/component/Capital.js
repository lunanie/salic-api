import React from "react";
import "../estilos/Capital.css";

export default function Capital(props) {
  return (
    <div className="capital">
      <div className="capital__aprovado">
        <p>Aprovado</p>
        <p>{props.valorAprovado}</p>
      </div>
      <div className="capital__captado">
        <p>Captado</p>
        <p>{props.valorCaptado}</p>
      </div>
      <div className="capital__porcentagem">
        <p>Porcentagem</p>
        <p>{props.porcenta}%</p>
      </div>
    </div>
  );
}
