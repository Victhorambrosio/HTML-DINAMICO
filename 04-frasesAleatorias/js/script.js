//Criando a função de flecha com frases aleatórias
const falar = () => {
  //Criando o vetor de frases
  const frases = [
    "O dia é bonito!",
    "Falta muito pra sexta-feira?",
    "Prazer eu sou o dia!",
    "Vish, vai chover e não vai ter hino",
  ];

  //Criando uma variável para armazenar a DIV com id "tagarela"
  let tagarela = document.getElementById("tagarela");

  //Criando variável de controle para frases exibidas
  let indice = 0;

  //Criando variável para número aleatório entre 0 e 1 (lembrando que o 1 não entra na conta)
  let numero = Math.random();

  //Configurando o número para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  //Escrevendo a frase para o usuário
  tagarela.innerHTML = frases[indice];
};
