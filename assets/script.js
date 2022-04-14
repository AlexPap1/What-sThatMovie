let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var apiKeyOmdb = "15c93984";
enterMovie = document.getElementById("enter-movie");
/* OMDb API: http://www.omdbapi.com/?apikey=15c93984&s={movie-title} */

 searchButton.addEventListener('click', function () {
//     trims spaces for cities with spaces to avoid breaking api url
     const searchTerm = city.value.trim();
    //{function that runs API Call}(searchTerm);
     console.log(searchTerm);
     history();
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
    savedData.textContent = (enterMovie.value);
    console.log(savedData.textContent);
    localStorage.setItem("history", JSON.stringify(savedData.textContent));
};

/*reloads function when clicking city name in history */
savedData.addEventListener("click", function() {
    searchTerm = enterMovie.value;
    //{function that runs API Call}(searchTerm)
}); 