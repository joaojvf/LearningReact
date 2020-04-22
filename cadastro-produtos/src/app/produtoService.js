const PRODUTOS = "_PRODUTOS";

export function ErroValidacao (erros) {
    this.erros =erros;
}

export default class ProdutoServico {

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);
    }

    validar = (produto) => {
        const erros = [];

        if(!produto.nome){
            console.log("entrou erro nome")
            erros.push('O campo Nome é obrigatório');
        }

        
        if(!produto.sku){
            erros.push('O campo Sku é obrigatório');
        }
        
        if(!produto.preco || produto.preco <= 0){
            erros.push('O campo Preço precisa ser maior que 0.');
        }
    
        if(!produto.fornecedor){
            erros.push('O campo Fornecedor é obrigatório');
        }        

        if (erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

  salvar = (produto) => {
      this.validar(produto);

    let produtos = localStorage.getItem(PRODUTOS);

    if (!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    produtos.push(produto);

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
  };
}
