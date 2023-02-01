
import {monster1} from "./monster.js";
import {player1} from "./player.js";

function combatStart(){
  checkFirstSart();
//   monsterAttack();
//   playerAttack();
//   calcDamage();
//   checkDefeat();
}

function checkFirstSart(player,monster){
  rnd1=Math.floor(Math.random()*20)+1;
  rnd2=Math.floor(Math.random()*20)+1;
  pWIthDex=rnd1+player.dex;
  MWIthDex=rnd2+monster.dex;
  if(pWIthDex>MWIthDex){
    return player;
  }
  return monster;
} 

