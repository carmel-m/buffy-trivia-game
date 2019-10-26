// on page load, 'Trivia' heading and a 'Start' button will load
// click start button to open trivia question list and start countdown timer
// store questions and answers in arrays
// need a countdown timer
// use .hide() and .show() methods (eg. when you click 'start game' the button will hide and qs show

// VARIABLES
// ==========================================================================

// keeps track of answers/scores
var correct = 0;
var incorrect = 0;
var unanswered = 0;
// 
var intervalId;
//
var time = 30;

// keeps track of which number question is being displayed
var counter = 0;

// QUESTIONS ARRAY
var questions = [
    {
        q: "In what year did Buffy first air?",
        a: "2008",
        b: "1997",
        c: "2001",
        d: "1999",
        e: "b"
    },
    {
        q: "Which of the following characters never died?",
        a: "Angel",
        b: "Tara",
        c: "Xander",
        d: "Buffy",
        e: "c"
    },
    {
        q: "What was Anya before she became human?",
        a: "Assassin Demon",
        b: "Mucus Demon",
        c: "Chaos Demon",
        d: "Vengeance Demon",
        e: "d"
    },
    {
        q: "How many principals does Sunnydale High have throughout the series?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        e: "c"
    },
    {
        q: "Who kills Jenny Calendar?",
        a: "Willow",
        b: "Angel",
        c: "Oz",
        d: "Spike",
        e: "b"
    },
    {
        q: "How old was Angel when he became a vampire?",
        a: "26",
        b: "19",
        c: "29",
        d: "22",
        e: "a"
    },
    {
        q: "In which episode does everyone lose their memory?",
        a: "Hell's Bells",
        b: "Out of My Mind",
        c: "Tabula Rasa",
        d: "Once More, With Feeling",
        e: "c"
    },
    {
        q: "What animal is Anya afraid of?",
        a: "Bunnies",
        b: "Goldfish",
        c: "Kittens",
        d: "Hamsters",
        e: "a"
    },
    {
        q: "Which sports team does Xander join at the end of season 2?",
        a: "Tennis",
        b: "Baseball",
        c: "Football",
        d: "Swimming",
        e: "d"
    },
    {
        q: "Where does Buffy work in season 6?",
        a: "Chicken Castle",
        b: "Doublemeat Palace",
        c: "Super Duper Burger",
        d: "Porky Pies",
        e: "b"
    }
];


// FUNCTIONS
// ==============================================================================

// will run when page loads
window.onload = function () {
    $("#start").show();
    $("#image").show();
    $("#time-remaining").hide();
    $("#seconds-left").hide();
    $("#question").hide();
    $("#answer-a").hide();
    $("#answer-b").hide();
    $("#answer-c").hide();
    $("#answer-d").hide();

    $("#done").hide();
    $("#start-again").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    $("#unanswered").hide();
}

// click function for start button
// $("#start").click(startGame);

// function startGame() {

$("#start").on("click", function () {
    nextQ();
    $("#time-remaining").show();
    $("#seconds-left").show();
    $("#question").show();
    $("#answer-a").show();
    $("#answer-b").show();
    $("#answer-c").show();
    $("#answer-d").show();
    $("#start").hide();
    $("#image").hide();
})

// 
function endGame() {
    clearInterval(intervalId);
    $("#correct-total").text(correct);
    $("#incorrect-total").text(incorrect);
    $("#unanswered-total").text(unanswered);

    $("#done").show();
    $("#start-again").show();
    $("#correct").show();
    $("#incorrect").show();
    $("#unanswered").show();

    $("#start").hide();
    $("#image").hide();
    $("#time-remaining").hide();
    $("#seconds-left").hide();
    $("#question").hide();
    $("#answer-a").hide();
    $("#answer-b").hide();
    $("#answer-c").hide();
    $("#answer-d").hide();
}

// when counter = questions.length, end game and show results/gif

// Makes time remaining decrease and move to next question if time runs out
function decrement() {
    time--;
    // console.log(time);
    $("#seconds-left").text(time);

    if (time === 0) {
        nextQ();
        counter++;
        unanswered++;
        console.log(unanswered);
    }
}

// function to display new questions/answer options on page -- needs to run when time runs out, or if player selects an answer
var nextQ = function () {
    if (counter === questions.length) {
        endGame();
    }

    $("#start").hide();
    $("#image").hide();
    $("#time-remaining").show();
    $("#seconds-left").show();
    $("#question").html(questions[counter].q);
    $("#answer-a").html(questions[counter].a);
    $("#answer-b").html(questions[counter].b);
    $("#answer-c").html(questions[counter].c);
    $("#answer-d").html(questions[counter].d);
    clearInterval(intervalId);
    time = 30;
    intervalId = setInterval(decrement, 1000);
}

// function will run whenever option 'a' is clicked on
$("#answer-a").on("click", function () {
    if (questions[counter].e === "a") {
        correct++;
        counter++;
        nextQ();
    } else {
        incorrect++;
        counter++;
        nextQ();
    }
    console.log(counter);
    console.log(correct);
    console.log(incorrect);
})

// function will run whenever option 'b' is clicked on
$("#answer-b").on("click", function () {
    if (questions[counter].e === "b") {
        correct++;
        counter++;
        nextQ();
    } else {
        incorrect++;
        counter++;
        nextQ();
    }
    console.log(counter);
    console.log(correct);
    console.log(incorrect);
})

// function will run whenever option 'c' is clicked on
$("#answer-c").on("click", function () {
    if (questions[counter].e === "c") {
        correct++;
        counter++;
        nextQ();
    } else {
        incorrect++;
        counter++;
        nextQ();
    }
    console.log(counter);
    console.log(correct);
    console.log(incorrect);
})

// function will run whenever option 'd' is clicked on
$("#answer-d").on("click", function () {
    if (questions[counter].e === "d") {
        correct++;
        counter++;
        nextQ();
    } else {
        incorrect++;
        counter++;
        nextQ();
    }
    console.log(counter);
    console.log(correct);
    console.log(incorrect);
})






