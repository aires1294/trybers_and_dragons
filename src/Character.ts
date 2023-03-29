import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private race: Race; 
  private archetype: Archetype; 
  private maxLifePoints: number; 
  private lifePoints: number;
  private strength: number; 
  private defense: number; 
  private dexterity: number;
  private energy: Energy;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.race = new Elf();
    this.archetype = new Mage();
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.race.maxLifePoints / 2;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.dexterity = getRandomInt(1, 10);
    this.energy = {
      type_: this.archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this.lifePoints -= damage;
    } else {
      this.lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this.lifePoints = -1;
    }
    return this.lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    const increment = getRandomInt(1, 10);
    this.maxLifePoints += increment;
    this.strength += increment;
    this.dexterity += increment;
    this.defense += increment;
    this.energy.amount = 10;
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.lifePoints = this.maxLifePoints;
    }
    this.lifePoints = this.maxLifePoints;
  }

  public special(enemy: Fighter): void {
    const specialAttack = 2 * this.strength;
    enemy.receiveDamage(specialAttack);
  }
}