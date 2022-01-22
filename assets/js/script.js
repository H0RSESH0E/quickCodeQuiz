

var object = {

    displayState: {
        titleCard: {
            cardTitle: "JavaScript Quiz",
            bodyParagraph: "Test your knowledge of JavaScript code.",
            footerParagraph: "Press Start or Stop at any time.",
            cardTimeTitle: "",
            cardTimeValue: ""
        },
        newGame: {
            cardTitle: "The Rules:",
            bodyParagraph: "You get time to answer every question, but answer correctly or you will have time taken away.",
            footerParagraph: "You'll get some feedback here.",
            cardTimeTitle: "",
            cardTimeValue: ""
        },

        countDown: {
            cardTitle: "Are you ready?",
            bodyParagraph: "",
            footerParagraph: "",
            cardTimeTitle: "",
            cardTimeValue: ""

        },

        gamePlay: {
            cardTitle: "",
            bodyParagraph: "Select your response: ",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:",
            cardTimeValue: ""
        },

        resultsAndDetails: {
            cardTitle: "You scored: ",
            bodyParagraph: "Results",
            footerParagraph: "Enter your initials: ",
            cardTimeTitle: "",
            cardTimeValue: ""
        },

        highScores: {
            cardTitle: "High Scores",
            bodyParagraph: "",
            footerParagraph: "Sometimes the best move is not to play.",
            cardTimeTitle: "",
            cardTimeValue: ""
        },
    },

    gameDynamics: {
        timePerQuestion: 60,
        timeDemerit: 15,
        gameClockSpeed: 200,
        countDownLength: 5,
        pointsForCorrect: 5
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
var cardBodyParagraph = document.querySelector("#bodyParagraph");
var cardUl = document.querySelector("#cardUl");
var footerParagraph = document.querySelector("#footerParagraph");

var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = object.gameDynamics.countDownLength;
object.displayState.countDown.cardTimeValue = timeRemaining;

var startTime = Date.now();
var gameState = "titleCard";
var qCount = 0;
var userScore = 0;
var lastScore = "";
var lastPlayer = "";
var x;
var y;
var then;
var now;
var cycle;
var speed = object.gameDynamics.gameClockSpeed;

var populateCardUl = function () {
    // // debugger;
    cardUl.innerHTML = "";


    if (qCount < numberOfQuestions) {

        object.displayState.gamePlay.cardTitle = object.gamePlayContent[qCount].stem;

        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            var option = document.createElement("li");
            cardUl.appendChild(option);
            option.setAttribute("id", "option" + i);
            option.className = "link";
            option.textContent = object.gamePlayContent[qCount].responseOptions[i];
        }
    }
}

var dePopulateCardUl = function () {

    cardUl.innerHTML = "";
}

var drawPage = function () {

    if (gameState === "gamePlay") {
        populateCardUl();
    }
    else {
        dePopulateCardUl();
    }

    cardTitle.textContent = object.displayState[gameState].cardTitle;

    cardTimeTitle.textContent = object.displayState[gameState].cardTimeTitle;

    cardTimeValue.textContent = object.displayState[gameState].cardTimeValue;

    cardBodyParagraph.textContent = object.displayState[gameState].bodyParagraph;

    footerParagraph.textContent = object.displayState[gameState].footerParagraph;
}

var ignitionCountDown = function (current) {

    console.log("ignitionCountDown is running");

    if (timeRemaining <= -1) {
        clearInterval(x);
        object.displayState[gameState].cardTimeValue = "";
        gameState = "gamePlay";
        timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
        then = Date.now();
        y = setInterval(gameCountDown, speed, "gamePlay");
        drawPage();
        return;
    }

    if (current !== gameState) {
        object.displayState[gameState].cardTimeValue = "";
        clearInterval(x);
        object.displayState.countDown.cardTitle = "Are you ready?";
        object.displayState.countDown.cardTimeTitle = "";
        object.displayState.countDown.bodyParagraph = "";
        object.displayState.countDown.footerParagraph = "";

        switch (gameState) {
            case "newGame":
                timeRemaining = object.gameDynamics.countDownLength;
                object.displayState.countDown.cardTimeValue = object.gameDynamics.countDownLength;

                drawPage();
                return;
            case "gamePlay":
                timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
                object.displayState.countDown.cardTimeValue = object.gameDynamics.countDownLength;
                then = Date.now();
                y = setInterval(gameCountDown, speed, "gamePlay");
                drawPage();
                return;
        }

    }

    if (timeRemaining === 0 && gameState === "countDown") {

       
        object.displayState[gameState].cardTimeTitle = "";
        object.displayState[gameState].cardTimeValue = "";
        object.displayState[gameState].bodyParagraph = "Go!";
        drawPage();

    }
    // else if ( timeRemaining === 1 && gameState === "countDown") {

    //     object.displayState[gameState].cardTimeTitle = "";
    //     object.displayState.countDown.cardTimeValue = timeRemaining;
    //     cardTimeValue.textContent = timeRemaining;
    //     drawPage();
    // }
    else if ( timeRemaining === (object.gameDynamics.countDownLength - 1) && gameState === "countDown"){

        object.displayState[gameState].cardTitle = "";
        object.displayState[gameState].cardTimeTitle = "Get Set!";
        object.displayState[gameState].cardTimeValue = timeRemaining;
        cardTimeValue.textContent = timeRemaining;
        drawPage();
    }
    else {
    object.displayState.countDown.cardTimeValue = timeRemaining;
    cardTimeValue.textContent = timeRemaining;
    }

    timeRemaining--;
    console.log(timeRemaining);
}

var gameCountDown = function (current) {

    console.log("gameCountDown is running");


    now = Date.now()
    var elapsedTime = ((now - then)/1000).toFixed(3);
    var timeRecord = timeRemaining - elapsedTime;
    cardTimeValue.textContent = timeRecord.toFixed(2);

    var resultsUpdate = function () {

        if (timeRecord > 1) {
            object.displayState.resultsAndDetails.bodyParagraph = "You scored: " + userScore * object.gameDynamics.pointsForCorrect + " with: " + timeRecord + " seconds remaining.";
        }
        else {
            object.displayState.resultsAndDetails.bodyParagraph = "You scored: " + userScore * object.gameDynamics.pointsForCorrect + " with: " + timeRecord + " of a second remaining.";
        }
    }

    if (qCount === numberOfQuestions) {

        cardTimeValue.textContent = "",
        clearInterval(y);
        resultsUpdate();
    }

    if (timeRemaining <= -1) {

        cardTimeValue.textContent = "",
        resultsUpdate();
        clearInterval(y);
        timeRemaining = 3;
        gameAdvance()
        return;
    }

    if (gameState !== "gamePlay") {

        cardTimeValue.textContent = "",
        resultsUpdate();
        clearInterval(y);
        timeRemaining = 3;
        drawPage();
        return;

    }
}

var createHighScoresDivs = function () {
    // // debugger;
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
    // // debugger;
    if (event.target.matches("#start-btn")) {

        switch (gameState) {
            case "titleCard":
                gameState = "newGame";
                break;
            case "newGame":
                gameState = "countDown";
                    x = setInterval(ignitionCountDown, 1000, "countDown");
                break;
            case "countDown":
                gameState = "gamePlay";
                break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to restart without seeing your resuts?")
                if (conf) {
                    gameState = "titleCard";
                }
                break;
            case "resultsAndDetails":
                gameState = "highScores";
                break;
            case "highScores":
                gameState = "newGame";
                break;
            default:
                break;
        }
    } else if (event.target.matches("#stop-btn")) {
        switch (gameState) {
            case "titleCard":
                gameState = "titleCard";
                break;
            case "newGame":
                gameState = "titleCard";
                break;
            case "countDown":
                gameState = "newGame";
                break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to stop now?")
                if (conf) {
                    gameState = "resultsAndDetails";
                }
                break;
            case "resultsAndDetails":
                gameState = "highScores";
                break;
            case "highScores":
                gameState = "titleCard";
                break;
            default:
        }
    }
    drawPage();
}


var gameAdvance = function (mark) {
    // // debugger;

    

    if (timeRemaining <= 0) {

        object.displayState.gamePlay.cardTitle = "GAME OVER";
        object.displayState.gamePlay.bodyParagraph = "Click here to see your results.";
        cardBodyParagraph.className = "link";
    }

    if (qCount === numberOfQuestions - 1) {
        object.displayState.gamePlay.cardTitle = "You've completed the quiz.";
        object.displayState.gamePlay.bodyParagraph = "Click here to see your results.";
        cardBodyParagraph.className = "link";
    }
}

var responseValidator = function (questionIndex, responseIndex) {

    var answerCheck = object.gamePlayContent[questionIndex].correctResponse;

    if (answerCheck === responseIndex) {
        userScore++;
        object.displayState.gamePlay.footerParagraph = "Your last response was: CORRECT.  + plus: " + object.gameDynamics.pointsForCorrect + " points!";
    }
    else {
        console.log(object.gameDynamics.timeDemerit);
        timeRemaining -= object.gameDynamics.timeDemerit;
        object.displayState.gamePlay.footerParagraph = "Your last response was: INCORRECT.  - minus: " + object.gameDynamics.timeDemerit + " seconds.";
    }

}

var updateHighScores = function (newRecordArray) {
    console.log(object.highScores, " are the highscores to begin with 366");
    console.log(newRecordArray, " is the newRecordArray to begin with");
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

    console.log(newRecordArray, " is the newRecordArray 391");
    console.log(object.highScores, " are the highscores arrays888888888");

}

var userClickResponseHandler = function (event) {
    event.preventDefault();

    console.log("Zimmer");
    console.log(qCount, " is the qCount");

    // get target element from event
    var targetElId = event.target.getAttribute("id");
    var targetEltext = event.target.textContent;
    console.log("Log Strikes Back!!! -- 403-- ", targetEltext);


    switch (targetElId) {
        case "option0":
            console.log("option00000", targetElId);
            gameAdvance(responseValidator(qCount, "0"));
            qCount++;
            break;
        case "option1":
            console.log("option111111", targetElId);
            gameAdvance(responseValidator(qCount, "1"));
            qCount++;
            break;
        case "option2":
            console.log("option222222", targetElId);
            gameAdvance(responseValidator(qCount, "2"));
            qCount++;
            break;
        case "option3":
            console.log("option33333", targetElId);
            gameAdvance(responseValidator(qCount, "3"));
            qCount++;
            break;
        default:
            break;
    }

    if (targetEltext === "Click here to see your results.") {
        gameState = "resultsAndDetails";
        cardBodyParagraph.className = "";
        drawPage();
        return;
    }

    if (targetElId === "initials-input") {
        // Nothing doing
        console.log("Do Nothing!!")
    }
    else if (gameState === "resultsAndDetails") {
        lastPlayer = document.querySelector("input").value.toUpperCase();
        console.log(lastPlayer);
        var newRecordArray = [lastPlayer, userScore];
        updateHighScores(newRecordArray);
        gameState = "highScores";
        drawPage();
    }
    drawPage();
}

var highlightLinkText = function (event) {

    var targetEl = event.target;

    targetEl.classList.toggle("highlight");

}

var unhighlightLinkText = function (event) {

    var targetEl = event.target;

    targetEl.classList.toggle("highlight");

}


// // debugger;

// Function call begins the application
drawPage(gameState);


// User interaction monitors

stopBtn.addEventListener("click", startStopBtnHandler);
startBtn.addEventListener("click", startStopBtnHandler);

screen.addEventListener("click", userClickResponseHandler)

screen.onmouseover = highlightLinkText;
screen.onmouseout = unhighlightLinkText;
