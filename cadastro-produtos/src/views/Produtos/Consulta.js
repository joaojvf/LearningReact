import React from "react";
import { withRouter } from "react-router-dom";
import ProdutoServico from "../../app/produtoService";
import Card from "../../components/card";
import ProdutosTabela from "../Produtos/produtosTable";

class ConsultaProdutos extends React.Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new ProdutoServico();
  }

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos });
  }

  preparaEditar = (sku) => {
    console.log(`Sku para editar ${sku}`);
    this.props.history.push(`/cadastro-produtos/${sku}`);
  };

  deletarProduto = (sku) => {
    const produtos = this.service.deletar(sku);
    this.setState({ produtos });
  };

  render() {
    return (
      <Card header="Consulta de Produto">
        <ProdutosTabela
          produtos={this.state.produtos}
          editarAction={this.preparaEditar}
          deletarAction={this.deletarProduto}
        ></ProdutosTabela>
      </Card>
    );
  }
}

export default withRouter(ConsultaProdutos);
