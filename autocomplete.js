$(function() {
    
    $( "#userInput" ).autocomplete({
       source: function( request, response ) {
        $.ajax( {
            url: 'http://www.omdbapi.com?s='+ request.term +'&apikey=4a0c69bd',
            //url: 'https://api.themoviedb.org/3/search/person?api_key=20748fb6c1ff9fc0bd764838374d9f26&language=en-US&query=' + request.term + '&page=1&include_adult=false',
            dataType: 'json',
            data: {
                movie:request.term
            },
            
            success: function( data ) {
                var movies = [];
                jQuery.each(data.Search, function(index, item) {
                    var imdb = item.imdbID;
                    
                    //var imdb = item.name;
                    console.log(imdb);
                    $.ajax({
                        url: 'http://www.omdbapi.com?i='+ imdb +'&apikey=4a0c69bd',
                        dataType: 'json',
                        data: {
                            movieDetail:imdb
                        },
                        success: function (data) {
                            movies.push(data); 
                            response(movies.slice(0, 10));
                        }
                    });
                });
            }
        });
    },
    });


    $('#userInput').data('ui-autocomplete')._renderItem = function( ul, item ){

        var re = new RegExp("^" + this.term, "gi");
        console.log(re);
        var t = item.Title.replace(re,"<span style='font-weight: bold;text-decoration: underline;text-transform: capitalize;'>" + this.term + "</span>");
        console.log(t);
        var $li = $('<li>');

        $li.html(
            '<span class="username">' + t + '</span>' +
            '<div style="clear:both;"></div>'
        );
        return $li.appendTo(ul);
    };


});