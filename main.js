const cardsArray = [{
    'name': 'purple-rain',
    'img': 'images/purplerain.jpg'
  },
  {
    'name': '1999',
    'img': 'images/1999.jpg'
  },
  {
    'name': 'around-the-world-in-a-day',
    'img': 'images/aroundtheworldinaday.jpg'
  },
  {
    'name': 'controversy',
    'img': 'images/controversy.jpg'
  },
  {
    'name': 'diamonds-and-pearls',
    'img': 'images/diamondsandpearls.jpg'
  },
  {
    'name': 'dirty-mind',
    'img': 'images/dirtymind.jpg'
  },
  {
    'name': 'graffiti-bridge',
    'img': 'images/graffitibridge.jpg'
  },
  {
    'name': 'lovesexy',
    'img': 'images/lovesexy.jpg'
  },
  {
    'name': 'parade',
    'img': 'images/parade.jpg'
  },
  {
    'name': 'prince',
    'img': 'images/prince.jpg'
  },
  {
    'name': 'sign-o-the-times',
    'img': 'images/signothetimes.jpg'
  },
  {
    'name': 'symbol',
    'img': 'images/symbol.jpg'
  },
];

// duplicates card array
let gameGrid = cardsArray.concat(cardsArray);

// grabs the game root id
const game = document.getElementById('game');

// creates a section with a grid class
const grid = document.createElement('section');
grid.setAttribute("class", "grid");
// adds the grid section to the game div to the DOM
game.appendChild(grid);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1200;





// cardsArray.forEach(item => {
// gameGrid(with duplicate array) replaces cardsArray
gameGrid.forEach(item => {
  // create a div
  const card = document.createElement('div');
  // apply a card class to that div
  card.classList.add('card');
  // sets the data-name attribute of the div to the cardsArray
  card.dataset.name = item.name;

  // create front of card
  const front = document.createElement('div');
  front.classList.add('front');

  // create back of card
  const back = document.createElement('div');
  back.classList.add('back');
  // applies the background image of the div to the cardsArray
  back.style.backgroundImage = `url(${item.img})`;

  // adds the div to the grid section
  // <div class="card" data-name="symbol" style="background-image: url("images/symbol.jpg");"></div>
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
    // add match class to all cards selected
  });
};

// reset guesses
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  // remove selected CSS
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

// add event listener to grid
grid.addEventListener('click', function(event) {
  // the event target is the clicked item
  const clicked = event.target;
  // Do not allow the grid section itself to be selected; only select divs inside.
  // The second click on the same card will be ignored the grid
  if (clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

  // add selected class
  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      // use parentNode now as front & back are inner divs
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      // Assign second guess
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    // if both guesses are not empty -->
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second -->
      if (firstGuess === secondGuess) {
        // run the match function
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    // set previous target to clicked
    previousTarget = clicked;
  }
});
