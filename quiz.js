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
    const popup = document.getElementById("popup");

    let questions = [
        {
            question : "How many champions are there in League of Legends?",
            choiceA : "163",
            choiceB : "158",
            choiceC : "161",
            choiceD : "165",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the rune in the picture below called?",
            choiceA : "Conditioning",
            choiceB : "Overgrowth",
            choiceC : "Bone Plating",
            choiceD : "Unflinching",
            correct : "B",
            img : "imgs/Rune_Overgrowth.webp"
        },{
            question : "Which champions says: 'The heart is the strongest muscle'?",
            choiceA : "Braum",
            choiceB : "Viego",
            choiceC : "Janna",
            choiceD : "Sett",
            correct : "A",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the utlimate ability of Kha'Zix called?",
            choiceA : "Void Rush",
            choiceB : "On the Hunt",
            choiceC : "Vanguard's Edge",
            choiceD : "Void Assault",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "To what champion does this ability icon belong?",
            choiceA : "Yorick",
            choiceB : "Vex",
            choiceC : "Cassiopea",
            choiceD : "Varus",
            correct : "D",
            img : "imgs/q5.webp"
        },{
            question : "How much gold does this item cost?",
            choiceA : "2600",
            choiceB : "2700",
            choiceC : "2900",
            choiceD : "3000",
            correct : "B",
            img : "imgs/q6.webp"
        },{
            question : "What was the most banned champion in Worlds 2021",
            choiceA : "Irelia",
            choiceB : "Lucian",
            choiceC : "Miss Fortune",
            choiceD : "Lee Sin",
            correct : "A",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "Which champion was not released in 2009?",
            choiceA : "Lee Sin",
            choiceB : "Ezreal",
            choiceC : "Fiddlesticks",
            choiceD : "Gankgplank",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the most populated elo in Solo Q ranked League of Legends?",
            choiceA : "Iron",
            choiceB : "Bronze",
            choiceC : "Silver",
            choiceD : "Gold",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How much gold does this item cost?",
            choiceA : "2600",
            choiceB : "2800",
            choiceC : "2900",
            choiceD : "3000",
            correct : "D",
            img : "imgs/q10.webp"
        },{
            question : "What champion got reworked most recently?",
            choiceA : "Fiddlesticks",
            choiceB : "Dr Mundo",
            choiceC : "Udyr",
            choiceD : "Tahm Kench",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How many champions were there originally in League of Legends?",
            choiceA : "40",
            choiceB : "36",
            choiceC : "50",
            choiceD : "24",
            correct : "A",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the champion that has recorded the highest mastery points by a single player on a single account?",
            choiceA : "Yasuo",
            choiceB : "Riven",
            choiceC : "Ashe",
            choiceD : "Heimerdinger",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the rune in the picture below called?",
            choiceA : "Relentless Hunter",
            choiceB : "Bloody Teeth",
            choiceC : "Taste of Blood",
            choiceD : "Ravenous Hunter",
            correct : "D",
            img : "imgs/q14.webp"
        },{
            question : "What is Gangplank's W ability called?",
            choiceA : "Citrus Fruit",
            choiceB : "Citric Cleanse",
            choiceC : "Remove Scurvy",
            choiceD : "Oranges",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "Who has the only pentakill in a worlds final?",
            choiceA : "TheShy",
            choiceB : "Bin",
            choiceC : "Uzi",
            choiceD : "Scout",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion got the only pentakill in a worlds final?",
            choiceA : "Aatrox",
            choiceB : "Fiora",
            choiceC : "Irelia",
            choiceD : "Jayce",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "Who won 2016 worlds MVP?",
            choiceA : "Bang",
            choiceB : "Uzi",
            choiceC : "Faker",
            choiceD : "Wolf",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "At what level can Ornn start upgrading ally items?",
            choiceA : "16",
            choiceB : "15",
            choiceC : "13",
            choiceD : "14",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the item in the picture below called?",
            choiceA : "Mercurial Scimitar",
            choiceB : "Ironspike Whip",
            choiceC : "Summoner's Scythe",
            choiceD : "Spectral Sickle",
            correct : "D",
            img : "imgs/q20.webp"
        },{
            question : "How much does this item cost?",
            choiceA : "415",
            choiceB : "435",
            choiceC : "400",
            choiceD : "450",
            correct : "B",
            img : "imgs/q21.webp"
        },{
            question : "What is the champion with most skins in League of Legends?",
            choiceA : "Lux",
            choiceB : "Ezreal",
            choiceC : "Miss Fortune",
            choiceD : "Yasuo",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion has the highest base AD(attack damage)?",
            choiceA : "Ornn",
            choiceB : "Renekton",
            choiceC : "Tryndamere",
            choiceD : "Gnar",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion has the lowest base AD(attack damage) at level 1?",
            choiceA : "Orianna",
            choiceB : "Lulu",
            choiceC : "Sona",
            choiceD : "Ivern",
            correct : "A",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How many tier 2 boots are there in the game?",
            choiceA : "5",
            choiceB : "8",
            choiceC : "6",
            choiceD : "7",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How much does this item cost?",
            choiceA : "2100",
            choiceB : "2200",
            choiceC : "2300",
            choiceD : "2400",
            correct : "C",
            img : "imgs/q26.webp"
        },{
            question : "What is the highest win rate dragon soul as of patch 12.17?",
            choiceA : "Hextech Soul",
            choiceB : "Cloud Soul",
            choiceC : "Infernal Soul",
            choiceD : "Mountain Soul",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the highest number of drakes killed in a Plat or higher ranked game?",
            choiceA : "9",
            choiceB : "12",
            choiceC : "8",
            choiceD : "11",
            correct : "A",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How much does this item cost?",
            choiceA : "450",
            choiceB : "400",
            choiceC : "500",
            choiceD : "350",
            correct : "A",
            img : "imgs/q29.webp"
        },{
            question : "What was the most banned champion in MSI 2022?",
            choiceA : "Gwen",
            choiceB : "Wukong",
            choiceC : "Leblanc",
            choiceD : "Lucian",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How many champions are there that begin with the letter A?",
            choiceA : "9",
            choiceB : "11",
            choiceC : "12",
            choiceD : "13",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How much does this item cost?",
            choiceA : "300",
            choiceB : "500",
            choiceC : "650",
            choiceD : "800",
            correct : "D",
            img : "imgs/q32.webp"
        },{
            question : "To what champion does the ability 'Cease and Desist' belong?",
            choiceA : "Viego",
            choiceB : "Zilean",
            choiceC : "Vi",
            choiceD : "Ekko",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion has the most pentakills per game?",
            choiceA : "Katarina",
            choiceB : "Master Yi",
            choiceC : "Samira",
            choiceD : "Yasuo",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion has the highest afk rate?",
            choiceA : "Aurelion SOl",
            choiceB : "Yasuo",
            choiceC : "Jax",
            choiceD : "Master Yi",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion has the highest recorded ban-rate ever of 99.55%?",
            choiceA : "Kassadin",
            choiceB : "Master YI",
            choiceC : "Zed",
            choiceD : "Rengar",
            correct : "A",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What region has the highest surrender rate?",
            choiceA : "NA",
            choiceB : "EUNE",
            choiceC : "Japan",
            choiceD : "Korea",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "To what champion does the ability 'Voice of Light' belong?",
            choiceA : "Seraphine",
            choiceB : "Lux",
            choiceC : "Aurelion Sol",
            choiceD : "Soraka",
            correct : "C",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion says 'Careful. I'm a biter'?",
            choiceA : "Warwick",
            choiceB : "Evelynn",
            choiceC : "Trundle",
            choiceD : "Ahri",
            correct : "B",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What is the melee champion wiht the longest attack range",
            choiceA : "Irelia",
            choiceB : "Kled",
            choiceC : "Nilah",
            choiceD : "Rengar",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "How much does this item cost?",
            choiceA : "2500",
            choiceB : "2600",
            choiceC : "2700",
            choiceD : "2800",
            correct : "D",
            img : "imgs/q41.webp"
        },{
            question : "What champion is the most played champion in pro play history?",
            choiceA : "Braum",
            choiceB : "Ezreal",
            choiceC : "Lee Sin",
            choiceD : "Thresh",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },{
            question : "What champion is the most banned champion in pro play history?",
            choiceA : "Ryze",
            choiceB : "Leblanc",
            choiceC : "Camille",
            choiceD : "Thresh",
            correct : "D",
            img : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        }
    ];
    let score=0;
    let startDate = new Date('09/17/2022');
    let today = new Date();

    const days = (startDate, today) =>{
        let difference = today.getTime() - startDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)-1);
        return TotalDays;
    }
    let currentQuestion = (days(startDate,today))%43+1-1;
    let tmrw = new Date();
    tmrw.setDate(today.getDate()+1);
    tmrw.setHours(0);
    tmrw.setMinutes(0);
    tmrw.setSeconds(0);
    let players = [];
    let lp = [];

    function getEloEmblem(){
      
            if(userElo<800){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Iron2.png' alt='hello'/>";   
            }else if(userElo<1600){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Bronze2.png' alt='hello'/>";
            }else if(userElo<2000){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Silver2.png' alt='hello'/>";
            } else if(userElo<2200){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Gold2.png' alt='hello'/>";
            }else if(userElo<2400){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Platinum2.png' alt='hello'/>";
            }else if(userElo<2600){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Diamond2.png' alt='hello'/>";
            }else if(userElo<2800){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Master.png' alt='hello'/>";
            }else if(userElo<3000){
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Grandmaster2.png' alt='hello'/>";
            }else{
                elo.innerHTML = "<h1>Your Elo</h1><h2>"+userElo+"LP</h2><img src='imgs/Emblem_Challenger2.png' alt='hello'/>";
            }
        
    }

    let streak;
    let userElo;
    let answered;
    let lastDay;
    let lastMonth;
    let lastYear;
    let nOfCorrect;
    let nOfWrong;
    let highElo;


    function load() {
        $.getJSON('leaderboard.json', function(data) {
            for(let i = 0;i<10;i++){
                players[i] = (data.ranks[i]);
            }
            for(let i = 0;i<10;i++){
                lp[i] = (data.lp[i]);
            }
            
            drawTable();
        });
    }

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

    function getDiffAnswers(){
        if(localStorage.getItem('correct') === null){
            localStorage.setItem('correct', JSON.stringify('0'));
            nOfCorrect= '0';
        }else {
            nOfCorrect = JSON.parse(localStorage.getItem('correct'));
        }

        if(localStorage.getItem('wrong') === null){
            localStorage.setItem('wrong', JSON.stringify('0'));
            nOfWrong= '0';
        }else {
            nOfWrong = JSON.parse(localStorage.getItem('wrong'));
        }
        if(localStorage.getItem('highelo') === null){
            localStorage.setItem('highelo', JSON.stringify('1200'));
            highElo= '0';
        }else {
            highElo = JSON.parse(localStorage.getItem('highelo'));
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
        }
    }

    function drawTable() {
        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = '5px solid black';
        let titles = [
            ["Rank","User","Elo","Leagdle Points"],
            [1,players[0],"Challenger",lp[0]],
            [2,players[1],"Challenger",lp[1]],
            [3,players[2],"Challenger",lp[2]],
            [4,players[3],"Challenger",lp[3]],
            [5,players[4],"Challenger",lp[4]],
            [6,players[5],"Challenger",lp[5]],
            [7,players[6],"Challenger",lp[6]],
            [8,players[7],"Challenger",lp[7]],
            [9,players[8],"Challenger",lp[8]],
            [10,players[9],"Challenger",lp[9]],
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
                td.style.border = '5px solid black'; 
            }
        }
        leaderboard.appendChild(tbl);
      }

    function setChoice(choice){
        localStorage.setItem('choice', JSON.stringify(choice));
    }

    function updateElo(outcome){
        let net = 0;
        if(outcome == 'W'){
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
        if(userElo>highElo){
            highElo = userElo;
            localStorage.setItem('highelo', JSON.stringify(userElo));
        }
        getEloEmblem();
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
            nOfCorrect++;
            localStorage.setItem('correct', JSON.stringify(nOfCorrect));

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
            nOfWrong+=1;
            localStorage.setItem('wrong', JSON.stringify(nOfWrong));
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

    load();
    leaderboard.innerHTML = "<h1>Leaderboard</h1>";
    //drawTable();
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
    getDiffAnswers();
    popup.style.display = "none";


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


    document.getElementById("info").addEventListener("click", function (){
        popup.style.display = "block";
        popup.innerHTML = "<a id='close' href='#'>X</a><p>Leagdle is a multiple choice game related to League of Legends. Every day, a new question is asked, and can be answered only once. The questions are based an various aspects of League of Legends, such as champion or rune information, or even on known tournaments such as Worlds and MSI. There is also the ranking system, called elo. Every time you get an answer right, you get LP(Leagdle Points), and when you get one wrong, you lose LP. LP gains and losses are affected by streaks of right or wrong asnwers. Get top 10LP to get on the leaderboard. GLHF!  <p>";
    })
    document.getElementById("about").addEventListener("click", function (){
        popup.style.display = "block";
        popup.innerHTML = "<a id='close' href='#'>X</a><h3>Leaglde is a fan made project unrelated to Riot Games Inc. ©<br> The game is heavily inspired by Wordle as well as Loldle. Data comes from Lol Fandom's database, and questions are personally written.<br>For feedback, dm me on instagram. Thanks for playing! Luko<h3>";
    })
    document.getElementById("stats").addEventListener("click", function (){
        popup.style.display = "block";
        popup.innerHTML = "<a id='close' href='#'>X</a><h2 >Current LP: "+ userElo+"<br>Highest LP: "+highElo+"<br>Streak: "+streak+"<br>Correct Answers: "+nOfCorrect+"<br>Wrong Answers:"+nOfWrong+ "</h2>";
    })

})
