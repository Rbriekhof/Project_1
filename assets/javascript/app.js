// the variables as of yet

var movie = "pulp fiction";
var actor = "John Travolta";
var actorID = 8891;
var movieID = 680;
var actorArray = [];
var movieArray = [];
var getConfig = "https://api.themoviedb.org/3/configuration?api_key=20748fb6c1ff9fc0bd764838374d9f26"
var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false&append_to_response=credits"
var getActorID = "https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + actor + "&page=1&include_adult=false"
var getCareer = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var getMovieCast = "https://api.themoviedb.org/3/movie/" +movieID +"/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var confirmImage = false;


// simple ajax calls 

$.ajax({
    "async": true,
    "crossDomain": true,
    // url: getActorID,
    // url: getConfig,
    // url: getMovieID,
    // url: getCareer,
    url: getMovieCast,
    method: "GET",
    "headers": {},
    "data": "{}"
})
    .then(function (response) {
        console.log(response)
        // let index = 0;
        // $("#firstActor").html(response.results[index].profile_path)
        // $("#notActor").on("click", function () {


        });

        // $.ajax({
        //     "async": true,
        //     "crossDomain": true,
        //     url: getCareer,
        //     method: "GET",
        //     "headers": {},
        //     "data": "{}"
        // })




    // });

