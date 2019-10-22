var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://omrivolk-autocomplete-v1.p.rapidapi.com/complete?s=un",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omrivolk-autocomplete-v1.p.rapidapi.com",
		"x-rapidapi-key": "074efd1b6emsh7a8c557991ca4fcp1feab9jsn254d2dbcf47a"
	}
}

$.ajax(settings).done(function (response) {
	console.log("this")
	console.log(response);

});
