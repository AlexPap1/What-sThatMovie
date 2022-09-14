# What's-That-Movie  

### Description

This program will function to supply information on the latest movies to its user base using info from OMDB and Rotten Tomatos API's.  

#

### User Story

AS A movie watcher I WANT TO get information and reviews on the current selections of movies based on my interests SO THAT I can ensure the movie I see would be to my liking  

#

### Issues

wireframe sketch  
link API's  
rotten tomatos  
review  
score  
OMDB  
year  
IMDB link  
Put them inside of a search menu of some kind  
return values  

Challenges
---------------------------------------------------------------------------------------------------------------
It was challenging to make the css appropriate for both a desktop and mobile experience. We went with a culmnn-based, vertical format which made it easy for mobile users to scroll.
<br />
We also needed to make sure the page respoded to user input. This meant adding the search input value to the api calls as well as rerunning the function upon clicking the hisotry calls.
<br />
It was (and still can be) difficult for the two api's to cooperate together. For example: when searching 'Batman', the OMDB API returns info for Christopher Nolan's 'Batman Begins', whereas the poster API returns info for 2022's 'The Batman'. There are some instances where the user must be speicifc as well, such as searching for the movie 'ET' will not work. The user must type 'ET the Extra Terrestrial'.

Successes
---------------------------------------------------------------------------------------------------------------
We were able to succesfully call both API's at the same time and return similart results. We obtained the relevent information we were anticipating to get from these calls (title, year, etc.). We were also successful in making the project responsive and visually appealing using a CSS framkework other than bootstrap. THe page is interactive and accepts user input while also utilizing local storage functions. We did not use any widow alerts or modals.

Future Development
---------------------------------------------------------------------------------------------------------------
In the future, we would like to implement a way to find where users can watch the movies searched, such as through streaming services like Netlix and HBO Max. We would also like for a way to find the MPAA movie rating or genre, so the user has a better idea of the type of movie beign searched.

Links
---------------------------------------------------------------------------------------------------------------
GitHub : https://github.com/AlexPap1/Whats-That-Movie
<br />
Pages : https://alexpap1.github.io/Whats-That-Movie/
