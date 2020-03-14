import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const myTheme = createMuiTheme({
  palette: {
    paper: {
		background: {paper: '#30bfbf'}},
    secondary: {
      main: '#ffa020',
    }
  },
});

const GlobalStyle = createGlobalStyle`
  table, th, td {
    border: 1px solid #b8b8b8;
  }

  th {
    background: #444;
    color: #f4f4f4;
    padding: 0.2rem;
  }

  td {
    padding: 0.2rem;
  }
`

const Sessao = styled.section`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
border: 1pt solid black;
justify-items: center;
align-items: center;
padding: 10px;
margin: 0 auto;
height: 100vh;

img{
	width: 50vw;
	height: 50vh;
}
`

const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/'

class CadastroItensVenda extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			description: '',
			price: 0,
			paymentMethod: '',
			category: '',
			photo: '',
			installments: 0,
			produtosCadastrados: []
		}
	}

	adicionar = () => {
		const novoProduto = {
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			paymentMethod: this.state.paymentMethod,
			category: this.state.category,
			photos: [this.state.photo],
			installments: this.state.installments
		}

		this.setState({
			produtosCadastrados: [...this.state.produtosCadastrados, novoProduto]
		})
		axios.post(`${baseUrl}elo4/products`, novoProduto,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				console.log(response);
			}).catch(function (error) {
				console.log(error);
			})
	}

	lidaComName = event => {
		this.setState({ name: event.target.value });
	};
	lidaComDescription = event => {
		this.setState({ description: event.target.value });
	};
	lidaComPrice = event => {
		this.setState({ price: parseInt(event.target.value) });
	};
	lidaComPaymentMethod = event => {
		this.setState({ paymentMethod: event.target.value });
	};
	lidaComCategory = event => {
		this.setState({ category: event.target.value });
	};
	lidaComPhotos = event => {
		this.setState({ photo: event.target.value });
	};
	lidaComInstallments = event => {
		this.setState({ installments: parseInt(event.target.value) });
	};


	render() {
		console.log('PRODUTOS CADASTRADOS:');
		console.log(this.state.produtosCadastrados);

		const {classes} = this.props 

		const mostrarProdutosCadastrados = this.state.produtosCadastrados.map(
			(el, index) => {
				return (
					<>
						<tr key={index}>
							<td>{el.name}</td>
							<td>{el.description}</td>
							<td>{el.price.toFixed(2).toString().replace(".", ",")}</td>
							<td>{el.paymentMethod}</td>
							<td>{el.category}</td>
							<td>
								<img src={el.photos} alt="Imagens" />
							</td>
							<td>{el.installments}</td>
						</tr>
					</>
				);
			}
		);

		let list;
		if (this.state.produtosCadastrados) {
			list = (
				<section>
					<table>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Descrição</th>
								<th>Preço</th>
								<th>Método de pagamento</th>
								<th>Categoria</th>
								<th>Imagem</th>
								<th>Parcelas</th>
							</tr>
						</thead>
						<tbody>{mostrarProdutosCadastrados}</tbody>
					</table>
				</section>
			);
		}

		return (
			<div background='paper'>
				<MuiThemeProvider theme={myTheme} >
					<GlobalStyle />
					<Sessao background='paper'>
						<h1>Cadastre seus produtos para a Venda !</h1>
						<TextField
							id="standard-name"
							label="Insira o nome do Produto"
							value={this.state.name}
							onChange={this.lidaComName}
							margin="normal"
						/>

						<TextField
							id="standard-description"
							label="Descrição"
							multiline={true}
							value={this.state.description}
							onChange={this.lidaComDescription}
							margin="normal"
						/>

						<TextField
							id="standard-price"
							label="Preço"
							value={this.state.price}
							onChange={this.lidaComPrice}
							margin="normal"
							type="number"
						/>
						<TextField
							id="standard-paymentMethod"
							label="Método de Pagamento"
							value={this.state.paymentMethod}
							onChange={this.lidaComPaymentMethod}
							margin="normal"
						/>
						<TextField
							id="standard-category"
							label="Categoria"
							value={this.state.category}
							onChange={this.lidaComCategory}
							margin="normal"
						/>
						<TextField
							id="standard-Photo"
							label="Url da Foto"
							value={this.state.photo}
							onChange={this.lidaComPhotos}
							margin="normal"
						/>
						<TextField
							id="standard-installments"
							label="Parcelas"
							value={this.state.installments}
							onChange={this.lidaComInstallments}
							margin="normal"
							type="number"
						/>

						<Button onClick={this.adicionar} variant="contained">Cadastre seu Produto</Button>
					</Sessao>
					{this.state.produtosCadastrados.length > 0 ? list : null}
				</MuiThemeProvider>
			</div>
		)
	}
}
CadastroItensVenda.protoTypes = {	
	classes: PropTypes.object.isRequire,
}
export default CadastroItensVenda;
