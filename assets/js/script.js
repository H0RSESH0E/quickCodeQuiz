

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
            bodyParagraph: "Select your response: ",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:",
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
            bodyParagraph: "Select your response: ",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:",
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
        timePerQuestion: 25,
        timeDemerit: 15,
        gameClockSpeed: 3500,
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

    console.log("populateCardUl");
    // BONGO

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
    // BONGO

    cardUl.innerHTML = "";

}

var appendInput = function () {
    var input = document.createElement("input");
    input.setAttribute("id", "initials-input");
    cardBody.removeChild(cardBody.lastChild);
    cardBody.appendChild(input);
}

var removeInput = function () {
    cardBody.removeChild(cardBody.lastChild);
    cardBody.appendChild(cardUl);
}


var drawPage = function () {

    console.log("drawPage's game state: ", gameState);
    // BONGO

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

    footerParagraph.textContent = object.displayState[gameState].footerParagraph;
}

var ignitionCountDown = function (current) {

    console.log("ignitionCountDown");
    // BONGO

    if (timeRemaining === 0 && gameState === "countDown") {

        object.displayState[gameState].cardTitle = "";
        object.displayState[gameState].cardTimeTitle = "";
        console.log(" here ", timeRemaining)
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
        console.log("time remaining in ignition countdown")
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
    console.log(timeRemaining, " is the time remaing in countdown");
}

var gameCountDown = function (current) {

    console.log("gameCountDown: qCount: ", qCount);
    // BONGO

    now = Date.now()
    var elapsedTime = ((now - then) / 1000).toFixed(3);
    var timeRecord = timeRemaining - elapsedTime;
    cardTimeValue.textContent = timeRecord.toFixed(2);

    var resultsUpdate = function () {
        console.log("  Results Update ");
        if (timeRecord > 1) {
            object.displayState.resultsAndDetails.cardTitle = "You scored: " + userScore * object.gameDynamics.pointsForCorrect + " with: " + timeRecord.toFixed(3) + " seconds remaining.";
        }
        else if (timeRecord > 0) {

            object.displayState.resultsAndDetails.cardTitle = "You scored: " + userScore * object.gameDynamics.pointsForCorrect + " with: " + timeRecord.toFixed(3) + " of a second remaining.";
        }
        else {

            object.displayState.resultsAndDetails.cardTitle = "You scored: " + userScore * object.gameDynamics.pointsForCorrect + " with no time remaining.";

        }
    }

    if (qCount === numberOfQuestions) {
        console.log("  qCount = numberOfQuestions  ", qCount, " ", numberOfQuestions);
        cardTimeValue.textContent = "",
        clearInterval(y);
        resultsUpdate();
        gameAdvance();
        drawPage();
    }

    if (timeRecord <= 0 && qCount < numberOfQuestions) {
        console.log("  time record <=0  ");
        cardTimeValue.textContent = "",
        clearInterval(y);
        resultsUpdate();
        gameAdvance("GAME OVER");
        drawPage();
        timeRemaining = object.gameDynamics.countDownLength;
        return;
    }

    if (gameState !== "gamePlay") {
        console.log("  game state !== gameplay  ");
        cardTimeValue.textContent = "",
            resultsUpdate();
        clearInterval(y);

        drawPage();
        timeRemaining = object.gameDynamics.countDownLength;
        return;

    }
}

var createHighScoresDivs = function () {

    console.log("createHighScoresDivs");
    // BONGO

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

    console.log("startStopBtnHandler");
    // BONGO

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
                gameState = "titleCard";
                break;
            default:
        }
    }
    drawPage();
}


var gameAdvance = function (gameOver) {


    console.log("gameAdvance - mark: ", gameOver);
    // BONGO
    console.log("# of questions: ", numberOfQuestions);
    console.log("qCount: ", qCount);

    if (gameOver) {
        console.log("gameAdvance #1");
        dePopulateCardUl();
        object.displayState.gamePlay.cardTitle = "GAME OVER";
        object.displayState.gamePlay.bodyParagraph = "Click here to see your results.";
        cardBodyParagraph.className = "link";
    }

    if (qCount === numberOfQuestions) {
        console.log("gameAdvance #2");
        dePopulateCardUl();
        object.displayState.gamePlay.cardTitle = "You've completed the quiz.";
        object.displayState.gamePlay.bodyParagraph = "Click here to see your results.";
        cardBodyParagraph.className = "link";
    }
}

var responseValidator = function (questionIndex, responseIndex) {

    console.log("responseValidator - qCount: ", qCount);
    // BONGO

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

    console.log("updateHighScores");
    // BONGO

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
    // BONGO
    console.log("userClickResponseHandler - qCount: ", qCount);

    event.preventDefault();

    var targetElId = event.target.getAttribute("id");
    var targetEltext = event.target.textContent;
    console.log("Log Strikes Back!!! -- 403-- ", targetEltext);


    switch (targetElId) {
        case "option0":
            console.log("option00000", targetElId);
            responseValidator(qCount, "0");
            qCount++;
            gameAdvance();
            break;
        case "option1":
            console.log("option111111", targetElId);
            responseValidator(qCount, "1");
            qCount++;
            gameAdvance();
            break;
        case "option2":
            console.log("option222222", targetElId);
            responseValidator(qCount, "2");
            qCount++;
            gameAdvance();
            break;
        case "option3":
            console.log("option33333", targetElId);
            responseValidator(qCount, "3");
            qCount++;
            gameAdvance();
            break;
        default:
            break;
    }

    if (targetEltext === "Click here to see your results.") {
        gameState = "resultsAndDetails";
        cardBodyParagraph.className = "";
        appendInput();
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
        removeInput();
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
