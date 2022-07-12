var apiBaseUrl = "https://api.magicthegathering.io/v1/";

function getCards( options ) {

    // name
    // rarity
    // set

    var getCardsUrl = apiBaseUrl + "/cards";

    if( options ) {
        var searchParams = new URLSearchParams(options);

        getCardsUrl += "?" + searchParams.toString();
    }

    return fetch(getCardsUrl)
        .then(function(response) {
            return response.json();
        });

}

function getCardsBySupertype( supertype ) {

    var getCardsUrl = apiBaseUrl + "/cards?supertypes=" + supertype;

    return fetch(getCardsUrl)
        .then(function(response) {
            return response.json();
        });

}