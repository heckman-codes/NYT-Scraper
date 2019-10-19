
$("#search-button").on("click", function (event) {
    event.preventDefault();
    searchTerm();
});

function searchTerm() {

    var apiKey = "GSnWAsYEcZHxPE8fgBGeZeS7nTIpAoWR";
    var searchQuery = $("#formGroupExampleInput").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&api-key=" + apiKey;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })

}