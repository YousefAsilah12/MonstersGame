
import {monster1} from "./monster.js";
import {player1} from "./player.js";

let rnd1 = 0;
let rnd2 = 0;

function calcDamage(){
  //check who's turn is it -- make a function turns()

}

function playerAttack(){
  // score (strength + roll ) * defence 
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


function checkFirstStart(monster,player){
  rnd1=Math.floor(Math.random()*20)+1;
  rnd2=Math.floor(Math.random()*20)+1;
  pWIthDex=rnd1+player.dex;
  MWIthDex=rnd2+monster.dex;
  if(pWIthDex>MWIthDex){
    return 'player';
  }
  return 'monster';
} 


