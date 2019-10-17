var userGuess;
var movie = "";
var actor="" ;
var actorID = 0;
var movieID = 0;
var actorObj = {};
var movieArray = [];
var actorArray = [];
var config;
var actorImage = ""
var getConfig = "https://api.themoviedb.org/3/configuration?api_key=20748fb6c1ff9fc0bd764838374d9f26"
var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false&append_to_response=credits"
var getFilmography = "https://api.themoviedb.org/3/person/" + actorID + "/movie_credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var getCast = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US"
var confirmImage = false;
// var userGuess=$("#userInput").val().trim().toUpperCase()
var playerGuesses=3;


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
            if(response.results.length > 0){

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
    
            }{
                playerGuess--;
            }
           

        })
        .catch(function(err){
            //alert error
            alert("check network")
        });


}


function displayPicture() {
    conc = config + actorArray[0].image;
    $("#firstActor").html(`<img class= "gifControl" src="${conc}"  alt="Gif"></div>`)
    
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


function beginGame () {
    // resets all global variables to default values
    resetVariables();
    // sets players turn order
    // setOrderofPlay(); 
    // runs all functions needed for each round 
    // Round(); 
    $("#input-description").html("Select First Actor")
    
}    



$("#submit-answer").on("click", function(event){
    event.preventDefault();
    var userGuess=$("#userInput").val().trim()
    //     var userGuess=$("#userInput").val().trim().toUpperCase()
    console.log(userGuess);    
    actor=userGuess;
    getActorImage();    
    console.log(actor)
    
    
if (actor === undefined){
    return 'undefined value!'
    
}
else{
    alert("{")
}

  
  $("#submit-answer").on("click", function(){
    event.preventDefault();
    var userGuess=$("#userInput").val().trim().toUpperCase()
    console.log(userGuess);
    $("#userInput").val("")

    
if(userGuess.includes("YEP")){
    // replace YEP w/ actor 
    alert("no")
    $("#input-description").html("Select Movie")
}
    
})
  
  
    // roundOne();
})
   

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



  function resetVariables(){
    movie = "";
    actor = "";
    actorID = 0;
    movieID = 0;  
  }


getConfigData()




