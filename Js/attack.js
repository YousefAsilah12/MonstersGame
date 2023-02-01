import {
  monster1
} from "./monster.js";
import {
  player1
} from "./player.js";

import {runBtn,attackBtn,playerName,playerHealth,playerLvl,monsterName,monsterHealth,monsterLvl} from "./input.js";

function calcDamage(){
  //check who's turn is it -- make a function turns()

}

function playerAttack(){
  // score (strength + roll ) * defense 
  const rnd =Math.floor(Math.random()*20)+1;
  const score = (( monster1.strength + rnd ) * monster1.defense ) - monster1.defense;  
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
//   calcDamage();
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

