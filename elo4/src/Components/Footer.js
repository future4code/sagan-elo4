import React from 'react'
import styled from 'styled-components'

const Principal = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: #30bfbf;
height: 13vh;
color:#ffa020;
padding: 10px;
p {
font-size: 40px;
}
`
const Nomes = styled.div`
display: flex;
flex-direction: row;
align-items: center;
p{
  font-size: 20px;
}
`


function Footer()  {
  return(
    <Principal>
    <p>Elo4</p>
    <Nomes>
    <p>Site desenvolvido por : </p>
    <p> Luiz Filipe Virtuoso - </p>
    <p> Mackson Welton - </p>
    <p> Thales Fernando Milanezi - </p>
    <p> Wesley Araujo</p>
    </Nomes>
    </Principal>
  )
}

export default Footer