function playSound (selectorAudio) {
  const element = document.querySelector(selectorAudio);
  
  if (element != null && element.localName === 'audio') {
      element.play();
  } else {
    alert('Elemento não encontrado ou seletor inválido')
  }

}

const list = document.querySelectorAll('.tecla');

for (let cont = 0; cont < list.length; cont ++) {
  const key = list[cont]

  const instrument = key.classList[1];

  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playSound(idAudio)
  };

  key.onkeydown = function (event) {

    if (event.code === 'Space' || event.code === 'Enter') {
      key.classList.add('ativa');
    } 

  }

  key.onkeyup = function () {
    key.classList.remove('ativa');
  }

}