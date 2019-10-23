// Your web app's Firebase configuration
var userGuess;
var movie = "";
var actor = "";
var actorID = 0;
var movieID = 0;
// var actorObj = {};
var movieArray = [];
var filmographyArray = [];
var actorArray = [];
var playerArray = [];
var guessesArray = [];

var actorConfig;
var actorImage = ""
var getConfig = "https://api.themoviedb.org/3/configuration?api_key=20748fb6c1ff9fc0bd764838374d9f26"
var confirmImage = false;
var playerGuesses = 3;
var turn = 0

var strikes = 0


// var playerArray=[player1Object, player2Object, player3Object, player4Object];
// if (player1Object.strikes==3){
// var nextPlayer;
// }




// ajax call for base URL for all tmdb API calls *************************************************
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
            // movieConfig = response.images no longer used 
            console.log(actorConfig);
            // getActorImage();
            beginGame()

        });

}

/************************************************logic for first actor picks**************/

function getFirstImage() {
    var getActorID = "https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + actor + "&page=1&include_adult=false"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getActorID,
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
                getFirstFilmography();

            }


        })

}

function getActorImage() {
    var getActorID = "https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + actor + "&page=1&include_adult=false"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getActorID,
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


                console.log(response.results[0].id)
                console.log(response.results[0].profile_path)
                var object = {}
                object["name"] = actor;
                object["id"] = response.results[0].id;
                object["image"] = response.results[0].profile_path;
                actorArray.push(object);
                console.log(actorArray)
                guessesArray.push(actor)
            };
            actorID = response.results[0].id;
            getFirstFilmography();

        })


}

function getFirstFilmography() {
    var filmography = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getMovieID,
        url: filmography,

        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (resp) {
            console.log(resp)

            displayPoster();

      .then(function (response) {
            console.log(response)
            for (i = 0; i < response.cast.length; i++) {
                filmographyArray[i] = response.cast[i].id
            }
            console.log(filmographyArray)
            displayFirstPicture();
            $("#input-description").html("Select Movie");

        })


        })

}

function getFirstFilmography() {
    var filmography = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"

function displayFirstPicture() {
    conc = actorConfig + actorArray[turn].image;
    $("#firstActor").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)

}

/*************************************************handles user guess for actor *************************/

function getActorImage() {
    var getActorID = "https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + actor + "&page=1&include_adult=false"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getActorID,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response)
            // if (actorArray.firebase = null) {
            displayFirst();
            // }
            // else {

            $("#input-description").html("Select Movie")
            $("#submit-answer").attr("data", "movie")
        })

            if (response.results.length > 0) {


                console.log(response.results[0].id)
                console.log(response.results[0].profile_path)
                var object = {};
                object["name"] = actor;
                object["id"] = response.results[0].id;
                object["image"] = response.results[0].profile_path;
                actorArray.push(object);
                console.log(actorArray);
                actorID = response.results[0].id;
                getFilmography()
            };


}


        })


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
        url: filmography,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response)
            displayPicture();
            for (i = 0; i < response.cast.length; i++) {
                filmographyArray[i] = response.cast[i].id
            }
            if (movieArray.includes(actorID)) {
                checkActor();
            }
            else {
                M.toast({ html: 'You have A Strike' })
                strikes++
            }

            // $("#input-description").html("Select Movie")
            // $("#submit-answer").attr("data", "movie")
        })



}


function getCast() {
    var cast = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: cast,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response)
        })



}
function displayFirst() {
    conc = actorConfig + actorArray[0].image;
    $("#firstActor").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)
function checkActor() {
    if (turn === 0) {
        turn++
        movieArray = [];
    guessesArray.push(actor)
    displayPicture();
    setTimeout(updateBoard, 1000 * 3);
      
    }
    else{
        movieArray = [];
    guessesArray.push(actor)
    displayPicture();
    setTimeout(updateBoard, 1000 * 3);
       
    }
}
function updateBoard() {


    
    $("#userInput").val(" ");
    $("#submit-answer").attr("data", "movie");
    $("#input-description").html("Select Movie")
    displayFirstPicture();
    $("#secondActor").empty();
    $("#posterPic").empty();
    turn++;
}


function displayPicture() {
    conc = actorConfig + actorArray[turn].image;
    $("#secondActor").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)

}
function displayPicture() {
    conc = actorConfig + actorArray[0].image;
    $("#secondActor").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)

}

function displayPoster() {


    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=77f524c2";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var imgURL = response.Poster;
        $("#posterPic").html(`<img class= "gifControl" src="${imgURL}"  alt="Gif"></div>`);

    });
/*********************************************handles user guess for movie***************************/


function getMovieImage() {
    console.log(movie)
    var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: getMovieID,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (resp) {
            console.log("getmovieimage")
            console.log(resp)
            movieID = resp.results[0].id
            getCast();
            console.log(movieID)

        })


}



function getCast() {
    var cast = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"

    $.ajax({
        "async": true,
        "crossDomain": true,
        url: cast,
        method: "GET",
        "headers": {},
        "data": "{}"
    })
        .then(function (response) {
            console.log(response)
            for (i = 0; i < response.cast.length; i++) {
                movieArray[i] = response.cast[i].id
            }
            if (filmographyArray.includes(movieID)) {
                checkMovie();
            }
            else {
                M.toast({ html: 'You have A Strike' })
                strikes++
            }


function checkActor() {
    getFilmography()


        })


}

function checkMovie() {
    filmographyArray = [];
    guessesArray.push(movie);
    displayPoster();
    $("#userInput").val(" ");
    $("#input-description").html("Select Next Actor")
    $("#submit-answer").attr("data", "actor")

}


function displayPoster() {
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=77f524c2";

    $("#submit-answer").on("click", function (event) {
        event.preventDefault();
        var userGuess = $("#userInput").val().trim()
        console.log(userGuess);
        actor = userGuess;
        getFirstImage();
        console.log(actor)
        $("#userInput").val("");
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imgURL = response.Poster;
        $("#posterPic").html(`<img class= "gifControl" src="${imgURL}"  alt="Gif"></div>`);

    });
}







/**********************************Game starting********************* */

function beginGame() {
    // resets all global variables to default values
    resetVariables();
    // sets players turn order
    // setOrderofPlay(); 
    // runs all functions needed for each round 
    // Round(); 
    $("#input-description").html("Select First Actor")
    $("#submit-answer").attr("data", "first")
}


$("#submit-answer").on("click", function (event) {
    event.preventDefault();
    if ($("#submit-answer").attr("data") === "actor") {
        var userGuess = $("#userInput").val().trim().toLowerCase()
        console.log(userGuess);
        actor = userGuess;
        getActorImage();
        console.log(actor)
        $("#userInput").val("");
        $("#userInput").html(" ");
        $("#submit-answer").attr("data", "movie")
        checkActorGuesses();

        if (actor === undefined) {
            return 'undefined value!'

        }
    }
    else if ($("#submit-answer").attr("data") === "movie") {
        var userGuess = $("#userInput").val().trim().toLowerCase()
        console.log(userGuess);
        movie = userGuess;
        checkMovieGuesses();


        if (movie === undefined) {
            return 'undefined value!'

        }
    }

    if ($("#submit-answer").attr("data") === "first") {
        var userGuess = $("#userInput").val().trim().toLowerCase()
        actor = userGuess;
        getFirstImage();
        $("#userInput").val(" ");
        $("#submit-answer").attr("data", "movie");

        if (actor === undefined) {
            return 'undefined value!'

        }
    }
});


function checkActorGuesses() {
    if (guessesArray.includes(actor)) {
        $("#userInput").val(" ");
        M.toast({ html: 'Actor already taken' })
    }
    else {
        getActorImage();
        console.log(actor)
    }
}
function checkMovieGuesses() {
    if (guessesArray.includes(movie)) {
        $("#userInput").val(" ");
        M.toast({ html: 'Movie already taken' })
    }
    else {
        getMovieImage();
        console.log(movie)
        $("#userInput").val(" ");
        $("#input-description").html("Select Next Actor");
        $("submit-answer").attr("data", "actor")
    }
}


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
    player1Object.strikes=0;
    player2Object.strikes=0;
    player3Object.strikes=0;
    player4Object.strikes=0;
}


getConfigData()

