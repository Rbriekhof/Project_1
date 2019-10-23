function displayMoviePoster() {

    var getMovieID = "https://api.themoviedb.org/3/search/movie?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=" + movie + "&page=1&include_adult=false&append_to_response=credits"
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=77f524c2";

    var multipleURL = [queryURL, getMovieID];

for(i=0; i<multipleURL.length; i++){
  $.ajax({
      url: multipleURL[i],
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.Poster)
      var imgURL = response.Poster;
      $("#posterPic").html(`<img class= "gifControl" src="${imgURL}"  alt="Gif"></div>`);
    });
  
}





   