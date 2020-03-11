import React from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'
import ItemLista from './ItemLista'
import TrocaPaginaCarrinhoComItens from './TrocaPaginaCarrinhoComItens'
// import TrocaPaginaCarrinhoSemItens from './TrocaPaginaCarrinhoSemItens'

const BaseUrl = "https://us-central1-future-apis.cloudfunctions.net/elo4"

class CarrinhoDeCompras extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            paginaAtual: "carrinho-teste"
        }
    }

    lidaComCarrinho = () => {
        if(this.state.paginaAtual === "carrinho-teste"){
            this.setState({paginaAtual: "teste2"})
        } else{
            this.setState({paginaAtual: "carrinho-teste"})
        }

    }


    render(){
        return (
            <div>
               <TrocaPaginaCarrinhoComItens />
            </div>
        )
    }
}

export default CarrinhoDeCompras