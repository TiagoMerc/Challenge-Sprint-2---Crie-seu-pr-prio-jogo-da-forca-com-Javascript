function iniciarJogo() {
 
  pincel.lineWidth = 6
  pincel.strokeStyle = '#0A3871'
  pincel.beginPath()
  pincel.moveTo(0, 0)
  pincel.moveTo(150, 300)
  pincel.lineTo(250, 300)
  pincel.stroke()

  contador = 0
  contadorLetraError = 0
  listandoLetras = []
  vencedor = false
  plvEmJogo = []

  let numero = Math.floor(Math.random() * listaDePalavras.length)
  jogarPlv = listaDePalavras[numero].toUpperCase().split('')
  for (let i = 0; i < jogarPlv.length; i++) {
    pincel.moveTo(300 + 60 * i, 300)
    pincel.lineTo(350 + 60 * i, 300)
    pincel.stroke()
  }
}


























// ANTIGA
/* 

//Seletores e variáveis 

var palavras = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS'];
var tabuleiro = document.getElementById('forca').getContext('2d');
/* var comeca = document.getElementById('text').getContext('2d');
 */

/* 
var letras = [];
var palavraCorreta = "";
var erros = 9;

//Função de palavras secretas
function escolherPalavrasSecreta(){
  var palavra = palavras[Math.floor(Math.random()*palavras.length)];
  palavraSecreta = palavra; 
  console.log(palavra);
  return palavra;
}

// Desenhando traços
function escreverTracinhos(){
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = "round";
  tabuleiro.lineJoin = "round";
  tabuleiro.strokeStyle = "#0A3871";
  tabuleiro.beginPath();
  var eixo = 600/palavraSecreta.length;
  for(let i=0; i < palavraSecreta.length; i++){
    tabuleiro.moveTo(500+(eixo*i),640);
    tabuleiro.lineTo(550+(eixo*i),640);
  }
  tabuleiro.stroke();
  tabuleiro.closePath();
}escreverTracinhos(escolherPalavrasSecreta());

function escreverLetraCorreta(index) {
  tabuleiro.font = 'bold 52px Inter';
  tabuleiro.lineWidth = 6;
  tabuleiro.lineJoin = "round";
  tabuleiro.lineCap = "round";
  tabuleiro.strokeStyle = "#0A3871";

  var eixo = 600/palavraSecreta.length;
  tabuleiro.fillText(palavraSecreta[index], 505+(eixo*index), 620);
  tabuleiro.stroke();
}

function escreverLetraIncorreta(letra, errorsLeft) {
  tabuleiro.font = 'bold 40px Inter';
  tabuleiro.lineWidth = 6;
  tabuleiro.lineJoin = "round";
  tabuleiro.lineCap = "round";
  tabuleiro.strokeStyle = "#0A3871";

  tabuleiro.fillText(letra, 535+(40*(10-errorsLeft)), 710, 40);
}

function verificarLetraCorreta(key) {
  if(letras.length < 1 || letras.indexOf(key) < 0) {
    console.log(key);
    letras.push(key);
    return false;

  }else{
    letras.push(key.toUpperCase());
    return true;
  }
}

function adicionarLetraCorreta(i){
  document.getElementById("#palavra_correta")
  palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter){
  if(palavraSecreta.indexOf(letter) <= 0){
    erros -=1;
  }

}

document.onkeydown = (e) => {
  var letra = e.key.toUpperCase();
  if(!verificarLetraCorreta(e.key)){
    if(palavraSecreta.includes(letra)){
          adicionarLetraCorreta(palavraSecreta.indexOf(letra));
          for(let i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] === letra){
              escreverLetraCorreta(i);
            }
        }
    }else{
    if(!verificarLetraCorreta(e.key))
    return 
    adicionarLetraIncorreta(letra);
    escreverLetraIncorreta(letra, erros);
    }
  }
};
 */
/* function recebendoPalavraSecreta(){
  palavraSecreta = text;

}recebendoPalavraSecreta(text); */
