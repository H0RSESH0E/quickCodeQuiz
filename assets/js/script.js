var mainEl = document.querySelector("main");
var runGame = false;

var object = {

    displayState: {
        titleCard: ["Would you like to play a game?", "Test your skill against the clock!"],
        newGame: ["You're about to test your knowledge of HTML, CSS and JavaScript.", "You can start or stop at any time."],
        countDown: ["Get ready.", "Get set.", "Go!"],
        gamePlay:["Question: "],
        resultsAndDetails: ["Let's see how you did.", "Great Job!", "Well done.", "Better luck next time."],
        highScores: ["Here are the high scores:"]
    },

    gameState: "title-card",
    // ["title-card", "new-game", "count-down", "game-play", "results-details", "high-scores"],

    gameDynamics: {
        timePerQuestion: 15,
        timeDemerit: 20,
        
    },
    
    highScores: ["DB", 0],

    gamePlayContent: [
        {
            stem: "",
            responseOptions: [],
            correctResponse: "",
            feedback: ""

        }

    ]    
    
}




// display function appends different html structures and content depending on the displayState object found in the object
    //switch between display states




// 

var drawPage = function(state){

}


var startStop = function (event) {
    console.log(event.target.value);

    var targetEl = event.target;

    if (targetEl.matches("#start-btn")) {

        switch(object.gameState) {
            case "title-card":
            
                object.gameState = "new-game";
                console.log(object.gameState);
                break;
            case "new-game":
            
                object.gameState ="count-down";
                console.log(object.gameState);
                break;
            case "count-down":
            
                object.gameState ="game-play";
                console.log(object.gameState);
            break;
            case "game-play":
            
                object.gameState ="game-play";
                console.log(object.gameState);
            break;
            case "results-details":
            
                object.gameState ="new-game";
                console.log(object.gameState);
            break;
            case "high-scores":
            
                object.gameState ="new-game";
                console.log(object.gameState);
            break;

            default:
            break;

        }
    } else if (targetEl.matches("#stop-btn")) {
        switch(object.gameState) {
            case "title-card":
            
                object.gameState = "title-card";
                console.log(object.gameState);
                break;
            case "new-game":
            
                object.gameState ="title-card";
                console.log(object.gameState);
                break;
            case "count-down":
            
                object.gameState ="new-game";
                console.log(object.gameState);
            break;
            case "game-play":
            
                object.gameState ="results-details";
                console.log(object.gameState);
            break;
            case "results-details":
            
                object.gameState ="high-scores";
                console.log(object.gameState);
            break;
            case "high-scores":
            
                object.gameState ="title-card";
                console.log(object.gameState);
            break;

            default:

        } 
    }
}


// drawPage(titleCard);
console.log(mainEl);
// function listening for start/stop
mainEl.addEventListener("click", startStop);