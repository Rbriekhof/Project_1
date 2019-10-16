
var userGuess;


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







