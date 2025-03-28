const atualizarDados = () => {
  // Criando um variavel para o tbody
  let dados = document.getElementById("itens");

  //   Zerando o body se houver
  dados.innerHTML = "";

  // Gerando novos conteudos aleatório
  for (let i = 1; i <= 15; i++) {
    // Criando uma variavel para um valor aleatório
    let preco = Math.random() * 100;

    // Criando variavel para um elemento da tr(dados da tabela)
    let elemento = "";

    // Criando listra de cor diferente para as linhas ímpares
    if (i % 2 != 0) elemento = "<tr class='listra'>";
    else elemento = "<tr>";

    // Inserindo os itens na linha (tr)
    elemento += `<td>Produto ${i} </td>
    <td>R$ ${preco.toFixed(2)}</td>`;

    dados.innerHTML += elemento;
  }
};
