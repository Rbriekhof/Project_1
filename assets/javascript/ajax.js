// the variables as of yet

var movie = "pulp fiction";
var actor = "will smith";
var actorID = 8891;
var movieID = 680;
var actorArray = [];
var actorObj = {};
var movieArray = [];
var config;
var actorImage = ""
var getConfig = "https://api.themoviedb.org/3/configuration?api_key=20748fb6c1ff9fc0bd764838374d9f26"
var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false&append_to_response=credits"
var getActorID = "https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + actor + "&page=1&include_adult=false"
var getFilmography = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var getCast = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var confirmImage = false;


// ajax call for base URL for API 
function getConfigData() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getConfig,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response.images.base_url)
            console.log(response.images.logo_sizes[4])
            config = response.images.base_url + response.images.logo_sizes[4];
            console.log(config);
            getActorImage();

        });

}


function getActorImage() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getActorID,
        // url: getMovieID,
        // url: getCareer,
        // url: getMovieCast,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response.results[0].id)
            console.log(response.results[0].profile_path)
            for (let i = 0; i < response.results.length; i++) {
                var object = {}
                object["name"] = actor;
                object["id"] = response.results[i].id;
                object["image"] = response.results[i].profile_path;
                actorArray.push(object);
                console.log(actorArray)
            };
            displayPicture();
            // $("#firstActor").html(`<div class="card bg-dark text-white giphs"><img class="card-img" id= "gifControl" src="${conc}"  alt="Gif"></div>`)
            // $("#notActor").on("click", function () {


        });


}




function displayPicture() {
    conc = config + actorArray[0].image;
    $("#firstActor").html(`<div class="card bg-dark text-white giphs"><img class="card-img" id= "gifControl" src="${conc}"  alt="Gif"></div>`)
}
getConfigData();
        // $.ajax({
        //     "async": true,
        //     "crossDomain": true,
        //     url: getCareer,
        //     method: "GET",
        //     "headers": {},
        //     "data": "{}"
        // })




    // });

