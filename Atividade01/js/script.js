const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  const trocarImagem = [
    "imagem/emojinegativo.jpg",
    "imagem/emoji-joinha.jpeg",
    "imagem/emojinop.jpg",
    "imagem/emojisigmadabahia.jpg",
  ];

  let indice = 0;

  let numero = Math.random();

  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;
  else indice = 0;
  imagem.src = trocarImagem[indice];
};

const calcular = (operador) => {
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;

    case "-":
      resultado = valor1 - valor2;
      break;

    case "*":
      resultado = valor1 * valor2;
      break;

    case "/":
      resultado = valor1 / valor2;
      break;
  }

  frmCalculadora.inResultado.value = resultado;
};
