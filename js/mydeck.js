var resultsEl = $('#results');

// Load existing saved cards from local storage / Initialize a new deck.
var savedDeckJSON = localStorage.getItem("mtgDeck");
var deck = savedDeckJSON ? JSON.parse(savedDeckJSON) : [];

var content = getCardsContent(deck);
resultsEl.html(content);