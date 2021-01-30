document.onload = start();

var GAMEDATA = {
  name: '',
  layer: 9,
  images: {
    9: ['baloon', 'bowl', 'box', 'cap'],
    16: ['baloon', 'bowl', 'box', 'cap', 'phone', 'planet'],
    25: ['baloon', 'bowl', 'box', 'cap', 'phone', 'planet', 'sandClock', 'triangle']
  },
  layerCards: [],
  cards: [],
  compareCard: {
    first: '',
    second: ''
  }
}

function start() {

  var form = document.getElementById('name');

  form.onsubmit = function (e) {
    e.preventDefault();
    let name = this.children[0].value;
    GAMEDATA.name = name;
    loadGame();
  }

}

function checkVal(inp) {
  let val = inp.value;
  let subm = document.querySelector('form input[type="submit"]');
  if (val.length > 3) {
    if (/( |`|\~|\.|\*|\&|\?|\!|\'|\"|\)|\()/g.test(val)) {
      inp.classList.add('error');
      subm.setAttribute('disabled', true);
    } else {
      inp.classList.remove('error');
      subm.removeAttribute('disabled');
    }
  }
}

function loadGame() {
  let loging = document.querySelector('.d-grid.log');
  let game = document.getElementById('game');
  setTimeout(() => {
    loging.style.transition = 'all .8s ease';
    loging.style.opacity = '0';

    setTimeout(() => {
      loging.style.display = 'none';
      game.style.display = 'grid';
      game.style.transition = 'all .8s ease';

      startGame();

      setTimeout(() => {
        game.style.opacity = '1';
      }, 100);
    }, 700);
  }, 200);
}

function setLayer(inp) {
  let arrInputs = document.querySelectorAll('.card.b');
  arrInputs.forEach(el => el.classList.remove('active'));
  let num = inp.getAttribute('data-layer');
  GAMEDATA.layer = num;
  inp.classList.add('active');
}

function startGame() {
  let wrapper = document.querySelector('.wrapper');
  let layer = document.getElementById('gameLayer');
  let layerNum = GAMEDATA.layer;

  wrapper.classList.add('full');
  let images = GAMEDATA.images[layerNum];
  layer.classList.add('l-' + layerNum);

  layer.innerHTML = '';

  let alreadyBeen = [];

  for (let i = 0; i < layerNum; i++) {
    if (images[i] !== undefined) alreadyBeen.push(images[i]);
    else alreadyBeen.push(images[i - images.length]);
  }
  alreadyBeen.sort(function (a, b) {
    return Math.random() - 0.5;
  });
  GAMEDATA.layerCards = alreadyBeen;

  drawCards(layer);
  setTimeout(() => {
    flipAllCards();
    setTimeout(() => {
      beginGame('Игра началась', function () {
        console.log('ready');
      });
    }, 1000);
  }, 3500);

}

//startGame();

function drawCards(layer) {
  GAMEDATA.layerCards.forEach((el, i) => {
    setTimeout(() => {
      let elem = document.createElement('div');
      elem.className = 'wrapp-3D';
      elem.id = 'wrapp-' + i;
      elem.setAttribute('onclick', 'flipCard(this)');
      elem.setAttribute('data-cardname', el);

      if (el !== undefined) elem.innerHTML = '<div class="backface flipped"></div><div class="card flip"><img src="img/' + el + '.png"></div>';
      else elem.innerHTML = '<div class="backface flipped"></div><div class="card flip  none"></div>';

      layer.appendChild(elem);
      GAMEDATA.cards.push(elem);
      setTimeout(() => {
        elem.style.opacity = '1';
        elem.style.transform = 'scale(1)';
      }, i * 70);

    }, i * 100);
  });
}

function flipCard(wrapp, isArr) {
  if (!wrapp.classList.contains('hide')) {
    let backface = wrapp.children[0];
    let card = wrapp.children[1];
    let compare = GAMEDATA.compareCard;
    if (compare.first == '' || compare.second == '') {

      if (card.classList.contains('flipped') && !backface.classList.contains('flipped')) {
        card.classList.remove('flipped');
        backface.classList.add('flipped');
      } else {
        backface.classList.remove('flipped');
        card.classList.add('flipped');
      }
      if (!isArr) {
        if (compare.first == '') compare.first = wrapp;
        else if (compare.second == '') {
          compare.second = wrapp;
        }
        if (compare.first !== '' && compare.second !== '') {
          if (compare.first.id !== compare.second.id) {
            if (compare.first.getAttribute('data-cardname') == compare.second.getAttribute('data-cardname')) hideCards(compare);
            else flipOpenedCards();
          } else {
            GAMEDATA.compareCard.first = '';
            GAMEDATA.compareCard.second = '';
          }
        }
      }
      console.log(GAMEDATA.compareCard)
    }
  }
}

function returnRandom(max) {
  return Math.floor(Math.random() * max);
}

function flipOpenedCards() {
  setTimeout(() => {

    GAMEDATA.cards.forEach((el) => {
      if (el.children[0].classList.contains('flipped')) {
        el.children[0].classList.remove('flipped');
        el.children[1].classList.add('flipped');
      }
    });
    GAMEDATA.compareCard.first = '';
    GAMEDATA.compareCard.second = '';
  }, 1000);
}

function hideCards(name) {
  setTimeout(() => {
    let cards = GAMEDATA.compareCard;
    cards.second.classList.add('hide');
    setTimeout(() => {
      cards.first.classList.add('hide');
      GAMEDATA.compareCard.first = '';
      GAMEDATA.compareCard.second = '';
    }, 200);
  }, 1000);
}

function flipAllCards() {
  GAMEDATA.cards.forEach(el => flipCard(el, true));
  return true;
}

function beginGame(text, callback) {
  let msg = document.getElementById('message');
  let popup = document.querySelector('.popup');
  msg.innerText = text;

  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.opacity = 1;
    setTimeout(() => {
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => {
          popup.style.opacity = 0;
          setTimeout(() => {
            popup.style.display = 'none';
            callback();
          }, 200);
        }, 600);
      }, 2000);
    }, 200);
  }, 100);
}
