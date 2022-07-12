var resultsEl = document.querySelector('#results');
var searchBtnEl = document.querySelector('#search-btn');
var introEl = document.querySelector('#intro');
var isIntroHidden = false;


var nameFieldEl = document.querySelector('#card-name-field');
var rarityFieldEl = document.querySelector('#card-rarity-field');
var setFieldEl = document.querySelector('#card-set-field');

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

    getCards(requestOptions)
        .then(function (data) {
            if(!isIntroHidden) {
                introEl.style.display = "none"
                isIntroHidden = true;
            }
            var cards = data.cards;
            var content = getCardsContent(cards);
            console.log(content);
            resultsEl.innerHTML = "";
            resultsEl.append(content);
        });
    
});



// var buttonEl = document.querySelector('#get-cards-legendary');
// var button2El = document.querySelector('#get-cards-basic');



// buttonEl.addEventListener("click", function() {

//     getCardsBySupertype("Legendary")
        // .then(function (data) {
        //     var cards = data.cards;
        //     var content = getCardsContent(cards);
        //     console.log(content);
        //     resultsEl.innerHTML = "";
        //     resultsEl.append(content);
        // });

// });

// button2El.addEventListener("click", function() {
//     getCardsBySupertype("Basic");
// });