import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import CarrinhoDeCompras from './Components/CarrinhoDeCompras'

const BaseUrl = "https://us-central1-future-apis.cloudfunctions.net/elo4"

class App extends React.Component {
  // static.propTypes = {};
  constructor(props){
    super(props)
    this.state = {
      cardCarrinho: [
        {
          id: "Q8cybKtKmAEQphrXccQO",
          paymentMethod: "card",
          photos: ["https://live.staticflickr.com/5735/31369632556_bc4884f319_b.jpg"],
          name: "Produto 1",
          installments: 3,
          category: "Categoria 1",
          price: 10,
          description: "Esse é um produto muito legal!"
        },
        {
          id: "Q8cybKtKmAEQphrXcc22",
          paymentMethod: "card",
          photos: ["https://live.staticflickr.com/5762/31425462216_1aeb703d38_b.jpg"],
          name: "Produto 2",
          installments: 3,
          category: "Categoria 1",
          price: 40,
          description: "Esse é um produto muito útil para você!"
        },
        {
          id: "Q8cybKtKmAEQphrXcc33",
          paymentMethod: "card",
          photos: ["https://live.staticflickr.com/65535/49364756227_f2d03c2b77_b.jpg"],
          name: "Produto 3",
          installments: 3,
          category: "Categoria 1",
          price: 98.55,
          description: "Compre, compre, compre!!"
        },
        {
          id: "Q8cybKtKmAEQphrXcc55",
          paymentMethod: "card",
          photos: ["https://live.staticflickr.com/5826/21286099678_c0aa4182a4_b.jpg"],
          name: "Produto 4",
          installments: 3,
          category: "Categoria 1",
          price: 2340,
          description: "Esse é um produto muito legal!"
        }

      ],
      produtos: [
        {
          id: "",
          paymentMethod: "",
          photos: "",
          name: "",
          installments: 0,
          category: "",
          price: 0,
          description: ""
        }, 
      ] 
    }
  }

apagarProdutoDoCarrinho = elem => {
  const novoCarrinho = this.state.cardCarrinho.filter(el => el.id !== elem.id);
  this.setState({cardCarrinho: novoCarrinho});
};

exibirCarrinho = () => {
  this.state.exibirCarrinho === 
  false ? this.setState({ exibirCarrinho: true }) 
  : this.setState({ exibirCarrinho: false })
}

adicionarAoCarrinho = id => {
  const item = this.state.produtos.find(item => {
    return item.id === id
  })

  const novoItem = [...this.state.cardCarrinho, item]
  this.setState({cardCarrinho: novoItem})
}

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <h2> Carrinho de compras </h2>
        <hr />
        <CarrinhoDeCompras card={this.state.cardCarrinho} delete={this.apagarProdutoDoCarrinho} />
      </div>
    );
  }
};

export default App;

