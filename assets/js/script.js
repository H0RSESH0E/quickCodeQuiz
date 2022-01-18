// switch case to check display object state

var object = {

    displayState: {
        titleCard: [],
        newGame: [],
        countDown: [],
        gamePlay:[],
        resultsAndDetails: [],
        highScores: []
    },

    gameStates: {
        titleCard: [],
        newGame: [],
        countDown: [],
        gamePlay:[],
        resultsAndDetails: [],
        highScores: []
    },

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