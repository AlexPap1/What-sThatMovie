let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var apiKeyOmdb = "15c93984";
enterMovie = document.getElementById("enter-movie");
searchButton = document.getElementById("search-button");
/* OMDb API: http://www.omdbapi.com/?apikey=15c93984&s={movie-title} */
poster = document.getElementById("poster");

function ApiCallFunction() {
    console.log(enterMovie.value);
};

searchButton.addEventListener('click', function () {
    const searchTerm = enterMovie.value.trim();
    ApiCallFunction(searchTerm);
    console.log(searchTerm);
    history();
    getPoster();
});

/*makes enter button trigger search button click*/
document.getElementById("enter-movie")
    .addEventListener("keyup", function(e) {
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
        historyItem.addEventListener("click", function() {
            ApiCallFunction(historyItem.value);
        })
        savedData.append(historyItem);
    }
}

//console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"));

function getPoster(posterImage) {
    let api = "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + posterImage + "&callback=?";
    fetch(api).then((res) => {

        res.json().then((data) => {
    
            console.log(data);
            poster.src = "http://image.tmdb.org/t/p/w500/" + data.json.results[0].poster_path + ".jpg";
            console.log(poster.src);
        })
    })
};

