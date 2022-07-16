function getCardsContent(cards, deck) {
    
    var fragEl = document.createDocumentFragment();

    for(var i = 0; i < cards.length; i++) {

        if(!cards[i].imageUrl) continue;

        var cardInDeck = deck && deck.find(function(card) {
            return card.id === cards[i].id;
        });

        var divEl = document.createElement('div');
        var barStyle = "bg-zinc-200";

        var favButton = deck ? `<button class="hover:text-sky-500 p-2" data-card-index="${i}"><i class="fa-solid fa-heart"></i></button>` : "";

        divEl.setAttribute("class", "grid gap-2");

        if( cardInDeck ) {
            divEl.classList.add('active');
            barStyle = "bg-sky-800 text-white";
        }


        var template = `
        <div class="px-2 ${barStyle} flex justify-between rounded-md">
            <h2 class="p-2">${cards[i].name}</h2>
            ${favButton}
        </div>
        <img
            class="w-full"
            alt="${cards[i].name}"
            src="${cards[i].imageUrl}"
        />`;

        divEl.innerHTML = template;
        fragEl.append(divEl);
    }

    return fragEl;
}

function getSetOptionsContent(sets) {

    var fragEl = document.createDocumentFragment();
    
    var allOption =  document.createElement('option');
    allOption.value = "";
    allOption.textContent = "All";

    fragEl.append(allOption);

    for(var i = 0; i < sets.length; i++) {

        var setOption =  document.createElement('option');
        setOption.value = sets[i].code;
        setOption.textContent = sets[i].name;

        fragEl.append(setOption);

    }

    return fragEl;

}