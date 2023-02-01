import {
  monster1
} from "./monster.js";
import {
  player1
} from "./player.js";

import {runBtn,attackBtn,playerName,playerHealth,playerLvl,monsterName,monsterHealth,monsterLvl} from "./input.js";

let currentTurn = 'player';

function updateLifeHtml(){
  playerHealth.innerText = player1.life;
  monsterHealth.innerText = monster1.life;
}

// playerAttack & monsterAttack functions calculating The damage and updating life.
function playerAttack(){
  const rnd = Math.floor(Math.random()*20)+1;
  const score = (( player1.strength + rnd ) * monster1.defense ) - monster1.defense;  
  monster1.life -= score;
  updateLifeHtml();
}

function monsterAttack(){
  const rnd = Math.floor(Math.random()*20)+1;
  const score = (( monster1.strength + rnd ) * player1.defense ) - player1.defense; 
  player1.life -= score;
  updateLifeHtml();
}

function attack(currentTurn){
  if(currentTurn === 'player'){
    playerAttack();
  } else if(currentTurn === 'monster') {
    monsterAttack();
  }
}

function combatStart(){
  let currentTurn = checkFirstStart();
  attack(currentTurn);
//   checkDefeat();
}

function checkFirstStart(monster, player) {
  debugger
  const rnd1 = Math.floor(Math.random() * 20) + 1;
  const rnd2 = Math.floor(Math.random() * 20) + 1;
  const pWIthDex = rnd1 + player.dexterity;
  const MWIthDex = rnd2 + monster.dexterity;
  if (pWIthDex > MWIthDex) {

    return 'player';
  }
  return 'monster';
}

attackBtn.addEventListener('click', ()=> {
  attack(currentTurn);
});