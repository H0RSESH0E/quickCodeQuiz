

var object = {

    displayState: {
        titleCard: {
            cardTitle: "JavaScript Quiz",
            bodyParagrah: "Test your knowledge of JavaScript code.",
            footerParagraph: "Press Start or Stop at any time."
        },
        newGame: {
            cardTitle: "The Rules:",
            bodyParagrah: "You get time to answer every question, but answer correctly or you will have time taken away.",
            footerParagraph:"You will get feedback here."
        },
        
        countDown: {
            cardTitle: "Get Ready!",
            bodyParagrah: "The game is about to begin.",
            footerParagraph: "... "
        },

        gamePlay: {
            cardTitle: "",
            bodyParagrah: "",
            footerParagraph: ""
        },
        
        resultsAndDetails: {
            cardTitle: "You scored: ",
            bodyParagrah: "",
            footerParagraph: "Enter your initials: "
        },

        highScores: {
            cardTitle: "High Scores",
            bodyParagrah: "",
            footerParagraph: "Sometimes the best move is not to play."
        },
    },

    gameDynamics: {
        timePerQuestion: 15,
        timeDemerit: 20,
    },
    
    highScores: [
        
        ["DB", 100],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0],
        ["AAA", 0]

    ],

    gamePlayContent: [
        {
            stem: "Which HTML tag should wrap around your JavaScript code?",
            responseOptions: ["<scripting>", "javascript", "<js>", "<script>"],
            correctResponse: "3",
            feedback: ""

        },
        {
            stem: "How do you create a function in JavaScript?",
            responseOptions: ["function myFunction()", "function: myFunction()", "functioning()", "function = myFunction()"],
            correctResponse: "3",
            feedback: ""

        },
        {
            stem: "What does HTML stand for?",
            responseOptions: ["How Tall is Mom's Lily", "Hyper Tax Murky Luggage", "Hypertext Markup Language", "High Tech Modern Linguistics"],
            correctResponse: "2",
            feedback: ""

        }

    ]    
    
}

var buttons = document.querySelector("#start-stop-buttons");
var screen = document.querySelector("#displayCard");
var cardTitle = document.querySelector("#cardTitle");
var cardTimeTitle = document.querySelector("#cardTimeTitle");
var cardTimeValue = document.querySelector("#cardTimeValue");
var cardBody = document.querySelector("#cardBody");
var footerParagraph = document.querySelector("#footerParagraph");

var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;

var gameState = "titleCard";
var qCount = 0;
var userScore = 0;
var lastScore = "";
var lastPlayer = "";
var x;


var drawPage = function() {
   
    cardTitle.textContent = object.displayState[gameState].cardTitle;

    cardTimeTitle.textContent = object.displayState[gameState].cardTimeTitle;

    cardTimeValue.textContent = object.displayState[gameState].cardTimeValue;

    cardBody.textContent = object.displayState[gameState].cardBody;

    footerParagraph.textContent = object.displayState[gameState].footerParagraph;

}


var myCountDownFunction = function() {

    console.log("I'm running");
    console.log(timeRemaining);
    cardTimeValue.textContent = timeRemaining;
    timeRemaining--;
    

};



var createHighScoresDivs = function() {

    var divDisplay = document.createElement("div");
    cardBody.appendChild(divDisplay);

    var column0 = document.createElement("div");
    divDisplay.appendChild(column0);
    var column1 = document.createElement("div");
    divDisplay.appendChild(column1);

    for (var d = 0; d < 2; d++) {

        for (var i = 0; i < 10; i++) {

            switch (d) {
                case 0:
                    var div = document.createElement("div");
                    column0.appendChild(div);
                    div.textContent = object.highScores[i][d];
                    div.className = "users-initials"
                break;
                case 1:
                    var div = document.createElement("div");
                    column0.appendChild(div);
                    div.textContent = object.highScores[i][d];
                    div.className = "users-scores"
            }
        }
    }
}

var startStop = function (event) {
    console.log(event.target);

    if (event.target.matches("#start-btn")) {
    
        switch(gameState) {
            case "titleCard":
            
                gameState = "newGame";
                console.log(gameState);
                break;
            case "newGame":
            
                gameState ="countDown";
                console.log(gameState);
                timeRemaining = 3;
                setInterval(myCountDownFunction,1000)
                break;
            case "countDown":
                clearInterval(myCountDownFunction);
                // timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
                gameState ="gamePlay";
                console.log(gameState);
            break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to start again?")
                if (conf) {
                    gameState ="titleCard";
                    console.log(gameState, "9999999");
                    clearInterval(myCountDownFunction);
                }
            break;
            case "resultsAndDetails":
            
                gameState ="highScores";
                qCount = 0;
                console.log(gameState);
            break;
            case "highScores":
            
                gameState ="newGame";
                qCount = 0;
                console.log(gameState);
            break;

            default:
            break;

        }
    } else if (event.target.matches("#stop-btn")) {
        switch(gameState) {
            case "titleCard":
            
                gameState = "titleCard";
                console.log(gameState);
                break;
            case "newGame":
            
                gameState ="titleCard";
                console.log(gameState);
                break;
            case "countDown":
            
                gameState ="newGame";
                console.log(gameState);
            break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to stop now?")
                if (conf) {
                    gameState ="resultsAndDetails";
                    console.log(gameState);
                    clearInterval(myCountDownFunction);
                }
                
            break;
            case "resultsAndDetails":
            
                gameState ="highScores";
                console.log(gameState);
            break;
            case "highScores":
            
                gameState ="titleCard";
                qCount = 0;
                console.log(gameState);
            break;

            default:

        } 
    }
    
    
    drawPage(gameState)
} 


var gameAdvance = function(mark) {

    console.log(mark);
    console.log("SUCCESS!!!!!");
    qCount++;
    if (mark) {
        userScore++;
        object.displayState.gamePlay[2] = "Your last response was: CORRECT.";
    }
    else {
        timeRemaining -= object.gameDynamics.timeDemerit;
        object.displayState.gamePlay[2] = "Your last response was: INCORRECT.";
    }
    if (qCount === numberOfQuestions) {
        object.displayState.gamePlay[0] = "You've completed the quiz.";
        object.displayState.gamePlay[1] = "Click here to see your results.";
        
    }
    drawPage(object.gameState)

}

var responseValidator = function(questionIndex, responseIndex) {

    // get the index number for the correct response from the database and compare it to the user's response
    console.log("partway........")
    var answerCheck = object.gamePlayContent[questionIndex].correctResponse;
    if (answerCheck === responseIndex) {
        return true;
    }
    else {
        return false;
    }

}

var updateHighScores = function(newRecordArray) {
    console.log(object.highScores, " are the highscores to begin with");
    console.log(newRecordArray," is the newRecordArray to begin with");
    var tempArray = [];
    var inserted = false;

    for (var i = 0; i < 10; i++) {
        console.log(tempArray);
        console.log(i, " loops so far");
        
        if (inserted) {
            tempArray.push(object.highScores[i]);
        }
        else {
            
            if (newRecordArray[1] >= object.highScores[i][1]) {
                tempArray.push(newRecordArray);
                tempArray.push(object.highScores[i]);
                inserted = true;
            };
        };
    };

    object.highScores = tempArray;
    userScore = 0;

    console.log(newRecordArray," is the newRecordArray");
    console.log(object.highScores, " are the highscores arrays888888888");

}


var quizResponseHandler = function(event) {
    event.preventDefault();

    // get target element from event
    var targetElId = event.target.getAttribute("id");
    var targetEltext = event.target.textContent;
    console.log("Log Strikes Back!!! ", targetEltext) ;
    console.log("I'm alive!", targetElId);

    switch (targetElId) {
        case "option0":
            console.log("option00000", targetElId);
            gameAdvance(responseValidator(qCount, "0"));
            break;
        case "option1":
            console.log("option111111", targetElId);
            gameAdvance(responseValidator(qCount, "1"));
            break;
        case "option2":
            console.log("option222222", targetElId);
            gameAdvance(responseValidator(qCount, "2"));
            break;
        case "option3":
            console.log("option33333", targetElId);
            gameAdvance(responseValidator(qCount, "3"));
            break;
        default:
        break;
    }
    console.log(object.gameState);

    if (targetEltext === "Click here to see your results.") {
        console.log(object.gameState, "Yeah Hoo!");
        object.gameState = "resultsAndDetails";
        drawPage(object.gameState);
        return;
    }
    console.log(targetElId, "Ba 999");
    console.log(targetEltext);
  
    if (targetEltext === "Click here to save and see the high scores.") {
    }

    if (targetElId === "initials-input") {
       // Nothing doing
        console.log("Do Nothing!!")
    }
    else if (object.gameState === "resultsAndDetails") {
        console.log(object.gameState, "Yeeee Haw!");
        lastPlayer = document.querySelector("input").value.toUpperCase();
        console.log(lastPlayer);
        var newRecordArray = [lastPlayer, userScore];
        updateHighScores (newRecordArray);
        console.log("BA BA Ba 999 !!!!")
        object.gameState = "highScores";
        drawPage(object.gameState);
    }
}


var highlightLinkText = function (event) {

    var targetElement = event.target;
  
    
    targetElement.classList.toggle("highlight");
   
}

var unhighlightLinkText = function (event) {
    var targetElement = event.target;
   
    
    targetElement.classList.toggle("highlight");
    

}

drawPage(gameState);

buttons.addEventListener("click", startStop);

screen.addEventListener("click", quizResponseHandler)

screen.onmouseover = highlightLinkText;
screen.onmouseout = unhighlightLinkText;
