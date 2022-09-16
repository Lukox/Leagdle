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
    const stats = document.getElementById("stats");
    const info = document.getElementById("info");
    const about = document.getElementById("about");

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
            img : "imgs/Rune_Overgrowth.webp"
        }
    ];

    let score=0;
    let startDate = new Date('09/15/2022');
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

    function getEloEmblem(){
      
            if(userElo<800){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Iron2.png' alt='hello'/>";   
            }else if(userElo<1600){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Bronze2.png' alt='hello'/>";
            }else if(userElo<2000){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Silver2.png' alt='hello'/>";
            } else if(userElo<2200){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Gold2.png' alt='hello'/>";
            }else if(userElo<2400){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Platinum2.png' alt='hello'/>";
            }else if(userElo<2600){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Diamond2.png' alt='hello'/>";
            }else if(userElo<2800){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Master.png' alt='hello'/>";
            }else if(userElo<3000){
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Grandmaster2.png' alt='hello'/>";
            }else{
                elo.innerHTML = "<h1>Your Elo</h1><h2>1200LP</h2><img src='imgs/Emblem_Challenger2.png' alt='hello'/>";
            }
        
    }

    function drawTable() {
        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = '2px solid white';
        let titles = [
            ["Rank","User","Elo","Leagdle Points"],
            [1,"Lukox","Challenger","1500"],
            [2,"Szymon","Challenger","1500"],
            [3,"Luko","Challenger","1500"],
            [4,"Luko","Challenger","1500"],
            [5,"Luko","Challenger","1500"],
            [6,"Luko","Challenger","1500"],
            [7,"Luko","Challenger","1500"],
            [8,"Luko","Challenger","1500"],
            [9,"Luko","Challenger","1500"],
            [10,"Luko","Challenger","1500"],
        ];
      
        for (let i = 0; i < 11; i++) {
            const tr = tbl.insertRow(); 
            for (let j = 0; j < 4; j++) {
                const td = tr.insertCell();
                if(j==2 && i > 0){
                    td.innerHTML="<img src='imgs/Emblem_Challenger.png' alt='hello'/>";
                }else{
                    td.appendChild(document.createTextNode(titles[i][j]));  
                }      
                td.style.border = '2px solid white'; 
            }
        }
        leaderboard.appendChild(tbl);
      }

    let streak;
    let userElo;
    let answered;
    let lastDay;
    let lastMonth;
    let lastYear;

    function getStreak(){
        if(localStorage.getItem('streak') === null){
            localStorage.setItem('streak', JSON.stringify(0));
            streak = 0;
        }else {
            streak = JSON.parse(localStorage.getItem('streak'));
        }
    }

    function getElo(){
        if(localStorage.getItem('elo') === null){
            localStorage.setItem('elo', JSON.stringify(1200));
            userElo = 1200;
        }else {
            userElo = JSON.parse(localStorage.getItem('elo'));
        }
    }

    function getAnswered(){
        if(localStorage.getItem('answered') === null){
            localStorage.setItem('answered', JSON.stringify('false'));
            answered= 'false';
        }else {
            answered = JSON.parse(localStorage.getItem('answered'));
        }
    }

    function getLastDate(){
        if(localStorage.getItem('day') === null){
            let tod = new Date();
            let todDay = tod.getDate();
            let todMon = tod.getMonth();
            let todYear = tod.getFullYear();
            localStorage.setItem('day',todDay,);
            localStorage.setItem('mon',todMon,);
            localStorage.setItem('year',todYear,);
        }else {
            lastDay = JSON.parse(localStorage.getItem('day'));
            lastMonth = JSON.parse(localStorage.getItem('mon'));
            lastYear = JSON.parse(localStorage.getItem('year'));
            //console.log(lastDate);
        }
    }


    function setChoice(choice){
        localStorage.setItem('choice', JSON.stringify(choice));
    }

    function updateElo(outcome){
        let net = 0;
        if(outcome == 'L'){
            net = 30+streak;
        }else{
            net = -30+streak;
        }
        if(streak>9){
            net = net + 20;
        }else if(streak>4){
            net = net +10;
        }else if(streak>2){
            net = net +5;
        }else if(streak<-2){
            net = net -5;
        }else if(streak<-4){
            net = net -10;
        }else if(streak<-9){
            net = net -20;
        }
        userElo = userElo + net;
        if(userElo<0){
            userElo = 0;
        }
        localStorage.setItem('elo', JSON.stringify(userElo));
    }

    function getQuestion(){
        if(answered == 'false'){
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
        }else{
            checkAnswer(JSON.parse(localStorage.getItem('choice')));
        }
        
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
        if(JSON.parse(localStorage.getItem('answered')) == 'false'){
            updateElo('W');
            if(streak<0){
                streak = 0;
            }else{
                streak=streak+1;
            }
        }
        localStorage.setItem('streak', JSON.stringify(streak));
        let q = questions[currentQuestion];
        game.style.display = "block";
        //img.innerHTML = "<img src="+ q.imgSrc +">";
        question.innerHTML = "<p>"+ q.question +"</p>";
        answerA.innerHTML = q.choiceA;
        answerB.innerHTML = q.choiceB;
        answerC.innerHTML = q.choiceC;
        answerD.innerHTML = q.choiceD;
        qImg.innerHTML = "<img src="+q.img+" alt=''>";
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
    }

    function wrongAnswer(answer){
        if(JSON.parse(localStorage.getItem('answered')) == 'false'){
            updateElo('L');
            if(streak>0){
                streak = 0;
            }else{
                streak=streak-1;
            }
        }
        localStorage.setItem('streak', JSON.stringify(streak));
        let q = questions[currentQuestion];
        game.style.display = "block";
        question.innerHTML = "<p>"+ q.question +"</p>";
        qImg.innerHTML = "<img src="+q.img+" alt=''>";
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
        localStorage.setItem('answered', JSON.stringify('true'));
    }

    function reset(){
        let tod = new Date();
        let todDay = tod.getDate();
        let todMon = tod.getMonth();
        let todYear = tod.getFullYear();
        localStorage.setItem('day',todDay,);
        localStorage.setItem('mon',todMon,);
        localStorage.setItem('year',todYear,);
        answerA.style.backgroundColor="gray";
        answerB.style.backgroundColor="gray";
        answerC.style.backgroundColor="gray";
        answerD.style.backgroundColor="gray";
        localStorage.setItem('answered', JSON.stringify('false'));
    }

    leaderboard.innerHTML = "<h1>Leaderboard</h1>";
    drawTable();
    getLastDate();
    if(lastDay == today.getDate() && lastMonth == today.getMonth() && lastYear == today.getFullYear()){
        getStreak();
        getElo();
        getAnswered();
        getQuestion();
    }else{
        reset();
        getStreak();
        getElo();
        getAnswered();
        getQuestion();
    }
    getEloEmblem();


    document.getElementById("A").addEventListener("click", function (){
        setChoice('A');
        checkAnswer("A");
    });document.getElementById("B").addEventListener("click", function (){
        setChoice('B');
        checkAnswer("B");
    });document.getElementById("C").addEventListener("click", function (){
        setChoice('C');
        checkAnswer("C");
    });document.getElementById("D").addEventListener("click", function (){
        setChoice('D');
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

})
