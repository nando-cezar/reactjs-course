import React from 'react';
import './App.css';
import styled from 'styled-components';


const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #00A100;
`;

const Botao = styled.button`
  font-size: 19px;
  padding: 10ox 15px;
  //background-color: ${props => props.color || "#00FF00"};
  background-color: ${props => props.ativo === true ? "#CCC" : "#00FF00"};
`;
/* function formatarNome(usuario){
  return usuario.nome + ' ' + usuario.sobrenome;
}

function HelloWorld(props){
  return <h1>Olá mundo, {props.name} </h1>
}

function Avatar(props){
  return(
    <div className="avatar">
      <img src={props.user.url} alt={props.user.name}/>
      <br/>
      <span>{props.user.name}</span>
    </div>
  );
} */

const App = () => {

  /* let imagem = 'https://www.google.com.br/google.jpg';

  let usuario = {
    nome: 'Luís Fernando',
    sobrenome: 'Cezar dos Santos'
  };

  let user = {
    url: 'https://www.google.com.br/google.jpg',
    name: 'Luís Fernando'
  }; */


  /*
    <div>Meu nome é {formatarNome(usuario)}</div>
    <img src={imagem} />

    <HelloWorld name={usuario.nome}/>

    <Avatar user={user}/>
  */ 
  return (
    <Site>
      <Botao color="#FF0000">Clique aqui!</Botao>
      <Botao color="#0000FF">Clique aqui!</Botao>
      <Botao>Clique aqui!</Botao>
      <Botao ativo={true}>Clique aqui!</Botao>
      <Botao ativo={false}>Clique aqui!</Botao>
    </Site>
  );
}

export default  App;