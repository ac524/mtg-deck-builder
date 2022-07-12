var apiBaseUrl = "https://api.magicthegathering.io/v1/";

function getCardsBySupertype( supertype ) {

    var getCardsUrl = apiBaseUrl + "/cards?supertypes=" + supertype;

    return fetch(getCardsUrl)
        .then(function(response) {
            return response.json();
        });

}