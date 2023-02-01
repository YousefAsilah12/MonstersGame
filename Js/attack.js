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



let currentTurn = checkFirstStart(monster1, player1);



function updateLifeHtml() {
    playerHealth.innerText = player1.life;
    monsterHealth.innerText = monster1.life;
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
        alert("monster Died");
        // update Xp and gold collected for player
        // go to other page 
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
        alert("game Over");
        // GAME OVER FUNCTION ask the user if play again --- respawn? or exit game. restart
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
    debugger;
    const rnd1 = Math.floor(Math.random() * 20) + 1;
    const rnd2 = Math.floor(Math.random() * 20) + 1;
    const pWIthDex = rnd1 + player.dexterity;
    const MWIthDex = rnd2 + monster.dexterity;
    if (pWIthDex > MWIthDex) {
        return "player";
    }
    return "monster";
}

attackBtn.addEventListener("click", () => {
    attack(currentTurn);
});
