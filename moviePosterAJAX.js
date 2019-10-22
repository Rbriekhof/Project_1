function displayMoviePoster() {

    var movie = ""
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=77f524c2";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var imgURL = response.Poster;
      $("#posterPic").html(`<img class= "gifControl" src="${imgURL}"  alt="Gif"></div>`);
 
    });

  }