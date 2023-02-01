

 class Player {
    constructor(name, defense, dexterity, gold, potion, lvl, strength, currentXP, life){
        this.name = name;
        this.defense = defense;
        this.dexterity = dexterity;
        this.gold = gold;
        this.potion = potion;
        this.lvl = lvl;
        this.strength = strength;
        this.currentXP = currentXP;
        this.life = life;
    }
}
export const player1 = new Player('YBN', 50, 4, 0, 3, 1, 20, 100, 100);

// Strength (will be used to determine damage)
// Defense (will be used to determine damage)
// Dexterity (for who attacks first)
// Gold amount
// Potion amount
// Level (will be used to determine damage)
// Health points
// Current XP
