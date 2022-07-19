function getCardsContent(cards, deck, isAdding = true) {
    
    var fragEl = document.createDocumentFragment();

    for(var i = 0; i < cards.length; i++) {

        if(!cards[i].imageUrl) continue;

        var divEl = document.createElement('div');
        var barStyle = "bg-zinc-200";

        var actionIcon = isAdding ? "fa-heart" : "fa-xmark";

        divEl.setAttribute("class", "grid gap-2");

        var countInDeck = 0;
        var cardCountEl = "";
        if( isAdding ) {
            countInDeck = deck && deck.reduce(function(count, card) {
                if(card.id === cards[i].id) {
                    return count + 1;
                }
                return count;
            }, 0);
            if(countInDeck) {
                divEl.classList.add('active');
                barStyle = "bg-sky-800 text-white";
            }

            cardCountEl = `<span id="card-count-${i}">${countInDeck}</span>`;
        }

        console.log(countInDeck);

        var template = `
        <div class="card-header px-2 ${barStyle} flex justify-between align-center rounded-md">
            <h2 class="p-2">${cards[i].name}</h2>
            <div>
                ${cardCountEl}
                <button class="hover:text-sky-500 p-2" data-card-index="${i}"><i class="fa-solid ${actionIcon}"></i></button>
            </div>
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