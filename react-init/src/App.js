import React from 'react';

function formatarNome(usuario){
  return usuario.nome + ' ' + usuario.sobrenome;
}

function HelloWorld(props){
  return <h1>Olá mundo, {props.name} </h1>
}

const App = () => {

  let imagem = 'https://www.google.com.br/google.jpg';

  let usuario = {
    nome: 'Luís Fernando',
    sobrenome: 'Cezar dos Santos'
  };

  return (
    <>
      <div>Meu nome é {formatarNome(usuario)}</div>
      <img src={imagem} />

      <HelloWorld name="Luís Fernando"/>
    </>
  );
}

export default  App;