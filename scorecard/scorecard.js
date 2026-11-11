let homeScore = document.getElementById("Home-scoreboard");

let guestScore = document.getElementById("Guest-scoreboard");

function homeplus1(){
 homeScore.innerHTML= Number(homeScore.innerHTML)+1;   
}

function homeplus2(){
 homeScore.innerHTML= Number(homeScore.innerHTML)+2;   
}

function homeplus3(){
 homeScore.innerHTML= Number(homeScore.innerHTML)+3;   
}

function homeNewGame(){
    homeScore.innerHTML= 0; 
}


function guestplus1(){
    guestScore.innerHTML=Number(guestScore.innerHTML)+1;
}

function guestplus2(){
    guestScore.innerHTML=Number(guestScore.innerHTML)+2;
}

function guestplus3(){
    guestScore.innerHTML=Number(guestScore.innerHTML)+3;
}

function guestNewGame(){
    guestScore.innerHTML= 0; 
}



 /*const scoreboards = {
    home: document.getElementById("Home-scoreboard"),
    guest: document.getElementById("Guest-scoreboard")
};

const scores = {
    home: 0,
    guest: 0
};

function updateScoreboard(team) {
    scoreboards[team].textContent = scores[team];
}

function addPoints(team, points) {
    scores[team] += points;
    updateScoreboard(team);
}

function resetScore(team) {
    scores[team] = 0;
    updateScoreboard(team);
}

function newGame() {
    resetScore("home");
    resetScore("guest");
}*/