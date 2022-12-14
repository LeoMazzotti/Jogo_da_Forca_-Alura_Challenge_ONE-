var nome = [
  'leo',
  'ronaldo',
  'gabriel',
  'camila',
  'vanessa',
  'priscila',
  'jeferson'
]
var animal = [
  'cachorro',
  'gato',
  'passarinho',
  'tubarao',
  'elefante',
  'onca',
  'leao'
]
var carro = ['fusion', 'uno', 'gol', 'corvette', 'mustang']
var signo = [
  'aries',
  'cancer',
  'leao',
  'escorpiao',
  'virgem',
  'gemeos',
  'aquario',
  'peixes',
  'libra',
  'touro',
  'capricornio',
  'sagitario'
]
var esporte = ['futebol', 'volei', 'natacao', 'basquete']

var biblioteca = nome.concat(animal, carro, signo, esporte)

var palavra = Math.floor(Math.random() * biblioteca.length)
var sorteio = biblioteca[palavra]
var palavraSorteada = sorteio.toUpperCase()
var letrasErradas = []
var letrasCorretas = []
var base = ' _ '

var array = palavraSorteada.split('')
console.log(array)

function dica() {
  if (nome.includes(sorteio)) {
    document.querySelector('#dicaPalavra').innerHTML = ' Nome'
  } else if (animal.includes(sorteio)) {
    document.querySelector('#dicaPalavra').innerHTML = ' Animal'
  } else if (carro.includes(sorteio)) {
    document.querySelector('#dicaPalavra').innerHTML = ' Carro'
  } else if (signo.includes(sorteio)) {
    document.querySelector('#dicaPalavra').innerHTML = ' Signo'
  } else if (esporte.includes(sorteio)) {
    document.querySelector('#dicaPalavra').innerHTML = ' Esporte'
  }
}

dica()

function separaLetras() {
  if (array[0] != undefined) {
    document.querySelector('#palavraSorteada0').innerHTML = array[0]
    document.querySelector('#base0').innerHTML = base
  }

  if (array[1] != undefined) {
    document.querySelector('#palavraSorteada1').innerHTML = array[1]
    document.querySelector('#base1').innerHTML = base
  }

  if (array[2] != undefined) {
    document.querySelector('#palavraSorteada2').innerHTML = array[2]
    document.querySelector('#base2').innerHTML = base
  }

  if (array[3] != undefined) {
    document.querySelector('#palavraSorteada3').innerHTML = array[3]
    document.querySelector('#base3').innerHTML = base
  }

  if (array[4] != undefined) {
    document.querySelector('#palavraSorteada4').innerHTML = array[4]
    document.querySelector('#base4').innerHTML = base
  }

  if (array[5] != undefined) {
    document.querySelector('#palavraSorteada5').innerHTML = array[5]
    document.querySelector('#base5').innerHTML = base
  }

  if (array[6] != undefined) {
    document.querySelector('#palavraSorteada6').innerHTML = array[6]
    document.querySelector('#base6').innerHTML = base
  }

  if (array[7] != undefined) {
    document.querySelector('#palavraSorteada7').innerHTML = array[7]
    document.querySelector('#base7').innerHTML = base
  }

  if (array[8] != undefined) {
    document.querySelector('#palavraSorteada8').innerHTML = array[8]
    document.querySelector('#base8').innerHTML = base
  }

  if (array[9] != undefined) {
    document.querySelector('#palavraSorteada9').innerHTML = array[9]
    document.querySelector('#base9').innerHTML = base
  }
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90
}

function atualizarJogo() {
  mostrarLetrasErradas()
  var vitoria2 = setTimeout(() => {
    mensagemVitoria()
  }, 800)
}

function mostrarLetrasErradas() {
  document.querySelector('#letrasErradas').innerHTML = letrasErradas.toString()
}

document.addEventListener('keydown', evento => {
  const codigo = evento.keyCode // 65 - 90 (intervalo)

  if (isLetra(codigo)) {
    const teclaPressionada = evento.key

    const letraObtida = removeAcento(teclaPressionada)

    const letra = letraObtida.toUpperCase()

    if (letrasCorretas.includes(letra)) {
      return
    }

    if (array[0] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada0').style.visibility = 'visible'
    }
    if (array[1] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada1').style.visibility = 'visible'
    }
    if (array[2] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada2').style.visibility = 'visible'
    }
    if (array[3] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada3').style.visibility = 'visible'
    }
    if (array[4] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada4').style.visibility = 'visible'
    }
    if (array[5] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada5').style.visibility = 'visible'
    }
    if (array[6] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada6').style.visibility = 'visible'
    }
    if (array[7] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada7').style.visibility = 'visible'
    }
    if (array[8] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada8').style.visibility = 'visible'
    }
    if (array[9] == letra) {
      letrasCorretas.push(letra)
      document.querySelector('#palavraSorteada9').style.visibility = 'visible'
    }
    if (letrasCorretas.includes(letra)) {
      letrasErradas.style = ''
    } else {
      if (letrasErradas.includes(letra)) {
      } else {
        letrasErradas.push(letra)
      }
    }

    mostraBoneco()
    atualizarJogo()
  }
})

function removeAcento(letra) {
  letra = letra.replace(new RegExp('[????????]', 'gi'), 'a')
  letra = letra.replace(new RegExp('[??????]', 'gi'), 'e')
  letra = letra.replace(new RegExp('[??????]', 'gi'), 'i')
  letra = letra.replace(new RegExp('[????????]', 'gi'), 'o')
  letra = letra.replace(new RegExp('[??????]', 'gi'), 'u')
  letra = letra.replace(new RegExp('[??]', 'gi'), 'c')
  return letra
}

function mostraBoneco() {
  var mostraBoneco = letrasErradas.length
  if (mostraBoneco == 1) {
    document.querySelector('#forca').style.display = 'none'
  }
  if (mostraBoneco == 2) {
    document.querySelector('#cabeca').style.display = 'none'
  }
  if (mostraBoneco == 3) {
    document.querySelector('#corpo1').style.display = 'none'
  }
  if (mostraBoneco == 4) {
    document.querySelector('#perna1').style.display = 'none'
  }
  if (mostraBoneco == 5) {
    document.querySelector('#perna2').style.display = 'none'
  }
  if (mostraBoneco == 6) {
    document.querySelector('#braco1').style.display = 'none'
  }
  if (mostraBoneco == 7) {
    document.querySelector('#braco2').style.display = 'none'
    var morto2 = setTimeout(() => {
      mensagemDerrota()
    }, 800)
    return
  }
}

mostraBoneco()
separaLetras()

function mensagemDerrota() {
  var palavraEra = sorteio.toUpperCase()
  var derrota = 'Voc?? Perdeu!'

  document.querySelector('#containerPopup').style.display = 'block'
  document.getElementById('popup').innerHTML = derrota
  document.getElementById('nomePalavraMsgPopup').innerHTML =
    'A palavra era: ' + palavraEra
}

function mensagemVitoria() {
  var vitoria = 'Voc?? Venceu. Parab??ns!'

  var tamanhoArrayPalavraSorteada = array.length
  var tamanhoArrayLetrasCorretas = letrasCorretas.length

  if (tamanhoArrayPalavraSorteada == tamanhoArrayLetrasCorretas) {
    document.querySelector('#containerPopup').style.display = 'block'
    document.getElementById('popup').innerHTML = vitoria
    document.getElementById('nomePalavraMsgPopup').innerHTML =
      'Voc?? j?? ?? mestre nesse jogo! Desafie seus amigos!'
  }
}

function reiniciar() {
  location.reload()
}

function inserirNovaPalavra() {
  var categoriaDigitada = prompt(
    'A categoria da palavra a inserir ser?? Nome, Animal, Carro, ou Esporte ?'
  )
  var categoria = categoriaDigitada.toLowerCase()
  var palavraDigitada = prompt('Digite uma palavra da categoria ' + categoria)
  var digitado = palavraDigitada

  if (categoria == 'nome') {
    nome.push(digitado)
  }

  if (categoria == 'animal') {
    animal.push(digitado)
  }

  if (categoria == 'carro') {
    carro.push(digitado)
  }

  if (categoria == 'esporte') {
    esporte.push(digitado)
  }
}
