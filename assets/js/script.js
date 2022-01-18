var mainEl = document.querySelector("main");
var footerEl = document.querySelector("footer")
var runGame = false;
var game
var qCount = 0;
var object = {

    displayState: {
        titleCard: ["Would you like to play a game?", "Test your skill against the clock!", "place holder titleCard"],
        newGame: ["You're about to test your knowledge of HTML, CSS and JavaScript.", "You can start or stop at any time."],
        countDown: ["Get ready.", "Get set.", "Go!"],
        gamePlay:["Question: ", "Select:", "Your last response was:"],
        resultsAndDetails: ["Let's see how you did.", "Great Job!", "Well done.", "Better luck next time."],
        highScores: ["Here are the high scores:"]
    },

    // gameState values must equal the display state array names
    gameState: "titleCard",

    gameDynamics: {
        timePerQuestion: 15,
        timeDemerit: 20,
        
    },
    
    highScores: ["DB", 0],

    gamePlayContent: [
        {
            stem: "",
            responseOptions: ["a", "b", "c"],
            correctResponse: "",
            feedback: ""

        },
        {
            stem: "",
            responseOptions: ["A", "B", "C", "D"],
            correctResponse: "",
            feedback: ""

        },
        {
            stem: "",
            responseOptions: ["1", "2", "3", "may the force be with you"],
            correctResponse: "",
            feedback: ""

        }

    ]    
    
}


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

    // if the display card is formatted for the game

    if (current === "gamePlay") {
        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            var displayCardList = document.createElement("ul");
            displayCardParagraph.appendChild(displayCardList);
            var displayCardQuestions = document.createElement("li");
            displayCardList.appendChild(displayCardQuestions);
            displayCardQuestions.setAttribute("id", "option" + i);
            displayCardQuestions.textContent = object.gamePlayContent[qCount].responseOptions[i];
        
    
        }


    }

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