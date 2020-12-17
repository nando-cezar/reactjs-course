import React from 'react';

function formatarNome(usuario){
  return usuario.nome + ' ' + usuario.sobrenome;
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
    </>
  );
}

export default  App;