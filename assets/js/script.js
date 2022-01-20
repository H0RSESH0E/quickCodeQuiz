

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
            bodyParagrah: "",
            footerParagraph: ""
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

    // gameState values must equal the displayState object names
    gameState: "titleCard",

    cardTime: "",

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


var cardHeader = document.querySelector("#cardHeader");
var cardBody = document.querySelector("#cardBody");
var cardFooter = document.querySelector("#cardFooter");


var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;

var qCount = 0;
var userScore = 0;
var lastScore = "";
var lastPlayer = "";

// Playground

var drawPage = function(current) {
    // real-time debugging
    console.log("drawPage() started with: ", current)


    // removes the last gameState 
    cardHeader.removeChild(cardHeader.childNodes[0]);
    cardBody.removeChild(cardBody.childNodes[0]);
    cardFooter.removeChild(cardFooter.childNodes[0]);

    // create variables for new dom elements, append them, id them, and populate them with content:
    //See README for labelled wireframe

    // Populates the displayCard cardHeader <div>
    var cardTitle = document.createElement("h2")
    cardHeader.appendChild(cardTitle);
    cardTitle.setAttribute("id", "cardTitle");
    cardTitle.textContent = object.displayState.current.cardTitle;

    // Populates the displayCard cardHeader <div>
    var cardTimeDiv = document.createElement("div");
    cardHeader.appendChild(cardTimeDiv);
    cardTimeDiv.setAttribute("id", "cardTimeDiv");

    var cardTimeTitle = document.createElement("p")
    cardTimeDiv.appendChild(cardTime);
    cardTime.setAttribute("id", "cardTimeTitle");
    cardTime.textContent = object.displayState.current.cardTimeTitle;

    var cardTimeValue = document.createElement("p")
    cardTimeDiv.appendChild(cardTime);
    cardTime.setAttribute("id", "cardTime");
    cardTime.textContent = object.displayState.cardTime;

    // Populates the displayCard cardBody <div>
    var bodyParagraph = document.createElement("p")
    cardBody.appendChild(bodyParagraph);
    bodyParagraph.setAttribute("id", "bodyParagraph");
    bodyParagraph.textContent = object.displayState.current.bodyParagraph;
    
    // Populates the displayCard cardFooter <div>
    var footerParagraph = document.createElement("p")
    cardFooter.appendChild(footerParagraph);
    footerParagraph.setAttribute("id", "footerParagraph");
    footerParagraph.textContent = object.displayState.current.footerParagraph;
    
    
    // real-time debugging
    console.log("drawPage() ended with: ", current)
}


var countDownFunction = function (lengthOfTime) {
    console.log("countDownFunction() started with: ", lengthOfTime)
    
    var myTimer = function(){
         
        var i = parseInt(displayCardTimer.textContent);
        
        displayCardTimer.textContent = i - 1;
            if (i === 0 || object.gameState !== "countDown") {
                clearInterval(oneSecondInterval);
                console.log("oneSecondInterval CLEARED");
                object.gameState = "gamePlay"
                drawPage(object.gameState)
            }
    };
    var oneSecondInterval = setInterval(myTimer, 1000);

}
{
    // query the object.displayState with the gameState stored in current and run applicable game functions to alter the object

    //





    // creates a new div element to build every game state inside of


    // switches to the appropriate set of containers for whichever game state

    if (current === "titleCard" || current === "newGame" || current === "gamePlay" || current === "resultsAndDetails") {
    
   

   // Switches for game state content should now be unnecessary

    if (current === "countDown") {
        var displayCardTimer = document.createElement("h3")
        displayCard.appendChild(displayCardTimer);
        displayCardTimer.setAttribute("id", "countDownText");
        displayCardTimer.textContent = "5";
       
        mainEl.appendChild(displayCard);
    
        var myTimer = function(){
         
            var i = parseInt(displayCardTimer.textContent);
            
            displayCardTimer.textContent = i - 1;
                if (i === 0 || object.gameState !== "countDown") {
                    clearInterval(oneSecondInterval);
                    console.log("oneSecondInterval CLEARED");
                    object.gameState = "gamePlay"
                    drawPage(object.gameState)
                }
        };
        var oneSecondInterval = setInterval(myTimer, 1000);


      

    }

    if (current === "gamePlay" && qCount < numberOfQuestions) {


        //start and display interal timer
        var displayCardTimer = document.createElement("h3")
        displayCard.appendChild(displayCardTimer);
        displayCardTimer.setAttribute("id", "countDownText");
        displayCardTimer.textContent = timeRemaining;
       
        mainEl.appendChild(displayCard);
        var myGameTimer = function(){
         
            var i = parseInt(displayCardTimer.textContent);
            
            displayCardTimer.textContent = i -1;
                if (i === 0 || object.gameState !== "gamePlay") {
                    clearInterval(oneSecondGameInterval);
                    console.log("GAME OVER CLEARED");
                    object.gameState = "resultsAndDetails"
                    drawPage(object.gameState)
                }
        };
        var oneSecondGameInterval = setInterval(myGameTimer, 1000);


        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            
           
            var displayCardList = document.createElement("ul");
            displayCardList.setAttribute("id", "QuestionsUl")
            displayCardParagraph.appendChild(displayCardList);
            var displayCardQuestions = document.createElement("li");
            displayCardList.appendChild(displayCardQuestions);
            displayCardQuestions.setAttribute("id", "option" + i);
            displayCardQuestions.className = "options link";
            displayCardQuestions.textContent = object.gamePlayContent[qCount].responseOptions[i];
                
        }
        console.log(displayCardHeader.textContent, " ^^^");
        console.log(object.displayState.gamePlay[0]);
        console.log(object.gamePlayContent[qCount].stem)
        displayCardHeader.textContent = object.displayState.gamePlay[0] + " " + object.gamePlayContent[qCount].stem;
    } 

    else if (current === "gamePlay" && qCount === numberOfQuestions) {

        displayCardParagraph.className = "link";

    }
    
    else if (current === "resultsAndDetails") {

        var displayCardScore = document.createElement("p")
        displayCardParagraph.appendChild(displayCardScore);
        displayCardParagraph.setAttribute("id", "cardParagraph");
        displayCardParagraph.textContent = "Your score was: " + userScore;
        
        var displayCardBreak = document.createElement("br")
        displayCardParagraph.appendChild(displayCardBreak);
        var displayCardBreak1 = document.createElement("br")
        displayCardParagraph.appendChild(displayCardBreak1);

        var displayCardInput = document.createElement("input")
        displayCardParagraph.appendChild(displayCardInput);
        displayCardInput.setAttribute("id", "initials-input");
        displayCardInput.setAttribute("type", "text");
        displayCardInput.setAttribute("placeholder", "AAA");
        displayCardInput.setAttribute("maxlength", "3");
        displayCardInput.textContent = "AAA"

        displayCardFooter.className = "link";
    }

    else if (current === "highScores") {

        var displayCardHighScoresContainer = document.createElement("div");
        displayCard.appendChild(displayCardHighScoresContainer);
        displayCardHighScoresContainer.setAttribute("id", "highScoreContainer");

        var displayCardHighUsersColumn = document.createElement("div");
        displayCardHighScoresContainer.appendChild(displayCardHighUsersColumn);
        displayCardHighUsersColumn.className = "high-scores column users-inits";


        var displayCardHighScoresColumn = document.createElement("div");
        displayCardHighScoresContainer.appendChild(displayCardHighScoresColumn);
        displayCardHighUsersColumn.className = "high-scores column users-scores";

        for (var d = 0; d < 2; d++) {

            for (var i = 0; i < 10; i++) {

                var divDisplay = document.createElement("div");
                switch (d) {
                    case 0:
                    displayCardHighUsersColumn.appendChild(divDisplay);
                    divDisplay.className = "users-init-div";
                    break;
                
                    case 1: 
                    displayCardHighScoresColumn.appendChild(divDisplay);
                    divDisplay.className = "users-scores-div";
                }
                console.log(i," <-- i ", d, " <-- d");
                divDisplay.textContent = object.highScores[i][d];
                console.log(i, " divDisplay 'i'");
                console.log(d, " divDisplay 'd'");
                
            }
        }
    }

    // Draw a new state
    mainEl.appendChild(displayCard);

  
}


//Playground


var drawPage = function(current) {
    console.log(object.gameState, " drawPage gamestate");
    console.log(current, " current");
    // removes the last gameState 
    mainEl.removeChild(mainEl.childNodes[0]);

    // creates a new div element to build every game state inside of
    var displayCard = document.createElement("div");
    displayCard.className = "display-card";
    displayCard.setAttribute("id", "displayCard");

    // switches to the appropriate set of containers for whichever game state

    if (current === "titleCard" || current === "newGame" || current === "gamePlay" || current === "resultsAndDetails") {
    
    var displayCardHeader = document.createElement("h2")
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
    }

    if (current === "countDown") {
        var displayCardTimer = document.createElement("h3")
        displayCard.appendChild(displayCardTimer);
        displayCardTimer.setAttribute("id", "countDownText");
        displayCardTimer.textContent = "5";
       
        mainEl.appendChild(displayCard);
    
        var myTimer = function(){
         
            var i = parseInt(displayCardTimer.textContent);
            
            displayCardTimer.textContent = i - 1;
                if (i === 0 || object.gameState !== "countDown") {
                    clearInterval(oneSecondInterval);
                    console.log("oneSecondInterval CLEARED");
                    object.gameState = "gamePlay"
                    drawPage(object.gameState)
                }
        };
        var oneSecondInterval = setInterval(myTimer, 1000);


      

    }

    if (current === "gamePlay" && qCount < numberOfQuestions) {


        //start and display interal timer
        var displayCardTimer = document.createElement("h3")
        displayCard.appendChild(displayCardTimer);
        displayCardTimer.setAttribute("id", "countDownText");
        displayCardTimer.textContent = timeRemaining;
       
        mainEl.appendChild(displayCard);
        var myGameTimer = function(){
         
            var i = parseInt(displayCardTimer.textContent);
            
            displayCardTimer.textContent = i -1;
                if (i === 0 || object.gameState !== "gamePlay") {
                    clearInterval(oneSecondGameInterval);
                    console.log("GAME OVER CLEARED");
                    object.gameState = "resultsAndDetails"
                    drawPage(object.gameState)
                }
        };
        var oneSecondGameInterval = setInterval(myGameTimer, 1000);


        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            
           
            var displayCardList = document.createElement("ul");
            displayCardList.setAttribute("id", "QuestionsUl")
            displayCardParagraph.appendChild(displayCardList);
            var displayCardQuestions = document.createElement("li");
            displayCardList.appendChild(displayCardQuestions);
            displayCardQuestions.setAttribute("id", "option" + i);
            displayCardQuestions.className = "options link";
            displayCardQuestions.textContent = object.gamePlayContent[qCount].responseOptions[i];
                
        }
        console.log(displayCardHeader.textContent, " ^^^");
        console.log(object.displayState.gamePlay[0]);
        console.log(object.gamePlayContent[qCount].stem)
        displayCardHeader.textContent = object.displayState.gamePlay[0] + " " + object.gamePlayContent[qCount].stem;
    } 

    else if (current === "gamePlay" && qCount === numberOfQuestions) {

        displayCardParagraph.className = "link";

    }
    
    else if (current === "resultsAndDetails") {

        var displayCardScore = document.createElement("p")
        displayCardParagraph.appendChild(displayCardScore);
        displayCardParagraph.setAttribute("id", "cardParagraph");
        displayCardParagraph.textContent = "Your score was: " + userScore;
        
        var displayCardBreak = document.createElement("br")
        displayCardParagraph.appendChild(displayCardBreak);
        var displayCardBreak1 = document.createElement("br")
        displayCardParagraph.appendChild(displayCardBreak1);

        var displayCardInput = document.createElement("input")
        displayCardParagraph.appendChild(displayCardInput);
        displayCardInput.setAttribute("id", "initials-input");
        displayCardInput.setAttribute("type", "text");
        displayCardInput.setAttribute("placeholder", "AAA");
        displayCardInput.setAttribute("maxlength", "3");
        displayCardInput.textContent = "AAA"

        displayCardFooter.className = "link";
    }

    else if (current === "highScores") {

        var displayCardHighScoresContainer = document.createElement("div");
        displayCard.appendChild(displayCardHighScoresContainer);
        displayCardHighScoresContainer.setAttribute("id", "highScoreContainer");

        var displayCardHighUsersColumn = document.createElement("div");
        displayCardHighScoresContainer.appendChild(displayCardHighUsersColumn);
        displayCardHighUsersColumn.className = "high-scores column users-inits";


        var displayCardHighScoresColumn = document.createElement("div");
        displayCardHighScoresContainer.appendChild(displayCardHighScoresColumn);
        displayCardHighUsersColumn.className = "high-scores column users-scores";

        for (var d = 0; d < 2; d++) {

            for (var i = 0; i < 10; i++) {

                var divDisplay = document.createElement("div");
                switch (d) {
                    case 0:
                    displayCardHighUsersColumn.appendChild(divDisplay);
                    divDisplay.className = "users-init-div";
                    break;
                
                    case 1: 
                    displayCardHighScoresColumn.appendChild(divDisplay);
                    divDisplay.className = "users-scores-div";
                }
                console.log(i," <-- i ", d, " <-- d");
                divDisplay.textContent = object.highScores[i][d];
                console.log(i, " divDisplay 'i'");
                console.log(d, " divDisplay 'd'");
                
            }
        }
    }

    // Draw a new state
    mainEl.appendChild(displayCard);

  
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
                var conf = window.confirm("Are you sure you want to start again?")
                if (conf) {
                    object.gameState ="titleCard";
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
        drawPage(object.gameState)
    } 


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

drawPage(object.gameState);

footerEl.addEventListener("click", startStop);

mainEl.addEventListener("click", quizResponseHandler)

mainEl.onmouseover = highlightLinkText;
mainEl.onmouseout = unhighlightLinkText;
