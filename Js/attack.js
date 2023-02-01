import { monster1 } from "./monster.js";
import { player1 } from "./player.js";

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



let currentTurn = checkFirstStart(player1, monster1);
playerName.innerText=player1.name;
monsterName.innerText=monster1.name;
monsterHealth.innerText=monster1.life;
playerHealth.innerText=player1.life;



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
        alert("GAME OVER");

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
        alert("GAME OVER");
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
if(currentTurn === "monster"){
  attackBtn.textContent = 'Monster Attack'
} else { attackBtn.textContent = 'Player Attack'};


attackBtn.addEventListener("click", () => {
    attack(currentTurn);
    if(currentTurn === "monster"){
      attackBtn.textContent = 'Monster Attack'
    } else { attackBtn.textContent = 'Player Attack'}
});
