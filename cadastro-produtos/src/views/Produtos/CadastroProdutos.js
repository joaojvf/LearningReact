import React from "react";
import ProdutoServico from "../../app/produtoService";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";

const estadoInicial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
  erros: [],
  atualizando: false,
};

class CadastroProduto extends React.Component {
  state = estadoInicial;

  constructor() {
    super();
    this.service = new ProdutoServico();
  }

  onChange = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;

    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,

      sucesso: false,
    };
    try {
      this.service.salvar(produto);
      this.limpaCampos();
      this.setState({ sucesso: true });
    } catch (erro) {
      const erros = erro.erros;
      this.setState({ erros: erros });
    }
  };

  limpaCampos = () => {
    this.setState(estadoInicial);
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;

    if (sku) {
      const resultado = this.service
        .obterProdutos()
        .filter((p) => p.sku === sku);

      console.log("Resultado: ", resultado);
      if (resultado.length >= 0) {
        const produtoEncontrado = resultado[0];
        this.setState({ ...produtoEncontrado, atualizando: true });
      }
    }
  }

  render() {
    return (
      <Card
        header={
          this.state.atualizando
            ? "Atualização de Produto"
            : " Cadastro de Produto"
        }
      >
        <form id="frmProduto" onSubmit={this.onSubmit}>
          {this.state.sucesso && (
            <div class="alert alert-dismissible alert-success">
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Bom Trabalho!</strong>
              Cadastro realizado com sucesso.
            </div>
          )}
          {this.state.erros.length > 0 &&
            this.state.erros.map((msg) => {
              return (
                <div class="alert alert-dismissible alert-danger">
                  <button type="button" class="close" data-dismiss="alert">
                    &times;
                  </button>
                  <strong>Erro!</strong>
                  {msg}
                </div>
              );
            })}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.onChange}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  disabled={this.state.atualizando}
                  value={this.state.sku}
                  onChange={this.onChange}
                  className="form-control"
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <labe>Descrição: </labe>
                <textarea
                  name="descricao"
                  value={this.state.descricao}
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input
                  name="preco"
                  type="text"
                  value={this.state.preco}
                  onChange={this.onChange}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input
                  name="fornecedor"
                  type="text"
                  value={this.state.fornecedor}
                  onChange={this.onChange}
                  className="form-control"
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button type="submit" className="btn btn-success">
                {this.state.atualizando ? "Atualizar" : "Salvar"}
              </button>
            </div>

            <div className="col-md-1">
              <button onClick={this.limpaCampos} className="btn btn-primary">
                Limpar
              </button>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}
export default withRouter(CadastroProduto);
