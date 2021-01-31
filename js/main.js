document.onload = start();

const GAMEDATA = {
  name: "",
  images: ["baloon", "bowl", "box", "cap"],
  layerCards: [],
  cards: [],
  compareCards: {
    first: "",
    second: "",
  },
};

function start() {
  const form = document.getElementById("username");
  const input = document.getElementById("username-input");

  input.addEventListener("keyup", checkVal);
  form.addEventListener("submit", setNameAndStart);
}

function setNameAndStart(e) {
  e.preventDefault();

  GAMEDATA.name = this.children[0].value;

  loadGame();
}

function checkVal() {
  let val = this.value;
  let subm = document.getElementById("username-submit");

  if (val.length > 3 && /( |`|\~|\.|\*|\&|\?|\!|\'|\"|\)|\()/g.test(val)) {
    this.classList.add("error");
    subm.setAttribute("disabled", true);
  } else {
    this.classList.remove("error");
    subm.removeAttribute("disabled");
  }
}

function loadGame() {
  const logLayout = document.querySelector(".d-grid.log");
  const gameLayout = document.getElementById("game");

  setTimeout(() => {
    hideLogMenu(logLayout);

    setTimeout(() => {
      prepateGameLayout(logLayout, gameLayout);
      startGame();

      setTimeout(() => showGameLayout(gameLayout), 100);
    }, 700);
  }, 200);
}

function hideLogMenu(log) {
  log.style.transition = "all .8s ease";
  log.style.opacity = "0";
}

function prepateGameLayout(log, game) {
  log.style.display = "none";
  game.style.display = "grid";
  game.style.transition = "all .8s ease";
}

function showGameLayout(game) {
  game.style.opacity = "1";
}

function setLayer(inp) {
  let arrInputs = document.querySelectorAll(".card.b");
  arrInputs.forEach((el) => el.classList.remove("active"));
  let num = inp.getAttribute("data-layer");
  GAMEDATA.layer = num;
  inp.classList.add("active");
}

function startGame() {
  const wrapper = document.querySelector(".wrapper");
  const layer = document.getElementById("gameLayer");

  wrapper.classList.add("full");
  layer.classList.add("l-9");

  layer.innerHTML = "";

  prepareCards(GAMEDATA.images);

  drawCards(layer);

  setTimeout(() => {
    flipAllCards();

    setTimeout(() => {
      beginGame("Игра началась");
    }, 1000);
  }, 3500);
}

function prepareCards(images) {
  const alreadyBeen = [];

  for (let i = 0; i < 9; i++) {
    if (images[i] !== undefined) alreadyBeen.push(images[i]);
    else alreadyBeen.push(images[i - images.length]);
  }

  randomizeCards(alreadyBeen);

  GAMEDATA.layerCards = alreadyBeen;
}

function randomizeCards(cardsArr) {
  cardsArr.sort(() => Math.random() - 0.5);
}

//startGame();

function drawCards(layer) {
  GAMEDATA.layerCards.forEach((el, i) => {
    setTimeout(() => {
      const elem = createCardElement(el, i);

      layer.appendChild(elem);
      GAMEDATA.cards.push(elem);

      setTimeout(() => {
        showCard(elem);
      }, i * 70);
    }, i * 100);
  });
}

function showCard(card) {
  card.style.opacity = "1";
  card.style.transform = "scale(1)";
}

function createCardElement(name, i) {
  const elem = document.createElement("div");
  elem.className = "wrapp-3D";
  elem.id = "wrapp-" + i;
  elem.setAttribute("data-cardname", name);

  elem.innerHTML =
    name !== undefined
      ? `<div class="backface flipped"></div><div class="card flip"><img src="img/${name}.png"></div>`
      : '<div class="backface flipped"></div><div class="card flip none"></div>';

  return elem;
}

function flipCard(wrapp) {
  if (wrapp.classList.contains("hide")) return;

  const backface = wrapp.children[0];
  const card = wrapp.children[1];
  const compare = GAMEDATA.compareCards;

  if (compare.first !== "" && compare.second !== "") return;

  if (card.classList.contains("flipped")) {
    card.classList.remove("flipped");
    backface.classList.add("flipped");
  } else {
    backface.classList.remove("flipped");
    card.classList.add("flipped");
  }
  console.log(GAMEDATA.compareCards);
}

function compareCards(name, id) {
  const compare = GAMEDATA.compareCards;
  
  if (compare.first !== "" && compare.second !== "") return;

  if (compare.first.name === "" && compare.second.name === "") {
    compare.first.name = name;
  } else if (compare.second.name === name) {
    compare.second.name = name;
  }

  if (compare.first.id === compare.second.id) {
    GAMEDATA.compareCards.first = "";
    GAMEDATA.compareCards.second = "";

    return;
  }

  if (compare.first.name === compare.second.name) hideCards(compare);
  else flipOpenedCards();

}

function returnRandom(max) {
  return Math.floor(Math.random() * max);
}

function flipOpenedCards() {
  setTimeout(() => {
    GAMEDATA.cards.forEach((el) => {
      if (el.children[0].classList.contains("flipped")) {
        el.children[0].classList.remove("flipped");
        el.children[1].classList.add("flipped");
      }
    });
    GAMEDATA.compareCards.first = "";
    GAMEDATA.compareCards.second = "";
  }, 1000);
}

function hideCards() {
  setTimeout(() => {
    const cards = document.querySelectorAll('.wrapp-3D > .backface.flipped');

    setTimeout(() => {
      cards.forEach(card => card.classList.add("hide"));

      GAMEDATA.compareCards.first = "";
      GAMEDATA.compareCards.second = "";
    }, 200);
  }, 1000);
}

function flipAllCards() {
  GAMEDATA.cards.forEach((el) => {
    flipCard(el);
  });
}

function beginGame(text) {
  const msg = document.getElementById("message");
  const popup = document.querySelector(".popup");
  msg.innerText = text;

  popup.style.display = "block";
  setTimeout(() => {
    popup.style.opacity = 1;
    setTimeout(() => {
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => {
          popup.style.opacity = 0;
          setTimeout(() => {
            popup.style.display = "none";

            activeFlipOnCards();
          }, 200);
        }, 600);
      }, 2000);
    }, 200);
  }, 100);
}

function activeFlipOnCards() {
  const layer = document.getElementById("gameLayer");

  layer.addEventListener("click", (e) => {
    const card = e.target.closest(".wrapp-3D");
    flipCard(card);
    compareCards(card.dataset.cardname, card.id);
  });
}
