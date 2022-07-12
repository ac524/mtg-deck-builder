function getCardsContent(cards) {
    
    var fragEl = document.createDocumentFragment();

    for(var i = 0; i < cards.length; i++) {
        var divEl = document.createElement('div');

        divEl.setAttribute("class", "grid gap-2")

        if(!cards[i].imageUrl) continue;         

        var template = `
        <div class="px-2 bg-zinc-200 flex justify-between rounded-md">
            <h2 class="p-2">${cards[i].name}</h2>
            <button class="hover:text-sky-500 p-2"><i class="fa-solid fa-heart"></i></button>
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