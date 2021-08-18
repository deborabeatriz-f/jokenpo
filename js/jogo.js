let nome = prompt("Qual seu nome?");

let usuarioEscolha = document.querySelector("#jogador");
let computadorEscolha = document.querySelector("#escolhaComputador");
let resultadoDisplay = document.querySelector("#resultado");
let rodadaDisplay = document.querySelector("#rodada");
let pontuacaoDisplay = document.querySelector("#pontuacao");

function escolha(numero) {
  let opcaoUsuario;
  switch (numero) {
    case 1:
      opcaoUsuario = "Pedra 🗿";
      break;
    case 2:
      opcaoUsuario = "Papel 📄";
      break;
    case 3:
      opcaoUsuario = "Tesoura ✂️";
  }
  usuarioEscolha.innerText = opcaoUsuario;

  let escolhaComputador = function aleatorio() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  };

  let opcaoComputador;
  switch (escolhaComputador()) {
    case 1:
      opcaoComputador = "Pedra 🗿";
      break;
    case 2:
      opcaoComputador = "Papel 📄";
      break;
    case 3:
      opcaoComputador = "Tesoura ✂️";
  }
  computadorEscolha.innerText = opcaoComputador;

  jogo(opcaoUsuario, opcaoComputador);
}

let pontos = [0, 0];
let rodada = 0;

function jogo(opcaoUsuario, opcaoComputador) {
  let resultado;

  switch (opcaoUsuario + opcaoComputador) {
    case "Papel 📄Papel 📄":
      resultado = `Empate 🤨`;
      rodada++;
      break;
    case "Pedra 🗿Pedra 🗿":
      resultado = `Empate 🤨`;
      rodada++;
      break;
    case "Tesoura ✂️Tesoura ✂️":
      resultado = `Empate 🤨`;
      rodada++;
      break;
    case "Papel 📄Pedra 🗿":
      resultado = `${nome} ganhou! 🏆`;
      rodada++;
      pontos[0]++;
      break;
    case "Tesoura ✂️Papel 📄":
      resultado = `${nome} ganhou! 🏆`;
      rodada++;
      pontos[0]++;
      break;
    case "Pedra 🗿Tesoura ✂️":
      resultado = `${nome} ganhou! 🏆`;
      rodada++;
      pontos[0]++;
      break;
    case "Papel 📄Tesoura ✂️":
      resultado = `O computador ganhou! 🤬`;
      rodada++;
      pontos[1]++;
      break;
    case "Pedra 🗿Papel 📄":
      resultado = `O computador ganhou! 🤬`;
      rodada++;
      pontos[1]++;
      break;
    case "Tesoura ✂️Pedra 🗿":
      resultado = `O computador ganhou! 🤬`;
      rodada++;
      pontos[1]++;
  }
  //   console.log("Usuário " + pontos[0]);
  //   console.log("Computador " + pontos[1]);

  rodadaDisplay.innerText = `N° ${rodada} `;
  pontuacaoDisplay.innerText = `${nome} ${pontos[0]} x ${pontos[1]} Computador `;
  //   console.log("Rodada " + rodada);
  resultadoDisplay.innerText = resultado;

  // 3 Rodadas
  if (rodada >= 3) {
    pontos = [0, 0];
    rodada = 0;
  }
}
