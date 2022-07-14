var resultsEl = $('#results');
var searchBtnEl = document.querySelector('#search-btn');
var introEl = document.querySelector('#intro');
var isIntroHidden = false;

var nameFieldEl = document.querySelector('#card-name-field');
var rarityFieldEl = document.querySelector('#card-rarity-field');
var setFieldEl = document.querySelector('#card-set-field');

// Load existing saved cards from local storage / Initialize a new deck.
var savedDeckJSON = localStorage.getItem("mtgDeck");
var deck = savedDeckJSON ? JSON.parse(savedDeckJSON) : [];

// Global variable for current card data
var cards;

searchBtnEl.addEventListener("click", function() {

    var nameValue = nameFieldEl.value;
    var rarityValue = rarityFieldEl.value;
    var setValue = setFieldEl.value;

    var requestOptions;

    if(nameValue || rarityValue || setValue) {
        requestOptions = {};

        if(nameValue) requestOptions.name = nameValue;
        if(rarityValue) requestOptions.rarity = rarityValue;
        if(setValue) requestOptions.set = setValue;
    }

    getMTGCards(requestOptions)
        .then(function (data) {
            if(!isIntroHidden) {
                introEl.style.display = "none";
                isIntroHidden = true;
            }
            cards = data.cards;
            // console.log(cards);
            var content = getCardsContent(cards);
            // resultsEl.innerHTML = "";
            resultsEl.html(content);
        });
    
});

// WHEN the users clicks the heart button
resultsEl.on("click", "button[data-card-index]", function(event) {

    // console.log(event);

    // console.log("hello", cards, event.target, event.target.dataset, event.target.dataset.cardIndex);

    // THEN I need to get the index for the card related to the button click (data-card-index attr)
    var cardIndex = parseInt(event.currentTarget.dataset.cardIndex);

    // THEN use the card index to get the whole card object
    var card = cards[cardIndex];

    // THEN push the card object to the `deck`
    deck.push(card);

    // Resave the deck to `localStorage`
    localStorage.setItem("mtgDeck", JSON.stringify(deck));

});


    

    

    

    

function fetchAndDisplaySetOptions() {

    var savedSetsJSON = localStorage.getItem("mtgSets");

    var savedSets = savedSetsJSON ? JSON.parse(savedSetsJSON) : false;
    
    if( savedSets ) {
        var content = getSetOptionsContent(savedSets);
        setFieldEl.innerHTML = "";
        setFieldEl.append(content);
        return;
    }
    
    getMTGSets()
        .then(function(data) {
            var sets = data.sets;
            if( sets ) {
                localStorage.setItem("mtgSets", JSON.stringify(sets));

                var content = getSetOptionsContent(sets);
                setFieldEl.innerHTML = "";
                setFieldEl.append(content);
            }
        });

}

fetchAndDisplaySetOptions();