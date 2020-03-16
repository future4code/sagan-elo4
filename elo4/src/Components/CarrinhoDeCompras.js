import React from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'
import ItemLista from './ItemLista'

const BaseUrl = "https://us-central1-future-apis.cloudfunctions.net/elo4"

class CarrinhoDeCompras extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        //     cardCarrinho: [
        //     id: "",
        //     paymentMethod: "",
        //     photos: "",
        //     name: "",
        //     installments: 0,
        //     category: "",
        //     price: 0,
        //     description: ""
        // ]
        }
    }



    voltarPaginaInicial = () => {

    }

    render(){
        let total = 0
        const mostraItens = this.props.card.map((elem, index) => {
            total += elem.price
            return (
                <div>
                    <section>
                        <span><img src={elem.photos} alt="Foto" /> {elem.name} {elem.description} {elem.price} </span>
                        <span onClick={() => this.props.delete(elem)}> X </span>
                    </section>
                </div>
            )
        })

        let card
        if (this.props.card.length > 0) {
            card = (
                <section>
                    <span>Produto </span>
                    <span> Nome </span>
                    <span> Descrição </span>
                    <span> Preço </span>
                    <div>{ mostraItens }</div>
                </section>
            )
        } else {
            card = (
                <div>
                    <h2>Você ainda não adicionou nenhum carrinho à sua lista de compras.
                        Que tal retornar à página inicial? Há muitas opções para você! Aproveite!!
                    </h2>
                    <button>Voltar para a Home</button>
                </div>
            )
        }

        return (
            <section>
               { card }
               <hr />
               { this.props.card.length > 0 ? <p>Valor Total: R$ {total}</p> : null }
            </section>
        )
    }
}

export default CarrinhoDeCompras