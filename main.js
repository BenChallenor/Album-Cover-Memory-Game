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

// grabs the game root id
const game = document.getElementById('game');


// creates a section with a grid class
const grid = document.createElement('section');
grid.setAttribute("class", "grid");

// adds the grid section to the game div to the DOM
game.appendChild(grid);

// duplicates card array
let gameGrid = cardsArray.concat(cardsArray);
console.log(gameGrid);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

// cardsArray.forEach(item => {
// gameGrid(with duplicate array) replaces cardsArray
gameGrid.forEach(item => {
  // create a div
  const card = document.createElement("div");
  // apply a card class to that div
  card.classList.add("card");
  // sets the data-name attribute of the div to the cardsArray
  card.dataset.name = item.name;
  // applies the bacground image of the div to the cardsArray
  card.style.backgroundImage = `url(${item.img})`;
  // adds the div to the grid section
  // <div class="card" data-name="symbol" style="background-image: url("images/symbol.jpg");"></div>
  grid.appendChild(card);

});
