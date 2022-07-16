var resultsEl = $('#results');

// Load existing saved cards from local storage / Initialize a new deck.
var savedDeckJSON = localStorage.getItem("mtgDeck");
var deck = savedDeckJSON ? JSON.parse(savedDeckJSON) : [];

var content = getCardsContent(deck, deck, false);
resultsEl.html(content);

resultsEl.on("click", "button[data-card-index]", function(event) {

    // THEN I need to get the index for the card related to the button click (data-card-index attr)
    var cardIndex = parseInt(event.currentTarget.dataset.cardIndex);

    deck.splice( cardIndex, 1 );

    localStorage.setItem("mtgDeck", JSON.stringify(deck));

    var content = getCardsContent(deck, deck, false);
    resultsEl.html(content);
});