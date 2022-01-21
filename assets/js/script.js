

var object = {

    displayState: {
        titleCard: {
            cardTitle: "JavaScript Quiz",
            bodyParagraph: "Test your knowledge of JavaScript code.",
            footerParagraph: "Press Start or Stop at any time."
        },
        newGame: {
            cardTitle: "The Rules:",
            bodyParagraph: "You get time to answer every question, but answer correctly or you will have time taken away.",
            footerParagraph:"You'll get some feedback here.",
            cardTimeTitle: "",
            cardTimeValue: ""
        },
        
        countDown: {
            cardTitle: "Get Ready.",
            bodyParagraph: "The game is about to begin.",
            footerParagraph: "Go!",
            cardTimeTitle: "get set.",
            cardTimeValue: ""

        },

        gamePlay: {
            cardTitle: "",
            bodyParagraph: "",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:",
            cardTimeValue: ""
        },
        
        resultsAndDetails: {
            cardTitle: "You scored: ",
            bodyParagraph: "",
            footerParagraph: "Enter your initials: ",
            cardTimeTitle: "",
            cardTimeValue: ""
        },

        highScores: {
            cardTitle: "High Scores",
            bodyParagraph: "",
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

var stopBtn = document.querySelector("#stop-btn");
var startBtn = document.querySelector("#start-btn");
var screen = document.querySelector("#displayCard");
var cardTitle = document.querySelector("#cardTitle");
var cardTimeTitle = document.querySelector("#cardTimeTitle");
var cardTimeValue = document.querySelector("#cardTimeValue");
var cardBody = document.querySelector("#cardBody");
var footerParagraph = document.querySelector("#footerParagraph");

var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = 3;

var gameState = "titleCard";
var qCount = 0;
var userScore = 0;
var lastScore = "";
var lastPlayer = "";
var x;
var y;


var populateDisplayStateGamePlay = function () {
    console.log("114")
    cardBody.innerHTML = "";
    
    if (qCount < numberOfQuestions) {

        object.displayState.gamePlay.cardTitle = object.gamePlayContent[qCount].stem;

    var qUl = document.createElement("ul");
    cardBody.appendChild(qUl);
    
        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            var option = document.createElement("li");
            qUl.appendChild(option);
            option.setAttribute("id", "option" + i);
            option.className ="link";
            option.textContent = object.gamePlayContent[qCount].responseOptions[i];
        }        
    }
}


var drawPage = function() {

    if (gameState === "countDown") {
        
        cardBody.textContent = object.displayState[gameState].bodyParagraph;
        x = setInterval(ignitionCountDown, 500, "countDown");

    } else if (gameState === "gamePlay") {

  
        populateDisplayStateGamePlay();

    } else {

    cardBody.textContent = object.displayState[gameState].bodyParagraph;
   
    }

    cardTitle.textContent = object.displayState[gameState].cardTitle;

    cardTimeTitle.textContent = object.displayState[gameState].cardTimeTitle;

    cardTimeValue.textContent = object.displayState[gameState].cardTimeValue;

    footerParagraph.textContent = object.displayState[gameState].footerParagraph;
}

var ignitionCountDown = function(current) {
    
    console.log("var ignitionCountDown 173");
    console.log(current);

    if (timeRemaining === -1) {
        console.log(gameState, current, " <------182-------");
        clearInterval(x);
        gameState = "gamePlay";
        timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
        y = setInterval(gameCountDown, 100, "gamePlay");
        drawPage(gameState); 
    }

    if (current !== gameState) {
        clearInterval(x);
        switch (gameState) {
            case "newGame":
                timeRemaining = 3;
                drawPage(gameState);
                return;
            case "gamePlay":
                console.log(gameState, current, " <------197-------");
                timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
                y = setInterval(gameCountDown, 100, "gamePlay");
                drawPage(gameState);
                return;
        }
        
    }

   cardTimeValue.textContent = timeRemaining;
   timeRemaining --;
}

var gameCountDown = function(current) {

    console.log("var gameCountDown 213");
    console.log(current);

   if (timeRemaining === -1) {
        console.log(gameState, current, " <------217-------");
        clearInterval(y);
        gameState = "resultsAndDetails";
        timeRemaining = 3;
        drawPage(gameState);
        return;
   }

    if (gameState !== "gamePlay") {

        clearInterval(y);
        console.log(" cleared?????");
        switch (gameState) {
            case "titleCard":
                timeRemaining = 3;
                drawPage(gameState);
                break;
                return;
            case "resultsAndDetails":
                console.log(gameState, current, " <------233-------");
                timeRemaining = 3;
                drawPage(gameState);
                return;
                
        }
    
    }
  
   cardTimeValue.textContent = timeRemaining;
   timeRemaining --;

}

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

var startStopBtnHandler = function (event) {
    console.log(event.target, " 266");

    if (event.target.matches("#start-btn")) {
    
        switch(gameState) {
            case "titleCard":
                gameState = "newGame";
                break;
            case "newGame":
                gameState ="countDown";
                break;
            case "countDown":
                gameState ="gamePlay";
            break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to restart without seeing your resuts?")
                if (conf) {
                    gameState ="titleCard";
                }
            break;
            case "resultsAndDetails":
                gameState ="highScores";
            break;
            case "highScores":
                gameState ="newGame";
            break;
            default:
            break;
        }
    } else if (event.target.matches("#stop-btn")) {
        switch(gameState) {
            case "titleCard":
                gameState = "titleCard";
                break;
            case "newGame":
                gameState ="titleCard";
                break;
            case "countDown":
                gameState ="newGame";
            break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to stop now?")
                if (conf) {
                    gameState ="resultsAndDetails";
                }
            break;
            case "resultsAndDetails":
                gameState ="highScores";
            break;
            case "highScores":
                gameState ="titleCard";
            break;
            default:
        } 
    }
    drawPage(gameState);
} 

var gameAdvance = function(mark) {

    console.log(mark, " 316");
    console.log("SUCCESS!!!!!");

    if (mark === -1) {
        console.log("yessss!!!!! 322")
        return;
    }
    else if (mark === -2) {
        gameState = "resultsAndDetails";
        return;
    }

    qCount++;
    if (mark) {
        userScore++;
        object.displayState.gamePlay.footerParagraph = "Your last response was: CORRECT.";
    }
    else {
        timeRemaining -= object.gameDynamics.timeDemerit;
        object.displayState.gamePlay.footerParagraph = "Your last response was: INCORRECT.";
    }
    if (qCount === numberOfQuestions) {
        object.displayState.gamePlay.cardTitle = "You've completed the quiz.";
        object.displayState.gamePlay.bodyParagrah = "Click here to see your results.";
        
    }
}

var responseValidator = function(questionIndex, responseIndex) {

    // get the index number for the correct response from the database and compare it to the user's response
    console.log("partway........ 354")
    var answerCheck = object.gamePlayContent[questionIndex].correctResponse;
    if (answerCheck === responseIndex) {
        return true;
    }
    else {
        return false;
    }

}

var updateHighScores = function(newRecordArray) {
    console.log(object.highScores, " are the highscores to begin with 366");
    console.log(newRecordArray," is the newRecordArray to begin with");
    var tempArray = [];
    var inserted = false;

    for (var i = 0; i < 10; i++) {
        console.log(tempArray, " 372");
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

    console.log(newRecordArray," is the newRecordArray 391");
    console.log(object.highScores, " are the highscores arrays888888888");

}

var userClickResponseHandler = function(event) {
    event.preventDefault();

    // get target element from event
    var targetElId = event.target.getAttribute("id");
    var targetEltext = event.target.textContent;
    console.log("Log Strikes Back!!! -- 403-- ", targetEltext) ;
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

// Function call begins the application
drawPage(gameState);


// User interaction monitors

stopBtn.addEventListener("click", startStopBtnHandler);
startBtn.addEventListener("click", startStopBtnHandler);

screen.addEventListener("click", userClickResponseHandler)

screen.onmouseover = highlightLinkText;
screen.onmouseout = unhighlightLinkText;
