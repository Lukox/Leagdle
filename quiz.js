document.addEventListener("DOMContentLoaded", () => {


    const game = document.getElementById("game");
    const question = document.getElementById("question");
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
    const qImg = document.getElementById("qImg");
    const leaderboard = document.getElementById("leaderboard");
    const elo = document.getElementById("elo");

    let questions = [
        {
            question : "How many champions are there in League of Legends?",
            //imgSrc : "tick.jpg",
            choiceA : "163",
            choiceB : "158",
            choiceC : "161",
            choiceD : "165",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the rune in the picture below called?",
            //imgSrc : "img/html.png",
            choiceA : "Conditioning",
            choiceB : "Overgrowth",
            choiceC : "Bone Plating",
            choiceD : "Unflinching",
            correct : "B",
            img : "Rune_Overgrowth.webp"
        }
    ];

    let score=0;
    let startDate = new Date('09/12/2022');
    let today = new Date();

    const days = (startDate, today) =>{
        let difference = today.getTime() - startDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)-1);
        return TotalDays;
    }
    let currentQuestion = days(startDate,today)-1;
    let tmrw = new Date();
    tmrw.setDate(today.getDate()+1);
    tmrw.setHours(0);
    tmrw.setMinutes(0);
    tmrw.setSeconds(0);

    leaderboard.innerHTML = "<h1>Leaderboard</h1>";
    elo.innerHTML = "<h1>Your Elo</h1>";


    function getQuestion(){
        choices.style.display = "block";
        //img.style.display = "none";
        let q = questions[currentQuestion];
        question.innerHTML = "<p>"+ q.question +"</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
        qImg.innerHTML = "<img src="+q.img+" alt=''>";
        game.style.display = "block";
    }

    function getTimeLeft(tmrw){
        const total = Date.parse(tmrw) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function correctAnswer(answer){
        let q = questions[currentQuestion];
        //img.innerHTML = "<img src="+ q.imgSrc +">";
        answerA.innerHTML = q.choiceA;
        answerB.innerHTML = q.choiceB;
        answerC.innerHTML = q.choiceC;
        answerD.innerHTML = q.choiceD;
        if(answer == 'A'){
            answerA.style.backgroundColor="green";
        }
        if(answer == 'B'){
            answerB.style.backgroundColor="green";
        }
        if(answer == 'C'){
            answerC.style.backgroundColor="green";
        }
        if(answer == 'D'){
            answerD.style.backgroundColor="green";
        }
        choices.style.display = "none";
        answers.style.display = "block";
        //img.style.display = "block";
    }

    function wrongAnswer(answer){
        let q = questions[currentQuestion];
        //img.innerHTML = "<img src="+ q.imgSrc +">";
        answerA.innerHTML = q.choiceA;
        answerB.innerHTML = q.choiceB;
        answerC.innerHTML = q.choiceC;
        answerD.innerHTML = q.choiceD;
        if(q.correct == 'A'){
            answerA.style.backgroundColor="green";
        }
        if(q.correct == 'B'){
            answerB.style.backgroundColor="green";
        }
        if(q.correct == 'C'){
            answerC.style.backgroundColor="green";
        }
        if(q.correct == 'D'){
            answerD.style.backgroundColor="green";
        }
        if(answer == 'A'){
            answerA.style.backgroundColor="red";
        }
        if(answer == 'B'){
            answerB.style.backgroundColor="red";
        }
        if(answer == 'C'){
            answerC.style.backgroundColor="red";
        }
        if(answer == 'D'){
            answerD.style.backgroundColor="red";
        }
        choices.style.display = "none";
        answers.style.display = "block";
        //img.style.display = "block";
    }



    function checkAnswer(answer){
        if( answer == questions[currentQuestion].correct){
            // answer is correct
            score++;
            correctAnswer(answer);
        }else{
            score--;
            wrongAnswer(answer);
        }
        //currentQuestion++;
    }

    function reset(){
        answerA.style.backgroundColor="gray";
        answerB.style.backgroundColor="gray";
        answerC.style.backgroundColor="gray";
        answerD.style.backgroundColor="gray";
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

    document.getElementById("AA").addEventListener("click", function (){
        alert("You have already answered the Leagdle today! Come back in "+getTimeLeft(tmrw).hours +"h"+getTimeLeft(tmrw).minutes +"m"+getTimeLeft(tmrw).seconds +"s"+" for the next question.");
    });document.getElementById("BB").addEventListener("click", function (){
        alert("You have already answered the Leagdle today! Come back in "+getTimeLeft(tmrw).hours +"h"+getTimeLeft(tmrw).minutes +"m"+getTimeLeft(tmrw).seconds +"s"+" for the next question.");
    });document.getElementById("CC").addEventListener("click", function (){
        alert("You have already answered the Leagdle today! Come back in "+getTimeLeft(tmrw).hours +"h"+getTimeLeft(tmrw).minutes +"m"+getTimeLeft(tmrw).seconds +"s"+" for the next question.");
    });document.getElementById("DD").addEventListener("click", function (){
        alert("You have already answered the Leagdle today! Come back in "+getTimeLeft(tmrw).hours +"h"+getTimeLeft(tmrw).minutes +"m"+getTimeLeft(tmrw).seconds +"s"+" for the next question.");
    });

    document.getElementById("nextQ").addEventListener("click", function (){
        currentQuestion+=1;
        reset();
        answers.style.display="none";
        //choices.display.style="block";
        getQuestion();
    });

    

})
