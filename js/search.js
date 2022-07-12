var resultsEl = document.querySelector('#results');
var buttonEl = document.querySelector('#get-cards-legendary');
var button2El = document.querySelector('#get-cards-basic');

buttonEl.addEventListener("click", function() {

    getCardsBySupertype("Legendary")
        .then(function (data) {
            var cards = data.cards;
            var content = getCardsContent(cards);
            console.log(content);
            resultsEl.innerHTML = "";
            resultsEl.append(content);
        });

});

// button2El.addEventListener("click", function() {
//     getCardsBySupertype("Basic");
// });