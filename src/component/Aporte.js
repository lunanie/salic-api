import React from "react";
import "../estilos/Aporte.css";

export default function Aporte(props) {
  return (
    <div>
      <div className="aporte__texto">
        <p>Aportaram este projeto:</p>
      </div>
      <div className="aporte__empresas--verTodos">
        <div className="aporte__empresas">
          <p>Verificar PRONAC Nº: {props.aportadores}</p>
        </div>
        <div className="aporte__verTodos">
          <a href="#">
            <p className="aporte__verTodos--texto">
              <i className="fas fa-eye" /> Ver Todos
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
