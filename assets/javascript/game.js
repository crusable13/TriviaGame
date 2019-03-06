var questions = [ {
    q: "Gordon Ramsay used to be a soccer player?",
    a: true
}, {
    q: "Django Unchained won best supporting actor?",
    a: true
}, {
    q: "America is a state sponsor of Terrorism?",
    a: true
}, {
    q: "The Earth is flat?",
    a: false
}, {
    q: "Christianity is the source of all good in the western world?",
    a: false
}, {
    q: "The first amendment gives you the RIGHT TO BEAR ARMS?",
    a: false
}, {
    q: "China hacked the 2016 election?",
    a: false
}, {
    q: "The new Game of Thrones season is over hyped?",
    a: true
}, {
    q: "Freedom is free?",
    a: false
}, {
    q: "Karl Marx was a Stalinist Marxist?",
    a: false
}, {
    q: "South Africa is a dying Nation?",
    a: false
}
]

console.log(questions[10].a)

function questionDisplay(array, i) {
    let question = array[i].q;
    $("#questionDiv").append(question)
}

function questionPicker(min,max) 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$("#startButton").on("click", function(event){
        startGame();
    })


function startGame() {
    // setTimeout(endGame, 1000 * 60);
    console.log("yous started the game!")
    $("#startButton").hide();

    questionDisplay(questions, questionPicker(0,questions.length))
}