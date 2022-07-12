let btnIniciar = document.querySelector('#btn-iniciar')
let inserirPalavra = document.querySelector('#inserir-palavra')
let salvar = document.querySelector('#gravar')
let cancelar = document.querySelector('#cancelar')
let novoJogo = document.querySelector('#novo-jogo')
let desistir = document.querySelector('#desistir')

// Transições do jogo

let inicio = document.querySelector('#inicio')
let inPalavra = document.querySelector('#in-palavra')
let jogo = document.querySelector('#jogo')
let footer = document.querySelector('footer')

let listaDePalavras = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS']

let palavra = document.querySelector('#palavra')
let borda = document.querySelector('canvas')
let pincel = forca.getContext('2d')
let contador = 0
let flag = false
let jogarPlv
let contadorLetraError = 0
let listandoLetras = []
let plvEmJogo = []
let vencedor = false

btnIniciar.addEventListener('click', () => {
  inicio.classList.add('oculta')
  jogo.classList.remove('oculta')
  footer.classList.add('footer')
  iniciarJogo()
  flag = true
})

inserirPalavra.addEventListener('click', () => {
  inicio.classList.add('oculta')
  inPalavra.classList.remove('oculta')
  flag = false
})

salvar.addEventListener('click', () => {
  if (!(palavra.value.length > 8)) {
    if (validandoPalavra(palavra.value.toUpperCase())) {
      listaDePalavras.push(palavra.value.toUpperCase())
      inPalavra.classList.add('oculta')
      jogo.classList.remove('oculta')
      footer.classList.add('footer')
      iniciarJogo()
      flag = true
    }
  } else {
    swal(
      'Palavra muito grande!',
      `A palavra deve ter no máximo 8 letras e ${palavra.value.length} letras.`,
      'warning'
    )
  }
})

cancelar.addEventListener('click', () => {
  inPalavra.classList.add('oculta')
  inicio.classList.remove('oculta')
  footer.classList.remove('footer')
  flag = false
})

desistir.addEventListener('click', () => {
  jogo.classList.add('oculta')
  inicio.classList.remove('oculta')
  footer.classList.remove('footer')
  vencedor = false
  flag = false
})

novoJogo.addEventListener('click', () => {
  iniciarJogo()
  flag = true
  location.reload();
})

window.addEventListener('keydown', element => {

  if (flag && validandoLetra(element.key) && contador < 9) {
    if (!listandoLetras.includes(element.key.toUpperCase())) {
      listandoLetras.push(element.key.toUpperCase())
      if (!mostarLetra(element.key.toUpperCase())) {
        criarBoneco(contador)
        contador++
      }
    } else {
      swal(
        'Letra repetida!',
        `você entrou "${element.key.toUpperCase()}"  novamente`,
        'warning'
      )
    }
  } else if (contador >= 9) {
  
    derrota()
    swal(
      'Você errou!',
      `A palavra era: "${jogarPlv.join(
        ''
      )}", clique em novo jogo se você quiser jogar novamente.`,
      'info'
    )
  } else if (vencedor) {
    swal(
      'Você Venceu!',
      'Clique em novo jogo se você quiser jogar novamente.',
      'success'
    )
  }
})