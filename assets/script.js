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
const popularMovieOne = document.getElementById("popularOne");
const popularMovieTwo = document.getElementById("popularTwo");
const popularMovieThree = document.getElementById("popularThree");
clearButton = document.getElementById("clear-button");

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

function onDeleteAll() {
    console.log("Deleted all history");
}

function deleteAllHistory() {
    // let deletingAll = searchHistory.deleteAll();
    deletingAll.then(onDeleteAll);
}

// deleteAllHistory();
;

/*makes enter button trigger search button click*/
document.getElementById("enter-movie")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            document.getElementById("search-button").click();
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
        historyItem.addEventListener("click", function () {
            //reruns both API Calls with history value as the input instead of the text input
            getPoster(historyItem.value);
            ApiCallFunction(historyItem.value);
        })
        savedData.append(historyItem);
    }
}

//second api (poster) grabs oster image and breif summary
function getPoster(film) {

    $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function (json) {
        console.log(json);
        poster.src = "http://image.tmdb.org/t/p/w500/" + json.results[0].poster_path;
        overview.innerHTML = json.results[0].overview;
    })
};

function loadPopular() {

    let api = "https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1";
    fetch(api).then((response) => {
        response.json().then((data) => {
            console.log(data);
            const firstPopular = "https://image.tmdb.org/t/p/w185/" + data.results[0].poster_path;
            // data.results[0].poster_path = ""; // Line no longer needed because it's appended above
            popularMovieOne.src = firstPopular;

            const secondPopular = "https://image.tmdb.org/t/p/w185/" + data.results[1].poster_path;
            popularMovieTwo.src = secondPopular;

            const thirdPopular = "https://image.tmdb.org/t/p/w185/" + data.results[2].poster_path;
            popularMovieThree.src = thirdPopular;
        })
        // console.log(response);
        // response.data.results = "https://image.tmdb.org/t/p/w185/" + results.poster_path;
        // popularMovies.innerHTML = results.poster_path;

    })
}

window.onload = loadPopular;

