let scoreElHome = document.getElementById('score_home')
let scoreElGuest = document.getElementById('score_guest')
//console.log(scoreEl)
let scoreHome = 0
let scoreGuest = 0

//revise

// example
//addScore(scoreHome,3) for +3 point to Home team
//function addScore(team, points) {
//    team += points;
//    scoreEl.textContent = team;
// }



//home
function add1h() {
    scoreHome += 1
    scoreElHome.textContent = scoreHome
}
function add2h() {
    scoreHome += 2
    scoreElHome.textContent = scoreHome
}
function add3h() {
    scoreHome += 3
    scoreElHome.textContent = scoreHome
} 

//Guest
function add1g() {
    scoreGuest += 1
    scoreElGuest.textContent = scoreGuest
}
function add2g() {
    scoreGuest += 2
    scoreElGuest.textContent = scoreGuest
}
function add3g() {
    scoreGuest += 3
    scoreElGuest.textContent = scoreGuest
} 

 
//reset
function reset() {
    scoreGuest = 0
    scoreHome = 0
    scoreElGuest.textContent = scoreGuest
    scoreElHome.textContent = scoreHome
}




