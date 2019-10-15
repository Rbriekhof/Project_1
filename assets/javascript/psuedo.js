/* 

The variables and the terms i used in this psuedo code are probably not the ones we will be using



//   //**************functions******************** */  
// beginGame () {

//      resetVariables ();resets all global variables to default values
//      setOrderofPlay(); sets players turn order
//      Round(); runs all functions needed for each round 

// }


// round() {
//    /************* decides if first player need to answer an additional question *******************/
//     if firstGuess = false then {
//         askForFirstActor(); asks for first actor 
//     }
//     else{
//     readyPlayer1();sets variable for index of players to 0 
//     Turn();activates user input controls and increments playerindex (i++)
//     turnTimer(?); do we need this ? reset after each guess? 

// }

// };



// /**************  turn logic **********/
// turn() {
//    getcurrentplayer() // use index of player and should check if we have hit the end of array and start new round if so 
//     getMovieID() 
    

//  .then
//  checkcast()// keeps us from checking the result before we get it 
  

// }


// checkcast(){
//     if(baseActorID  === movie cast index [i]) { 
//     turnpart2()
//     };
//     else strike ()
// }




// turnpart2() {
//     get actorID()



//     .then 
//     checkFilmography()
// }

// checkfilmography(){
//     if(currentMovieID  === getFilmography [i]) { 
//     turn();
//     };
//     else strike ()
// }

// strike () {
//   strikevaluevariable ++ 
//   playerindex ++ 
//   turn(); 

// }


// clickevents we probably need 

// $(document.body).on("click", "#theactorsubmitbutton", getactorID  )
// $(document.body).on("click", "#themoviesubmitbutton", getmovieID  )
// $(document.body).on("click", "#theactorconfirmbutton", getfilmography )
// $(document.body).on("click", "#themoviesubmitbutton", getcast )

// remember we need to call functions after the .then to prevent false negatives, 
