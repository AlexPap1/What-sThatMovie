let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var apiKeyOmdb = "15c93984";
enterMovie = document.getElementById("enter-movie");
/* OMDb API: http://www.omdbapi.com/?apikey=15c93984&s={movie-title} */

searchButton.addEventListener('click', function () {
    const searchTerm = enterMovie.value.trim();
    //ApiCallFunction(searchTerm);
    console.log(searchTerm);
    history();
    document.getElementById("date").innerHTML = Date();
});

/*makes enter button trigger search button click*/
document.getElementById("enter-city")
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
            weatherData(historyItem.value);
        })
        savedData.append(historyItem);
    }
}