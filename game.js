var userGuess;
var movie = "";
var actor = "";
var actorID = 0;
var movieID = 0;
// var actorObj = {};
var movieArray = [];
var actorArray = [];
var playerArray = [];
var actorConfig;
var actorImage = ""
var getConfig = "https://api.themoviedb.org/3/configuration?api_key=20748fb6c1ff9fc0bd764838374d9f26"
var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false&append_to_response=credits"
var filmography = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var Cast = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var confirmImage = false;
// var userGuess=$("#userInput").val().trim().toUpperCase()
var playerGuesses = 3;


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
            console.log(response)
            console.log(response.images.logo_sizes[4])
            actorConfig = response.images.base_url + response.images.logo_sizes[4];
            movieConfig = response.images
            console.log(actorConfig);
            // getActorImage();
            beginGame()

        });

}


function getActorImage() {
    var getActorID = "https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + actor + "&page=1&include_adult=false"

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
            console.log(response)
            if (response.results.length > 0) {
                

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
                actorID = response.results[0].id;
                checkActor();
               
            } {
                playerGuesses--;
            }


        })
    // .catch(function (err) {
    //     //alert error
    //     alert("check network")
    // });


}

function getMovieImage() {
    console.log(movie)
    var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false"

    $.ajax({
        "async": true,
        "crossDomain": true,
        // url: getActorID,
        url: getMovieID,
        // url: getCareer,
        // url: getMovieCast,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (resp) {
            console.log(resp)
            // if (response.results.length > 0) {

            //     console.log(response.results[0].id)
            //     console.log(response.results[0].profile_path)
            //     for (let i = 0; i < response.results.length; i++) {
            //         var object = {}
            //         object["name"] = actor;
            //         object["id"] = response.results[i].id;
            //         object["image"] = response.results[i].profile_path;
            //         movieArray.push(object);
            //         console.log(actorArray)
            //     };
                displayPoster();
                // $("#firstActor").html(`<div class="card bg-dark text-white giphs"><img class="card-img" id= "gifControl" src="${conc}"  alt="Gif"></div>`)
                // $("#notActor").on("click", function () {

            })
            // else {
            //     playerGuess--;
            // }


       
    // .catch(function (err) {
    //     //alert error
    //     alert("check network")
    // });


}

function getFilmography() {
    var filmography = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"

    $.ajax({
        "async": true,
        "crossDomain": true,
        // url: getActorID,
        // url: getMovieID,
        url: filmography,
        // url: getMovieCast,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response)
            // if (actorArray.firebase = null) {
            displayPicture();
            // }
            // else {

            $("#input-description").html("Select Movie")
            $("#submit-answer").attr("data", "movie")
        })
            // if (response.results.length > 0) {

            //     console.log(response)
            //     console.log(response.results[0].profile_path)
            //     for (let i = 0; i < response.results.length; i++) {
            //         var object = {}
            //         object["name"] = actor;
            //         object["id"] = response.results[i].id;
            //         object["image"] = response.results[i].profile_path;
            //         movieArray.push(object);
            //         console.log(actorArray)
            //     };
            //     displayPoster();
            // $("#firstActor").html(`<div class="card bg-dark text-white giphs"><img class="card-img" id= "gifControl" src="${conc}"  alt="Gif"></div>`)
            // $("#notActor").on("click", function () {

        
    }

        // .catch(function (err) {
        //     //alert error
        //     alert("check network")
        // });



function getCast() {
    var cast = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"

    $.ajax({
        "async": true,
        "crossDomain": true,
        // url: getActorID,
        // url: getMovieID,
        // url: filmography,
        url: cast,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response)
            // if (response.results.length > 0) {

            //     console.log(response)
            //     console.log(response.results[0].profile_path)
            //     for (let i = 0; i < response.results.length; i++) {
            //         var object = {}
            //         object["name"] = actor;
            //         object["id"] = response.results[i].id;
            //         object["image"] = response.results[i].profile_path;
            //         movieArray.push(object);
            //         console.log(actorArray)
            //     };
            //     displayPoster();
            // $("#firstActor").html(`<div class="card bg-dark text-white giphs"><img class="card-img" id= "gifControl" src="${conc}"  alt="Gif"></div>`)
            // $("#notActor").on("click", function () {

        })

    // .catch(function (err) {
    //     //alert error
    //     alert("check network")
    // });


}
function displayPicture() {
    conc = actorConfig + actorArray[0].image;
    $("#firstActor").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)

}

function displayPoster() {
    conc = actorConfig + movieArray[0].image;
    $("#posterPic").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)
}


// $.ajax({
//     "async": true,
//     "crossDomain": true,
//     url: getCareer,
//     method: "GET",
//     "headers": {},
//     "data": "{}"
// })




// });
function checkActor() {
    getFilmography()

}

function checkMovie() {

}


function firstChoice() {

    $("#submit-answer").on("click", function (event) {
        event.preventDefault();
        var userGuess = $("#userInput").val().trim()
        console.log(userGuess);
        actor = userGuess;
        getActorImage();
        console.log(actor)
        $("#userInput").val("");


        // if (actor === undefined) {
        //     return 'undefined value!'

        // }
    })
}



function beginGame() {
    // resets all global variables to default values
    resetVariables();
    // sets players turn order
    // setOrderofPlay(); 
    // runs all functions needed for each round 
    // Round(); 
    $("#input-description").html("Select First Actor")
    firstChoice()
}



$("#submit-answer").on("click", function (event) {
    event.preventDefault();
    if ($("submit-answer").attr("data") === "actor") {
        var userGuess = $("#userInput").val().trim()
        console.log(userGuess);
        actor = userGuess;
        getActorImage();
        console.log(actor)
        $("#userInput").val("");
        $("#userInput").html(" ");
        $("submit-answer").attr("data","movie")

        if (actor === undefined) {
            return 'undefined value!'

        }
    }
    else if ($("#submit-answer").attr("data") === "movie") {
        var userGuess = $("#userInput").val().trim()
        console.log(userGuess);
        movie = userGuess;
        getMovieImage();
        console.log(movie)

    }
});

// $("#submit-answer").on("click", function (event) {
//     event.preventDefault();
//     var userGuess = $("#userInput").val().trim()
//     console.log(userGuess);
//     $("#userInput").val("")


//     if (userGuess.includes()) {
//         // replace YEP w/ actor 
//         // $("#input-description").html("Select Movie")
//         // $("#submit-answer").attr("data", "movie")

//     }

// })


// roundOne();
// })


// function roundOne(){
//     var userGuess=$("#userInput").val().trim().toUpperCase()


// if (playerGuesses<=1){
//         // switchplayer
//         alert("no bueno")
// }

// else if(userGuess.includes("ACTOR")){

//    console.log(userGuess); 
//    $("#userInput").val("")
//    roundTwo()
// }
// else{
//     $("#input-description").html("Try Again!")
//     playerGuesses--;
//     // console.log(playerGuesses);    
// }  
// }

// function roundTwo(){
//     $("#input-description").html("Select Movie")
//     playerGuesses=3;

//     console.log(playerGuesses)

// if (playerGuesses<=1){
//         // switchplayer
//         alert("no bueno")
// }

// else if(userGuess.includes("MOVIE")){

//    console.log(userGuess); 
//    $("#userInput").val("")
//    roundThree()
// }
// else{
//     $("#input-description").html("Try Again!")
//     playerGuesses--;
//     console.log(playerGuesses);    
// } 

// }



function resetVariables() {
    movie = "";
    actor = "";
    actorID = 0;
    movieID = 0;
}


getConfigData()




