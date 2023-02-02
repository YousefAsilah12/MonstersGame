import { monsters } from "./monster.js";
console.log(monsters);

const container = document.querySelector('#container');
 for (let i = 0; i < monsters.length; i++) {
    let card = document.createElement('div');
  let name = document.createElement('h2');
  name.innerText = monsters[i].name;
  let level = document.createElement('p');
  level.innerText = `Level: ${monsters[i].lvl}`;
  let defense = document.createElement('p');
  defense.innerText = `Defense: ${monsters[i].defense}`;
  let dexterity = document.createElement('p');
  dexterity.innerText = `Dexterity: ${monsters[i].dexterity}`;
  let gold = document.createElement('p');
  gold.innerText = `Gold: ${monsters[i].gold}`;
  let strength = document.createElement('p');
  strength.innerText = `Strength: ${monsters[i].strength}`;
  let rewardXP = document.createElement('p');
  rewardXP.innerText = `XP reward: ${monsters[i].rewardXP}`;
  let life = document.createElement('p');
  life.innerText = `Life: ${monsters[i].life}`;
  let location = document.createElement('p');
  location.innerText = `Location: ${monsters[i].location}`;
  let image = document.createElement('img');
  image.setAttribute('src', monsters[i].img);
  img..addEventListener("click", function{
    
  });
  card.appendChild(name);
  card.appendChild(level);
  card.appendChild(defense);
  card.appendChild(dexterity);
  card.appendChild(gold);
  card.appendChild(strength);
  card.appendChild(rewardXP);
  card.appendChild(life);
  card.appendChild(location);
  card.appendChild(image);
  container.appendChild(card);
}





