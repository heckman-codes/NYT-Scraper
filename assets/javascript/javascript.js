var apiKey = "GSnWAsYEcZHxPE8fgBGeZeS7nTIpAoWR";
var searchQuery = $("#inputID").val().trim();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})