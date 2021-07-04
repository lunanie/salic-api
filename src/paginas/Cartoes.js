import React, {Component} from "react";
import Titulo from "../component/Titulo";
import Descricao from "../component/Descricao";
import Aporte from "../component/Aporte";
import Capital from "../component/Capital";
import Botoes from "../component/Botoes";
import "../estilos/Cartoes.css";

export default class Cartoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosJson: []
    };
  }

  componentDidMount() {
    fetch(
      "http://api.salic.cultura.gov.br/v1/projetos/?limit=85&offset=0&Accept=json"
    )
      .then(response => response.json())
      .then(response =>
        this.setState({dadosJson: response._embedded.projetos})
      )
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div id="start" className="cartaoConjunto">
        {this.state.dadosJson.map(itemJson => (
          <div className="cartaoIndividual">
            <Titulo nome={itemJson.nome} />
            <div className="corpo__cartao">
              <Descricao
                nome={itemJson.nome}
                proponente={itemJson.proponente}
                segmento={itemJson.segmento}
                municipio={itemJson.municipio}
                enquadramento={itemJson.enquadramento}
                uf={itemJson.UF}
              />
              <Capital
                valorAprovado={itemJson.valor_aprovado.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
                valorCaptado={itemJson.valor_captado.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
                porcenta={
                  (itemJson.valor_captado / itemJson.valor_aprovado) * 100
                }
              />
              <Aporte aportadores={itemJson.PRONAC} />
              <Botoes />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
