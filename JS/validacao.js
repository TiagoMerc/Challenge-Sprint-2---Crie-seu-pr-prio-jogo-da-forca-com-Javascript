function validandoLetra(letraInserida) {
  const pattern = new RegExp('^[A-Z\u00d1]+$', 'i')
  if (!pattern.test(letraInserida) || letraInserida.length > 1) {
    swal(
      'Somente Letras!',
      `Você digitou "${letraInserida.toUpperCase()}" apenas letras são permitidas.`,
      'warning'
    )
    return false
  } else {
    return true
  }
}

function validandoPalavra(letraInserida) {
  const pattern = new RegExp('^[A-Z\u00d1]+$', 'i')
  if (!pattern.test(letraInserida)) {
    swal(
      'Somente Letras!',
      `Você digitou "${letraInserida.toUpperCase()}" apenas letras são permitidas.`,
      'warning'
    )
    return false
  } else {
    return true
  }
}

