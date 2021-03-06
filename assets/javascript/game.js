const questions = [{
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

let userAnswer = "";

var winCounter = 0;
var lossCounter = 0;

function questionDisplay(i) {
    console.log(questions[i])
    let question = questions[i].q;
    
    $("#questionDiv").append(question)
}

function isTrue(string) {
    if (string == "t") {
        console.log("true");
        return true;

    } else if (string == "f") {
        console.log("false");
        return false;

    }
}
function questionPicker(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkAnswer(ans, i) {
    if(ans == questions[i].a) {
        console.log(ans)
        console.log("one more win!");
        winCounter++;
        
    } else if (ans !== questions[i].a) {
        console.log(ans)
        console.log(questions[i].a)
        console.log("one more loss!");
        lossCounter++;
        
    }
    $("#questionDiv").empty();

    triviaRound();
}
$("#startButton").on("click", function (event) {
    startGame();
})

function triviaRound() {

    let l = questionPicker(0, questions.length - 1);

    questionDisplay(l)

    document.onkeyup = function (event) {
        userAnswer = event.key;
        console.log(userAnswer);
        userAnswer = isTrue(userAnswer);
        checkAnswer(userAnswer, l);
    }

    
}

function endGame() {
    $("#answers").append("Correct Answers: " + winCounter);
    $("#answers").append("Wrong Answers: " + lossCounter);
    $("#questionDiv").text("Care to play again? Just hit the button!");

    
    $("#startButton").show();

}
function startGame() {
    setTimeout(endGame, 1000 * 10);
    
    console.log("you started the game!")
    $("#startButton").hide();

    
    triviaRound();
    
}

