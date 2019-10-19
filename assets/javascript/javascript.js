<<<<<<< HEAD
$("#search-query").on("click", function(event) {
  event.preventDefault();
  searchTerm();
=======

$("#search-button").on("click", function (event) {
    event.preventDefault();
    searchTerm();
>>>>>>> a3f5f22f9391398c924b5fca753fd7594ce9f0d2
});

function searchTerm() {
  var apiKey = "GSnWAsYEcZHxPE8fgBGeZeS7nTIpAoWR";
  var searchQuery = $("#inputID")
    .val()
    .trim();
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchQuery +
    "&api-key=" +
    apiKey;

<<<<<<< HEAD
  console.log(queryURL);
=======
    var apiKey = "GSnWAsYEcZHxPE8fgBGeZeS7nTIpAoWR";
    var searchQuery = $("#formGroupExampleInput").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&api-key=" + apiKey;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.response.docs.length; i++) {
            console.log(response.doc[i].headline.main);
        }

    })
>>>>>>> a3f5f22f9391398c924b5fca753fd7594ce9f0d2

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}
