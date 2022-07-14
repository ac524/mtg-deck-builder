function getCardsContent(cards) {
    
    var fragEl = document.createDocumentFragment();

    for(var i = 0; i < cards.length; i++) {
        var divEl = document.createElement('div');

        divEl.setAttribute("class", "grid gap-2")

        if(!cards[i].imageUrl) continue;         

        var template = `
        <div class="px-2 bg-zinc-200 flex justify-between rounded-md">
            <h2 class="p-2">${cards[i].name}</h2>
            <button class="hover:text-sky-500 p-2" data-card-index="${i}"><i class="fa-solid fa-heart"></i></button>
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