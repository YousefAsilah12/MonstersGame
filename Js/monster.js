export {monsters};
class Monster {
    constructor(name, defense, dexterity, gold, lvl, strength, rewardXP, life,location){
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.lvl = lvl;
        this.life = life;
        this.rewardXP = rewardXP;
        this.dexterity = dexterity;
        this.gold = gold;
        this.location = location;
    }
}
export const monster1 = new Monster('Gooloop', 30, 2, 240, 2, 20, 20, 100,"blackJungel");

const monsters = [];
const locations = [  "Forest",  "Cave",  "Mountain",  "Desert",  "Swamp"];

const monsterNames = [
    "Goblin",
    "Orc",
    "Troll",
    "Dragon",
    "Zombie",
    "Skeleton",
    "Demon",
    "Vampire",
    "Witch",
    "Hydra",
    "Giant Spider",
    "Mummy",
    "Ghost",
    "Wyvern",
    "Kraken",
    "Medusa",
    "Gargoyle",
    "Chimera",
    "Minotaur",
    "Frankenstein"
  ];

  for (let i = 0; i < monsterNames.length; i++) {
  const locationIndex = Math.floor(i / 5);
  const name = monsterNames[i];
  const defense = Math.floor(Math.random() * 10 + 5);
  const dexterity = Math.floor(Math.random() * 10 + 5);
  const gold = Math.floor(Math.random() * 100 + 50);
  const lvl = Math.floor(Math.random() * 10 + 1);
  const strength = Math.floor(Math.random() * 10 + 5);
  const rewardXP = Math.floor(Math.random() * 100 + 50);
  const life = Math.floor(Math.random() * 100 + 50);
  const location = locations[locationIndex];

  const monster = new Monster(
    name,
    defense,
    dexterity,
    gold,
    lvl,
    strength,
    rewardXP,
    life,
    location
  );

  monsters.push(monster);
}
console.log(monsters);
// Name
// Strength
// Defense
// Level
// Health points
// Xp reward
// Dexterity
// gold



