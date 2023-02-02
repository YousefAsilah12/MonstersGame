import {
    monster1,
    monsters
} from "./monster.js";
import {
    player1
} from "./player.js";

import {
    runBtn,
    attackBtn,
    playerName,
    playerHealth,
    playerLvl,
    monsterName,
    monsterHealth,
    monsterLvl,
} from "./input.js";


console.log(monsters);
let currentTurn = checkFirstStart(player1, monster1);
playerName.innerText = player1.name;
monsterName.innerText = monster1.name;
monsterHealth.innerText = monster1.life;
playerHealth.innerText = player1.life;



function updateLifeHtml() {
    playerHealth.innerText = player1.life;
    monsterHealth.innerText = monster1.life;
}

function updateXPandGold() {
    player1.currentXP += monster1.rewardXP;
    player1.gold += monster1.gold;
}


// playerAttack & monsterAttack functions calculating The damage and updating life.
function playerAttack() {
    const rnd = Math.floor(Math.random() * 20) + 1;
    let score = (player1.strength + rnd) * player1.lvl;
    score = score - monster1.defense <= 0 ? 0 : score - monster1.defense;
    // console.log("score", score);
    // console.log("monster1 1", monster1.life);
    const res = monster1.life - score;
    // console.log("res", res);
    if (res > 0) {
        monster1.life = res;
        // console.log("monster1 2", monster1.life);
        updateLifeHtml();
        currentTurn = "monster";
    } else {

        console.log("monster died!");
        updateXPandGold();
        console.log("player gold", player1.gold);
        console.log("player XP", player1.currentXP);
        winnerAlert(player1.name, player1.currentXP, player1.gold);
        
        
        
        // updateXp for player
        // go back to map
        // update gold collected
        //
    }
}

function monsterAttack() {
    const rnd = Math.floor(Math.random() * 20) + 1;
    let score = (monster1.strength + rnd) * monster1.lvl;
    score = score - player1.defense <= 0 ? 0 : score - player1.defense;;
    const res = monster1.life - score;
    if (res > 0) {
        player1.life = res;
        updateLifeHtml();
        currentTurn = "player";
    } else {
        loserAlert();
    }
}

function attack(currentTurn) {
    if (currentTurn === "player") {
        playerAttack();
    } else if (currentTurn === "monster") {
        monsterAttack();
    }
}

function combatStart() {
    let currentTurn = checkFirstStart();
    attack(currentTurn);
    //   checkDefeat();
}

function checkFirstStart(monster, player) {
    const rnd1 = Math.floor(Math.random() * 20) + 1;
    const rnd2 = Math.floor(Math.random() * 20) + 1;
    const pWIthDex = rnd1 + player.dexterity;
    const MWIthDex = rnd2 + monster.dexterity;
    if (pWIthDex > MWIthDex) {
        return "player";
    }
    return "monster";
}
if (currentTurn === "monster") {
    attackBtn.textContent = 'Monster Attack'
} else {
    attackBtn.textContent = 'Player Attack'
};


attackBtn.addEventListener("click", () => {
    document.querySelector(".contract-info").style.display = "none";
    animateCharacter();
      // Code to continue after the animation ends
      attack(currentTurn);
      if (currentTurn === "monster") {
        attackBtn.textContent = 'Monster Attack'
    } else {
        attackBtn.textContent = 'Player Attack'
    }



});
//
runBtn.addEventListener("click", () => {
    loserAlert();
    window.location.href = "locations.html";
})
//animate the charcater
function animateCharacter() {
    document.querySelector("#left").style.animation = "";
    document.querySelector("#right").style.animation = "";
    setTimeout(function() {
      document.querySelector("#left").style.animation =
        "walkLeft 1s ease-in-out forwards, walkBackLeft 1s ease-in-out 1s forwards";
      document.querySelector("#right").style.animation =
        "walkRight 1s ease-in-out forwards, walkBackRight 1s ease-in-out 1s forwards";
    }, 0);

    setTimeout(function() {
        // let img= document.createElement("img");
        // img.src = "/imgs/fight.png"
        // img.classList.add("fight-img");
        // document.querySelector(".middle").appendChild(img);
        var audio = new Audio("/sounds/sword.mp3");
        audio.play();
        
        setTimeout(function() {
            // img.remove();
            
        }, 1200);
      }, 500);
}

// winnerAlert
function winnerAlert(winner,xp,gold){
    document.querySelector(".player-name").innerText=winner;
    document.querySelector(".xp").innerText=xp;
    document.querySelector(".gold").innerText=gold;
    document.querySelector(".alert-container").style.display = "block";
    document.querySelector(".alrt-win").style.display = "block";
    document.querySelector(".alert-lose").style.display = "none";
    
}
function loserAlert(){
    document.querySelector(".alert-container").style.display = "block";
    document.querySelector(".alrt-win").style.display = "none";
    document.querySelector(".alert-lose").style.display = "block";
    
    window.location.href = "startGame.html";

    

}
// alertPlatAgain
document.querySelector(".play-again-button").addEventListener("click", () => {
    window.location.reload();

})
// alertbackToMenue
document.querySelector(".back-to-main-button").addEventListener("click", () => {
    window.location.href = "locations.html";
})