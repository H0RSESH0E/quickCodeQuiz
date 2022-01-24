// This object contains all game content including game dynamics

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
            cardTimeTitle: "Countdown to start:",
            cardTimeValue: ""

        },

        gamePlay: {
            cardTitle: "",
            bodyParagraph: "Click on your choice. ",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:",
            cardTimeValue: ""
        },

        gameOver: {
            cardTitle: "GAME OVER",
            bodyParagraph: "Click here to see your results.",
            footerParagraph: "",
            cardTimeTitle: "",
            cardTimeValue: ""
        },

        resultsAndDetails: {
            cardTitle: "You scored: ",
            bodyParagraph: "Enter your initials: ",
            footerParagraph: "Press either button to see the high scores.",
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

    originalDisplayState: {
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
            cardTimeTitle: "Countdown to start:",
            cardTimeValue: ""

        },

        gamePlay: {
            cardTitle: "",
            bodyParagraph: "Click on your choice. ",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:",
            cardTimeValue: ""
        },

        gameOver: {
            cardTitle: "GAME OVER",
            bodyParagraph: "Click here to see your results.",
            footerParagraph: "",
            cardTimeTitle: "",
            cardTimeValue: ""
        },

        resultsAndDetails: {
            cardTitle: "You scored: ",
            bodyParagraph: "Enter your initials: ",
            footerParagraph: "Press either button to see the high scores.",
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
        timePerQuestion: 15,
        timeDemerit: 15,
        gameClockSpeed: 100,
        countDownLength: 5,
        pointsForCorrect: 25
    },

    highScores: [

        ["D B", 151],
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

        },
        {
            stem: "What does CSS stand for?",
            responseOptions: ["Case Structured Standards", "Constant Simple Sudden", "Jaberwocky", "Cascading Style Sheet"],
            correctResponse: "3",
            feedback: ""

        },
        {
            stem: "In what part of the HTML should style information be linked?",
            responseOptions: ["<head>", "<first>", "body", "feet"],
            correctResponse: "0",
            feedback: ""

        },
        {
            stem: "How many coders does it take to screw in a lightbulb?",
            responseOptions: ["One", "Two", "None. That's a hardware issue."],
            correctResponse: "2",
            feedback: ""

        }

    ]

}

// These variables link the HTML elements to the Javascript
var localHighscores = object.highScores;
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

// These variables interpret the nature of the game content object for the intial state of the game
var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = object.gameDynamics.countDownLength;
object.displayState.countDown.cardTimeValue = timeRemaining;

// These variables are present for the begining of the game
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


// All function names are semantic

var populateCardUl = function () {

    cardUl.innerHTML = "";
    if (gameState === "gamePlay" && qCount < (numberOfQuestions) && timeRemaining > 0) {

        object.displayState.gamePlay.cardTitle = object.gamePlayContent[qCount].stem;

        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            var option = document.createElement("li");
            cardUl.appendChild(option);
            option.setAttribute("id", "option" + i);
            option.className = "link";
            option.textContent = object.gamePlayContent[qCount].responseOptions[i];

        }
    }
    else if (gameState === "highScores") {

        cardUl.classList.add("scores");

        for (var i = 0; i < object.highScores.length; i++) {
            console.log("here we are!!!!!!!!!  i = ", i, " - qCount: ", qCount)
            var option = document.createElement("li");
            cardUl.appendChild(option);
            option.setAttribute("id", "option" + i);
            option.className = "link";
            option.textContent = object.highScores[i][0] + " " + object.highScores[i][1];
        }
    }
}

var dePopulateCardUl = function () {

    console.log("dePopulateCardUl");
    cardUl.innerHTML = "";
}

var appendInput = function () {
    var input = document.createElement("input");
    input.setAttribute("id", "initials-input");
    input.setAttribute("maxlength", "3");
    cardBody.removeChild(cardBody.lastChild);
    cardBody.appendChild(input);
    document.getElementById("initials-input").focus();
}

var removeInput = function () {
    cardBody.removeChild(cardBody.lastChild);
    cardBody.appendChild(cardUl);
}

var drawPage = function () {

    if (gameState === "gamePlay" || gameState === "highScores") {
        populateCardUl();
    }
    else {
        dePopulateCardUl();
    }

    cardTitle.textContent = object.displayState[gameState].cardTitle;

    cardTimeTitle.textContent = object.displayState[gameState].cardTimeTitle;

    cardTimeValue.textContent = object.displayState[gameState].cardTimeValue;

    cardBodyParagraph.textContent = object.displayState[gameState].bodyParagraph;

    var delay = setTimeout(function () {

        footerParagraph.textContent = object.displayState[gameState].footerParagraph;

    }, object.gameDynamics.gameClockSpeed * 5)

    if (gameState === "gamePlay") {
        var delay = setTimeout(function () {
            footerParagraph.textContent = object.displayState[gameState].footerParagraph;
        }, 300)
        var delay = setTimeout(function () {
            footerParagraph.textContent = "";
        }, 3000)
    }
    else {
        footerParagraph.textContent = object.displayState[gameState].footerParagraph;
    }
}

var ignitionCountDown = function (current) {

    if (timeRemaining === 0 && gameState === "countDown") {
        object.displayState[gameState].cardTitle = "";
        object.displayState[gameState].cardTimeTitle = "";
        object.displayState[gameState].cardTimeValue = "";
        object.displayState[gameState].bodyParagraph = "Go!";
        drawPage();
    }
    else if (timeRemaining === 2 && gameState === "countDown") {
        object.displayState[gameState].cardTitle = "Get Set!";
        object.displayState[gameState].cardTimeValue = timeRemaining;
        cardTimeValue.textContent = timeRemaining;
        drawPage();
    }
    else {
        object.displayState.countDown.cardTimeValue = timeRemaining;
        cardTimeValue.textContent = timeRemaining;
    }

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

    timeRemaining--;
}

var gameCountDown = function (current) {

    now = Date.now()
    var elapsedTime = ((now - then) / 1000).toFixed(3);
    var timeRecord = timeRemaining - elapsedTime;
    cardTimeValue.textContent = timeRecord.toFixed(2);

    var resultsUpdate = function () {
        console.log("  Results Update ");
        if (timeRecord > 1) {
            object.displayState.resultsAndDetails.cardTitle = "You scored: " + userScore + " with: " + timeRecord.toFixed(3) + " seconds remaining.";
        }
        else if (timeRecord > 0) {
            object.displayState.resultsAndDetails.cardTitle = "You scored: " + userScore + " with: " + timeRecord.toFixed(3) + " of a second remaining.";
        }
        else {
            object.displayState.resultsAndDetails.cardTitle = "You scored: " + userScore + " with no time remaining.";
        }
    }

    if (qCount === numberOfQuestions) {
        cardTimeValue.textContent = "",
            clearInterval(y);
        resultsUpdate();
        gameState = "gameOver";
        cardBodyParagraph.className = "link";
        drawPage();
    }

    if (timeRecord <= 0 && qCount < numberOfQuestions) {
        cardTimeValue.textContent = "",
            clearInterval(y);
        resultsUpdate();
        gameState = "gameOver";
        cardBodyParagraph.className = "link";
        drawPage();
        timeRemaining = object.gameDynamics.countDownLength;
        return;
    }

    if (gameState !== "gamePlay") {
        cardTimeValue.textContent = "",
            resultsUpdate();
        clearInterval(y);
        drawPage();
        timeRemaining = object.gameDynamics.countDownLength;
        return;
    }
}

var startStopBtnHandler = function (event) {

    if (event.target.matches("#start-btn")) {

        switch (gameState) {
            case "titleCard":
                gameState = "newGame";
                break;
            case "newGame":
                gameState = "countDown";
                ignitionCountDown("countDown");
                x = setInterval(ignitionCountDown, 1000, "countDown");
                break;
            case "countDown":
                gameState = "gamePlay";
                break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to restart without seeing your resuts?")
                if (conf) {
                    object.displayState = object.originalDisplayState;
                    gameState = "titleCard";
                }
                break;
            case "resultsAndDetails":
                gameState = "highScores";
                lastPlayer = document.querySelector("input").value.toUpperCase();
                var newRecordArray = [lastPlayer, userScore];
                updateHighScores(newRecordArray);
                removeInput();
                break;
            case "highScores":
                object.displayState = object.originalDisplayState;
                cardUl.classList.remove("scores");
                qCount = 0;
                gameState = "titleCard";
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
                lastPlayer = document.querySelector("input").value.toUpperCase();
                var newRecordArray = [lastPlayer, userScore];
                updateHighScores(newRecordArray);
                removeInput();
                break;
            case "highScores":
                object.displayState = object.originalDisplayState;
                cardUl.classList.remove("scores");
                qCount = 0;
                gameState = "titleCard";
                break;
            default:
        }
    }
    drawPage();
}

var responseValidator = function (questionIndex, responseIndex) {
    var answerCheck = object.gamePlayContent[questionIndex].correctResponse;

    if (answerCheck === responseIndex) {
        userScore += object.gameDynamics.pointsForCorrect;
        console.log("userScore now: ", userScore);
        object.displayState.gamePlay.footerParagraph = "Your last response was: CORRECT.  + plus: " + object.gameDynamics.pointsForCorrect + " points!";
    }
    else {
        console.log(object.gameDynamics.timeDemerit);
        timeRemaining -= object.gameDynamics.timeDemerit;
        object.displayState.gamePlay.footerParagraph = "Your last response was: INCORRECT.  - minus: " + object.gameDynamics.timeDemerit + " seconds.";
    }
}

var updateHighScores = function (newRecordArray) {

    console.log("updateHighScores", object.highScores);


    var tempArray = [];
    var inserted = false;

    for (var i = 0; i < 10; i++) {
        console.log(tempArray, " 372");
        console.log(i, " loops so far");

        if (inserted) {
            console.log("REX");
            console.log(newRecordArray[1], " ^^^^^^^ ", object.highScores[i][1]);

            tempArray.push(object.highScores[i]);
        }
        else {
            console.log("Box");
            console.log("&&&&&", newRecordArray[1], " ------- ", object.highScores[i][1]);
            if (newRecordArray[1] > object.highScores[i][1]) {
                console.log(newRecordArray[1], " ------- ", object.highScores[i][0]);
                tempArray.push(newRecordArray);
                tempArray.push(object.highScores[i]);
                inserted = true;
                i++;
            }
            else {
                tempArray.push(object.highScores[i]);
            }
        }

    };

    object.highScores = tempArray;
    localStorage.setItem("quizHighS", JSON.stringify(object.highScores));
    userScore = 0;

    console.log(newRecordArray, " is the newRecordArray");
    console.log(object.highScores, " is the updated highScores array");

}

var userClickResponseHandler = function (event) {

    event.preventDefault();

    var targetElId = event.target.getAttribute("id");
    var targetEltext = event.target.textContent;

    switch (targetElId) {
        case "option0":
            responseValidator(qCount, "0");
            qCount++;
            drawPage();
            break;
        case "option1":
            responseValidator(qCount, "1");
            qCount++;
            drawPage();
            break;
        case "option2":
            responseValidator(qCount, "2");
            qCount++;
            drawPage();
            break;
        case "option3":
            responseValidator(qCount, "3");
            qCount++;
            drawPage();
            break;
        default:
            break;
    }

    if (targetEltext === "Click here to see your results.") {
        gameState = "resultsAndDetails";
        cardBodyParagraph.classList.remove("link");
        appendInput();
        var input = document.getElementById("initials-input");
        drawPage();
        return;
    }

    if (gameState === "resultsAndDetails" && targetElId !== "initials-input") {
        cardBodyParagraph.classList.remove("link");
        lastPlayer = document.querySelector("input").value.toUpperCase();
        console.log(lastPlayer);
        var newRecordArray = [lastPlayer, userScore];
        updateHighScores(newRecordArray);
        gameState = "highScores";
        removeInput();
        drawPage();
        object.displayState = object.originalDisplayState;
    }  
}

var userSubmitResponseHandler = function (event) {

    if (event.keyCode === 13) {
        lastPlayer = document.querySelector("input").value.toUpperCase();
        console.log(lastPlayer);
        var newRecordArray = [lastPlayer, userScore];
        updateHighScores(newRecordArray);
        gameState = "highScores";
        removeInput();
        drawPage();
    }
}

var highlightLinkText = function (event) {

    var targetEl = event.target;

    targetEl.classList.add("highlight");

}

var unhighlightLinkText = function (event) {

    var targetEl = event.target;

    targetEl.classList.remove("highlight");

}

var loadHighScores = function () {

    var storedScores = JSON.parse(localStorage.getItem("quizHighS"));
    console.log(storedScores);
    if (storedScores) {
        object.highScores = JSON.parse(localStorage.getItem("quizHighS"));
    }
}

// Function call begins the application
loadHighScores();

drawPage();


// Monitors Start and Stop buttons
stopBtn.addEventListener("click", startStopBtnHandler);
startBtn.addEventListener("click", startStopBtnHandler);

// Monitors keyboard for data entry
addEventListener("keydown", userSubmitResponseHandler);

// Monitors mouse behaviour
screen.addEventListener("click", userClickResponseHandler);
screen.onmouseover = highlightLinkText;
screen.onmouseout = unhighlightLinkText;
