function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = 'green'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Você venceu!', 405, 80)
}

function derrota() {
  pincel.beginPath()
  pincel.fillStyle = 'red'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Você  perdeu!', 405, 100)
}