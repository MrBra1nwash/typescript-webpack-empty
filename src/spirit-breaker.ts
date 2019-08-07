import { Enemy } from './model/enemy.model';

export class SpiritBreaker {

  constructor() {

  }

  charge(enemy: Enemy) {
    while(enemy.health > 0) {
      console.log(`${enemy.name} health is ${enemy.health}`);
      enemy.health -= 10;
    }
    console.log(`${enemy.name} is dead :()`);
  }
}
