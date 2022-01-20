

var object = {
    
    displayState: {
        "titleCard": {
            cardTitle: "JavaScript Quiz",
            bodyParagraph: "Test your knowledge of JavaScript code.",
            footerParagraph: "Press Start or Stop at any time.",
            cardTimeTitle: ""
        },
        newGame: {
            cardTitle: "The Rules:",
            bodyParagraph: "You get time to answer every question, but answer correctly or you will have time taken away.",
            footerParagraph:"You will get feedback here.",
            cardTimeTitle: ""
        },
        
        countDown: {
            cardTitle: "Get Ready!",
            bodyParagraph: "XXX",
            footerParagraph: "",
            cardTimeTitle: ""
        },

        gamePlay: {
            cardTitle: "",
            bodyParagraph: "",
            footerParagraph: "",
            cardTimeTitle: "Time remaining:"
        },
        
        resultsAndDetails: {
            cardTitle: "You finished the quiz in time.",
            bodyParagraph: "",
            footerParagraph: "Enter your initials: ",
            cardTimeTitle: ""
        },

        highScores: {
            cardTitle: "High Scores",
            bodyParagraph: "",
            footerParagraph: "Sometimes the best move is not to play.",
            cardTimeTitle: ""
        },

    },

    // gameState values must equal the displayState object names
    gameState: "titleCard",

    gameStateS: ["titleCard", "newGame", "countDown", "gamePlay", "resultsAndDetails", "highScores"],

    countDownTimeValue: 3,

    gameDynamics: {
        timePerQuestion: 15,
        timeDemerit: 20,
        countDownLength: 5,
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

var displayCard = document.querySelector("#displayCard");
var cardHeader = document.querySelector("#cardHeader");
var cardBody = document.querySelector("#cardBody");
var cardFooter = document.querySelector("#cardFooter");
var startStopDiv = document.querySelector("#start-stop-buttons");

var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;

var qCount = 0;
var userScore = 0;
var lastScore = "";
var lastPlayer = "";
var oldState = ""


// Playground

var drawPage = function(current) {
    // real-time debugging
    console.log("drawPage() started with: ", current)


    // removes the last gameState 
    
    
    cardHeader.innerHTML = "";
    cardBody.innerHTML = "";
    cardFooter.innerHTML = "";

    // create variables for new dom elements, append them, id them, and populate them with content:
    //See README for labelled wireframe

    // Populates the displayCard cardHeader <div>
    var cardTitle = document.createElement("h2")
    cardHeader.appendChild(cardTitle);
    cardTitle.setAttribute("id", "cardTitle");
    cardTitle.textContent = object.displayState[current].cardTitle;

    // Populates the displayCard cardHeader <div>
    var cardTimeDiv = document.createElement("div");
    cardHeader.appendChild(cardTimeDiv);
    cardTimeDiv.setAttribute("id", "cardTimeDiv");

    var cardTimeTitle = document.createElement("p")
    cardTimeDiv.appendChild(cardTimeTitle);
    cardTimeTitle.setAttribute("id", "cardTimeTitle");
    cardTimeTitle.textContent = object.displayState[current].cardTimeTitle;

    var cardTimeValue = document.createElement("p")
    cardTimeDiv.appendChild(cardTimeValue);
    cardTimeValue.setAttribute("id", "cardTimeValue");
    cardTimeValue.textContent = object.displayState.countDownTimeValue;

    // Populates the displayCard cardBody <div>
    var bodyParagraph = document.createElement("p")
    cardBody.appendChild(bodyParagraph);
    bodyParagraph.setAttribute("id", "bodyParagraph");
    bodyParagraph.textContent = object.displayState[current].bodyParagraph;

    var questionList = document.createElement("ul");
    cardBody.appendChild(bodyParagraph);
    questionList.setAttribute("id", "questionList");
    
    // Populates the displayCard cardFooter <div>
    var footerParagraph = document.createElement("p")
    cardFooter.appendChild(footerParagraph);
    footerParagraph.setAttribute("id", "footerParagraph");
    footerParagraph.textContent = object.displayState[current].footerParagraph;
    
    
    // real-time debugging
    console.log("drawPage() ended with: ", current)
}

var updatePage = function(current) {
    cardTitle.textContent = object.displayState[current].cardTitle;
    cardTimeTitle.textContent = object.displayState[current].cardTimeTitle;
    cardTimeValue.textContent = object.displayState.countDownTimeValue;
    bodyParagraph.textContent = object.displayState[current].bodyParagraph;
    footerParagraph.textContent = object.displayState[current].footerParagraph;
}

var countDownFunction = function (lengthOfTime) {
    console.log("countDownFunction() started with: ", lengthOfTime)
    var i = object.countDownTimeValue;

    var myTimer = function(){

        console.log(i)
        object.countDownTimeValue = i;
        cardTimeValue.textContent = object.countDownTimeValue;
        

            if (i === 0) {
                
                switch (object.gameState) {

                    case "countDown":
                        bodyParagraph.style.cssText += "font-size:200%";
                        object.displayState.countDown.bodyParagraph = "Go!";
                        updatePage(object.gameState);
                        console.log(object.displayState.countDown.bodyParagraph);
                        console.log("YEEHAWWW@@@");
                        console.log(i);
                        break;
                    case "gamePlay":
                        clearInterval(oneSecondInterval);
                        console.log("oneSecondInterval CLEARED");
                        object.gameState = "resultsAndDetails";
                        object.displayState.resultsAndDetails.bodyParagrah.textContent = "You scored :" + userScore;
                        if (qCount !== numberOfQuestions) {
                            object.displayState.resultsAndDetails.cardTitle = "You ran out of time!";
                        }
                }
            }
            else if (i === -1) {
                clearInterval(oneSecondInterval);
                bodyParagraph.style.cssText = "";
                object.gameState = "gamePlay";
                updatePage(object.gameState)
            }
        
            i--;
            // updatePage();
    };

    var oneSecondInterval = setInterval(myTimer, 1000);
    // drawPage(object.gameState)
    console.log("countDownFunction() ended with: ", lengthOfTime)
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
                countDownFunction (object.countDownTimeValue)
                console.log(object.gameState);
                break;
            case "countDown":
                object.cardTimeValue = timeRemaining;
                countDownFunction (object.cardTimeValue)
                object.gameState ="gamePlay";
                console.log(object.gameState);
            break;
            case "gamePlay":
                var conf = window.confirm("Are you sure you want to start again?")
                if (conf) {
                    object.gameState ="titleCard";
                    timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
                    qCount = 0;
                    userScore = 0;
                    lastScore = "";
                    lastPlayer = "";
                    console.log(object.gameState);
                }
            break;
            case "resultsAndDetails":
            
                object.gameState ="highScores";
                qCount = 0;
                console.log(object.gameState);
            break;
            case "highScores":
            
                object.gameState ="newGame";
                qCount = 0;
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
                var conf = window.confirm("Are you sure you want to stop now?")
                if (conf) {
                    object.gameState ="resultsAndDetails";
                    console.log(object.gameState);
                }
                
            break;
            case "resultsAndDetails":
            
                object.gameState ="highScores";
                console.log(object.gameState);
            break;
            case "highScores":
            
                object.gameState ="titleCard";
                qCount = 0;
                console.log(object.gameState);
            break;

            default:

        } 
    }
    
    if (oldState !== object.gameState){
        updatePage(object.gameState)
    } 


}

// This function counts and evaluates users selections, updates the displayState with the next question, adds points and subtracts time
var gameAdvance = function(mark) {
    console.log("gameAdvance() started with: ", mark)
    
    qCount++;

    questionList.removeChild(mainEl.childNodes[0]);

    for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

        var option = document.createElement("li");
        questionList.appendChild(option);
        option.setAttribute("id", "option" + i);
        option.className = "options link";
        option.textContent = object.gamePlayContent[qCount].responseOptions[i];
            
    }

    if (mark) {
        userScore++;
        object.displayState.gamePlay.footerParagraph = "Your last response was: CORRECT.";
    }
    else {
        timeRemaining -= object.gameDynamics.timeDemerit;
        object.displayState.gamePlay[2] = "Your last response was: INCORRECT.";
    }

    if (qCount === numberOfQuestions) {
        object.displayState.gamePlay.cardTitle = "You've completed the quiz.";
        object.displayState.gamePlay.footerParagraph = "Click here to see your results.";
    }

    drawPage(object.gameState)

    console.log("gameAdvance() ended with: ", mark)
}

var responseValidator = function(questionIndex, responseIndex) {
    console.log("responseValidator() began with: ", questionIndex, " & ", responseIndex);

    // get the index number for the correct response from the database and compare it to the user's response
    var answerCheck = object.gamePlayContent[questionIndex].correctResponse;
    if (answerCheck === responseIndex) {
        console.log("responseValidator() ended TRUE with: ", questionIndex, " & ", responseIndex);
        return true;
    }
    else {
        console.log("responseValidator() ended FALSE with: ", questionIndex, " & ", responseIndex);
        return false;
    };
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

var mouseInputHandler = function(event) {
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

drawPage(object.gameState);

startStopDiv.addEventListener("click", startStop);
displayCard.addEventListener("click", mouseInputHandler)
displayCard.onmouseover = highlightLinkText;
displayCard.onmouseout = unhighlightLinkText;
