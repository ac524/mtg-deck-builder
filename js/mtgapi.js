var apiBaseUrl = "https://api.magicthegathering.io/v1/";

function getMTGCards( options ) {

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


function getMTGSets() {

    var getSetsUrl = apiBaseUrl + "/sets";

    // if( options ) {
    //     var searchParams = new URLSearchParams(options);

    //     getCardsUrl += "?" + searchParams.toString();
    // }

    return fetch(getSetsUrl)
        .then(function(response) {
            return response.json();
        });

}