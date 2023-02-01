import {
  monster1
} from "./monster.js";
import {
  player1
} from "./player.js";

function combatStart() {
  checkFirstStart(monster1, player1);

  //   monsterAttack();
  //   playerAttack();
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
    return player;
  }
  return monster;
}

