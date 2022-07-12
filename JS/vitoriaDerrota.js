function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = 'green'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Você venceu. Parabéns!', 405, 80)
}

function derrota() {
  pincel.beginPath()
  pincel.fillStyle = 'red'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Fim de jogo!', 405, 100)
}