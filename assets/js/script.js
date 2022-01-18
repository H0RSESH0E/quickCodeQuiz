

var object = {

    displayState: {
        titleCard: ["Would you like to play a game?", "Test your skill against the clock!", "place holder titleCard"],
        newGame: ["You're about to test your knowledge of HTML, CSS and JavaScript.", "You can start or stop at any time."],
        countDown: ["Get ready.", "Get set.", "Go!"],
        gamePlay:["Question: ", "Select:", "Your last response was:"],
        resultsAndDetails: ["Let's see how you did.", "Great Job!", "Enter your name here for the record books!", "Better luck next time."],
        highScores: ["Here are the high scores:"]
    },

    // gameState values must equal the display state array names
    gameState: "titleCard",

    gameDynamics: {
        timePerQuestion: 15,
        timeDemerit: 20,
        
    },
    
    highScores: [
        
        ["DB", 0]

    ],

    gamePlayContent: [
        {
            stem: "",
            responseOptions: ["a", "b", "c"],
            correctResponse: "0",
            feedback: ""

        },
        {
            stem: "",
            responseOptions: ["A", "B", "C", "D"],
            correctResponse: "0",
            feedback: ""

        },
        {
            stem: "",
            responseOptions: ["1", "2", "3", "may the force be with you"],
            correctResponse: "3",
            feedback: ""

        }

    ]    
    
}


var mainEl = document.querySelector("main");
var footerEl = document.querySelector("footer")
var runGame = false;
var game
var qCount = 0;
var userScore = 0;
var numberOfQuestions = Object.keys(object.gamePlayContent).length;
var timeRemaining = object.gameDynamics.timePerQuestion * numberOfQuestions;
var lastScore = "";
var lastPlayer = "";

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


    if (current === "gamePlay" && qCount < numberOfQuestions) {

        for (var i = 0; i < object.gamePlayContent[qCount].responseOptions.length; i++) {

            var displayCardList = document.createElement("ul");
            displayCardParagraph.appendChild(displayCardList);
            var displayCardQuestions = document.createElement("li");
            displayCardList.appendChild(displayCardQuestions);
            displayCardQuestions.setAttribute("id", "option" + i);
            displayCardQuestions.textContent = object.gamePlayContent[qCount].responseOptions[i];
                
        }


    } 
    
    else if (current === "resultsAndDetails") {

        var displayCardScore = document.createElement("p")
        displayCardParagraph.appendChild(displayCardScore);
        displayCardParagraph.setAttribute("id", "cardParagraph");
        displayCardParagraph.textContent = "Your score was: " + userScore;

        var displayCardInput = document.createElement("input")
        displayCardParagraph.appendChild(displayCardInput);
        displayCardInput.setAttribute("id", "initials-input");
        displayCardInput.setAttribute("type", "text");
        displayCardInput.setAttribute("placeholder", object.displayState[current][2]);

        var displayCardRecordSubmit = document.createElement("button");
        displayCardParagraph.appendChild(displayCardRecordSubmit);
        displayCardRecordSubmit.setAttribute("id", "sub-btn");
        displayCardRecordSubmit.setAttribute("type", "submit");
        displayCardRecordSubmit.className = "button submit-btn";
        displayCardRecordSubmit.textContent = "SAVE";
    }

    else if (current === "highScores") {



    }

    // Draw a new state
    mainEl.appendChild(displayCard);


      
    

console.log(object.gameState, " is The object.gameState");


}

// I was feeling overwhelmed by technical problems hearing you and being heard, the class content and personal issues at the time and I ended up venting all of that steam in your direction.  It wasn't professional of me.  I hope you will accept my apology and trust me that it won't happen again.

// Was it at all an issue for you and is there anything more you think I should do to set things straight?

// I'd like to apologize for my behavior at the end of our last class.  It was rude of me to interrupt you and disrespectful to speak with the tone I used.   I have no idea whether you gave it much thought or not, but just incase, and keeping with my own values, I hope you will accept my apology.  I won't let it happen again.


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
            
                object.gameState ="newGame";
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
        object.displayState.gamePlay[2] = "Your last response was correct.";
    }
    else {
        timeRemaining -= object.gameDynamics.timeDemerit;
        object.displayState.gamePlay[2] = "Your last response was incorrect.";
    }
    if (qCount === numberOfQuestions) {
        object.displayState.gamePlay[0] = "You've completed the quiz.";
        object.displayState.gamePlay[1] = "Click here to see your results.";
        
    }
    drawPage(object.gameState)

}

var responseValidator = function(questionIndex, responseIndex){

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

    var tempArray = [];
    var inserted = false;

    for (var i = 0; i < 10; i++) {

        console.log(i, " loops so far");
        if (!inserted) {
            if (newRecordArray[1] > object.highScores[i][1]) {
                tempArray.push(newRecordArray);
                tempArray.push(object.highScores[i]);
                inserted = true;
            }
        }
        else {
            tempArray.push(object.highScores[i]);
        }
    }

    object.highScores = tempArray;

    console.log(newRecordArray," is the newRecordArray");
    console.log(object.highScores, " are the highscores arrays");

}



    // if (newRecordArray[1] > object.highScores.first[1]) {
    //     object.highScores.third = object.highScores.second;
    //     object.highScores.second = object.highScores.first;
    //     object.highScores.first = newRecordArray;
    // }
    // else if (newRecordArray[1] > object.highScores.second[1]) {
    //     object.highScores.third = object.highScores.second;
    //     object.highScores.second = newRecordArray;
    // }
    // else if (newRecordArray[1] > object.highScores.third[1]) {
    //     object.highScores.third = newRecordArray
    // }
   


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
    if (targetElId === "sub-btn") {
        lastPlayer = document.querySelector("input").value;
        var newRecordArray = [lastPlayer, userScore];
        updateHighScores (newRecordArray);
        console.log("BA BA Ba 999 !!!!")
    }
    if (targetElId === "initials-input") {
       
        console.log("HA HA HA!!!!")
    }
    
    else if (object.gameState === "resultsAndDetails") {
        console.log(object.gameState, "Yeeee Haw!");
        object.gameState = "highScores";
        drawPage(object.gameState);
    }
}


footerEl.addEventListener("click", startStop);

mainEl.addEventListener("click", quizResponseHandler)

