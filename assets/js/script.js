var mainEl = document.querySelector("main");
var footerEl = document.querySelector("footer")
var runGame = false;
var game

var object = {

    displayState: {
        titleCard: ["Would you like to play a game?", "Test your skill against the clock!"],
        newGame: ["You're about to test your knowledge of HTML, CSS and JavaScript.", "You can start or stop at any time."],
        countDown: ["Get ready.", "Get set.", "Go!"],
        gamePlay:["Question: "],
        resultsAndDetails: ["Let's see how you did.", "Great Job!", "Well done.", "Better luck next time."],
        highScores: ["Here are the high scores:"]
    },

    gameState: "titleCard",
    // ["titleCard", "newGame", "countDown", "gamePlay", "resultsAndDetails", "highScores"],

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


  // creates the titleCard format with a div with an h1 and a background image

 
//   mainEl.appendChild(titleCard);

var drawPage = function(current){

    mainEl.removeChild(mainEl.childNodes[0]);  

    var displayCard = document.createElement("div");
    displayCard.className = "display-card";
    displayCard.setAttribute("id", "displayCard");
    
    
    var displayCardHeader = document.createElement("h1")
    displayCard.appendChild(displayCardHeader);
    displayCardHeader.setAttribute("id", "cardHeader");
    displayCardHeader.textContent = object.displayState[current][0];

    var displayCardParagraph = document.createElement("p")
    displayCard.appendChild(displayCardParagraph);
    displayCardParagraph.setAttribute("id", "cardParagraph");
    displayCardParagraph.textContent = object.displayState[current][1];

    var displayCardFooter = document.createElement("p")
    displayCard.appendChild(displayCardFooter);
    displayCardFooter.setAttribute("id", "cardFooter");
    displayCardFooter.textContent = object.displayState[current][2];
       
    // Draw a new state
    mainEl.appendChild(displayCard);


      
    

console.log(object.gameState, " is The object.gameState");


}


var startStop = function (event) {
    console.log(event.target.value);

    var targetEl = event.target;
    var oldState = object.gameState;

    if (targetEl.matches("#start-btn")) {

        switch(object.gameState) {
            case "titleCard":
            
                object.gameState = "newGame";
                console.log(object.gameState);
                break;
            case "newGame":
            
                object.gameState ="countDown";
                console.log(object.gameState);
                break;
            case "countDown":
            
                object.gameState ="gamePlay";
                console.log(object.gameState);
            break;
            case "gamePlay":
            
                object.gameState ="gamePlay";
                console.log(object.gameState);
            break;
            case "resultsAndDetails":
            
                object.gameState ="newGame";
                console.log(object.gameState);
            break;
            case "highScores":
            
                object.gameState ="newGame";
                console.log(object.gameState);
            break;

            default:
            break;

        }
    } else if (targetEl.matches("#stop-btn")) {
        switch(object.gameState) {
            case "titleCard":
            
                object.gameState = "titleCard";
                console.log(object.gameState);
                break;
            case "newGame":
            
                object.gameState ="titleCard";
                console.log(object.gameState);
                break;
            case "countDown":
            
                object.gameState ="newGame";
                console.log(object.gameState);
            break;
            case "gamePlay":
            
                object.gameState ="resultsAndDetails";
                console.log(object.gameState);
            break;
            case "resultsAndDetails":
            
                object.gameState ="highScores";
                console.log(object.gameState);
            break;
            case "highScores":
            
                object.gameState ="titleCard";
                console.log(object.gameState);
            break;

            default:

        } 
    }
    
    if (oldState !== object.gameState){
        drawPage(object.gameState)
    } 
}

// drawPage(object.gameState)
// drawPage(titleCard);
console.log(mainEl);
// function listening for start/stop
footerEl.addEventListener("click", startStop);