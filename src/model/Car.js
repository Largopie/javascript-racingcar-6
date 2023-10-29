import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  getName() {
    return this.name;
  }

  getMove() {
    return this.move;
  }

  setMove(newMove) {
    this.move = newMove;
  }

  tryMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      const count = this.getMove() + 1;
      this.setMove(count);
    }
  }
}
