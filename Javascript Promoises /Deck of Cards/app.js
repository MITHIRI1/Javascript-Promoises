const BASE_URL = 'https://deckofcardsapi.com/api/deck';


// 1;
axios
  .get(`${BASE_URL}/new/draw`)
  .then((res) =>
    console.log(
      `${res.data.cards[0].value.toLowerCase()} of ${res.data.cards[0].suit.toLowerCase()} `
    )
  );


// 1;
$.getJSON(`${BASE_URL}/new/draw`).then((data) => {
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});


// 2.
let firstCard = null;
axios
  .get(`${BASE_URL}/new/draw`)
  .then((res) => {
    firstCard = res.data.cards[0];
    let deckId = res.data.deck_id;
   
    return axios.get(`${BASE_URL}/${deckId}/draw`);
  })
  .then((res) => {
    let secondCard = res.data.cards[0];
    let cards = [firstCard, secondCard];
   
    cards.forEach(function (card) {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  });


let firstCard = null;
$.getJSON(`${BASE_URL}/new/draw`)
  .then((data) => {
    firstCard = data.cards[0];
    let deckId = data.deck_id;

    return $.getJSON(`${BASE_URL}/${deckId}/draw`);
  })
  .then((data) => {
    let secondCard = data.cards[0];
    let cards = [firstCard, secondCard];

    cards.forEach(function (card) {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  });



// 3.
let deckId = null;
let $button = $('#new-card');
let $cardArea = $('#card-area');

$.getJSON(`${BASE_URL}/new/draw`).then((data) => {
  deckId = data.deck_id;

  $button.show();
});

$button.on('click', function () {
  $.getJSON(`${BASE_URL}/${deckId}/draw`).then((data) => {
    let cardImgSrc = data.cards[0].image;

    $cardArea.append(`<img src=${cardImgSrc}>`);
    if (data.remaining === 0) {
      $button.remove();
      alert('All cards drawn!');
    }
  });
});