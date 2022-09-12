document.addEventListener("DOMContentLoaded", () => {


    const game = document.getElementById("game");
    const question = document.getElementById("question");
    const qImg = document.getElementById("qImg");
    const choiceA = document.getElementById("A");
    const choiceB = document.getElementById("B");
    const choiceC = document.getElementById("C");
    const choiceD = document.getElementById("D");
    const answerA = document.getElementById("AA");
    const answerB = document.getElementById("BB");
    const answerC = document.getElementById("CC");
    const answerD = document.getElementById("DD");
    const choices = document.getElementById("choices");
    const answers = document.getElementById("answers");
    const img = document.getElementById("qImg");


    let questions = [
        {
            question : "How many champions are there in League of Legends?",
            //imgSrc : "tick.jpg",
            choiceA : "163",
            choiceB : "158",
            choiceC : "161",
            choiceD : "165",
            correct : "C"
        },{
            question : "What is the ability/passive in the picture below called?",
            //imgSrc : "img/html.png",
            choiceA : "160",
            choiceB : "158",
            choiceC : "162",
            choiceD : "165"
        }
    ];

    let currentQuestion = 0;
    let score=0;

    function getQuestion(){
        choices.style.display = "block";
        //img.style.display = "none";
        let q = questions[currentQuestion];
        question.innerHTML = "<p>"+ q.question +"</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
        game.style.display = "block";
    }

    function correctAnswer(answer){
        let q = questions[currentQuestion];
        //img.innerHTML = "<img src="+ q.imgSrc +">";
        answerA.innerHTML = q.choiceA;
        answerB.innerHTML = q.choiceB;
        answerC.innerHTML = q.choiceC;
        answerD.innerHTML = q.choiceD;
        choices.style.display = "none";
        answers.style.display = "block";
        //img.style.display = "block";
    }

    function checkAnswer(answer){
        if( answer == questions[0].correct){
            // answer is correct
            score++;
            correctAnswer(answer);
        }else{
            score--;
            wrongAnswer();
        }
        console.log(score);
        //currentQuestion++;
    }

    getQuestion();

    document.getElementById("A").addEventListener("click", function (){
        checkAnswer("A");
    });document.getElementById("B").addEventListener("click", function (){
        checkAnswer("B");
    });document.getElementById("C").addEventListener("click", function (){
        checkAnswer("C");
    });document.getElementById("D").addEventListener("click", function (){
        checkAnswer("D");
    });

})
