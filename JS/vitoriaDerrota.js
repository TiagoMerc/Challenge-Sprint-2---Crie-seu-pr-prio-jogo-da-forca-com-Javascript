function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = 'green'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('PARABENS,', 405, 100)
  pincel.fillText('Você conseguiu completar a palavra!', 405, 150)
}

function derrota() {
  pincel.beginPath()
  pincel.fillStyle = 'red'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Game Over!', 405, 100)
  pincel.fillText('Você  foi derrotado!', 405, 150)
}