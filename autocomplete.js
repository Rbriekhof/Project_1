$(function() {
    
    $( "#userInput" ).autocomplete({
       source: function( request, response ) {
        $.ajax( {
            url: 'http://www.omdbapi.com?s='+ request.term +'&apikey=4a0c69bd',
            dataType: 'json',
            data: {
                movie:request.term
            },
            success: function( data ) {
                var movies = [];
                jQuery.each(data.Search, function(index, item) {
                    var imdb = item.imdbID;
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
        var t = item.Title.replace(re,"<span style='font-weight: bold;text-decoration: underline;text-transform: capitalize;'>" + this.term + "</span>");

        var $li = $('<li>');

        $li.html(
            '<span class="username">' + t + '</span>' +
            '<div style="clear:both;"></div>'
        );
        return $li.appendTo(ul);
    };


});