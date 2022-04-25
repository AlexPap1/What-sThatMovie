//global
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var apiKeyOmdb = "15c93984";
enterMovie = document.getElementById("enter-movie");
searchButton = document.getElementById("search-button"); 


/* OMDb API: http://www.omdbapi.com/?apikey=15c93984&s={movie-title} */
poster = document.getElementById("poster");
const movieName = document.getElementById("name");
const year = document.getElementById("year");
const overview = document.getElementById("overview");

//call omdb api, adds title and year
function ApiCallFunction(str) {
    let api = "https://www.omdbapi.com/?apikey=15c93984&s=" + str;
    console.log(api);
    fetch(api).then((res) => {

        res.json().then((data) => {
            console.log(data);
            movieName.innerHTML = "Title: " + data.Search[0].Title;
            year.innerHTML = "Year: " + data.Search[0].Year;
        })
    })
};

//search button event listener. runs api functions on click of search button using input text as base
searchButton.addEventListener('click', function () {
    const searchTerm = enterMovie.value.trim();
    console.log(searchTerm);
    history();
    getPoster(searchTerm);
    //removes spaces from movies with more than 1 word, to keep API url from breaking
    let str = enterMovie.value.replace(" ", '%20');
    console.log(str);
    ApiCallFunction(str);
});
// clears the content on the page to display only the results
var resultsPage = function () {
        $("main").addClass("disappear");
        $("aside").addClass(".flex-container");
        $(".search-container").addClass(".row new-child-left");
    $("#results-container").addClass(".row new-child-right");
    $("#poster")
}

$("#search-button").click(function () {
    resultsPage();
});
/*makes enter button trigger search button click*/
document.getElementById("enter-movie")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("search-button").click(resultsPage);
        }
    });

/*save input in local storage and display under search history*/
function history() {
    const searchTerm = enterMovie.value;
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    localStorage.setItem("history", JSON.stringify(savedData.textContent));
    renderHistory();
};

//fixed to display all history items
function renderHistory() {
    savedData.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
        const historyItem = document.createElement("input");
        historyItem.setAttribute("type", "text");
        historyItem.setAttribute("value", searchHistory[i]);
        historyItem.addEventListener("click", function() {
            //reruns both API Calls with history value as the input instead of the text input
            getPoster(historyItem.value);
            ApiCallFunction(historyItem.value);
        })
        savedData.append(historyItem);
    }
}

//second api (poster) grabs poster image and breif summary
 function getPoster(film){

          $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
            console.log(json);
                   poster.src = "http://image.tmdb.org/t/p/w500/" + json.results[0].poster_path;
                   overview.innerHTML = json.results[0].overview;
 })};