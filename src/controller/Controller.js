import Car from '../model/Car.js';
import Validation from '../utils/Validation.js';
import View from '../view/View.js';

export default class Controller {
  constructor() {
    this.view = new View(this);
    this.validation = new Validation();
    this.carList = [];
  }

  async isCarNameInputValid(carNameList) {
    const carNameInputValidation =
      await this.validation.getCarNameInputValidation(carNameList);
    if (!carNameInputValidation) {
      await this.view.carNameInputError();
    }

    this.createCar(carNameList);
    this.view.getTryCount();
  }

  createCar(carNameList) {
    carNameList.forEach((carName) => {
      this.carList.push(new Car(carName));
    });
  }

  async isTryInputValid(tryInput) {
    const tryInputValidation =
      await this.validation.getTryInputValidation(tryInput);
    if (!tryInputValidation) {
      await this.view.tryInputError();
    }

    this.moveCars(tryInput);
  }

  updateMaxScore() {
    let maxScore = 0;
    this.carList.forEach((car) => {
      car.tryMove();
      maxScore = Math.max(maxScore, car.getMove());
    });

    return maxScore;
  }

  moveCars(tryInput) {
    let maxScore = 0;
    this.view.printRunResult();

    for (let i = 0; i < tryInput; i += 1) {
      maxScore = this.updateMaxScore();
      View.printSingleTryResult(this.carList);
    }
    this.checkResult(maxScore);
  }

  checkResult(max) {
    const filterCarList = this.carList.filter((car) => car.getMove() === max);

    this.view.printWinner(filterCarList);
  }

  async gameStart() {
    await this.view.getCarNameInput();
  }
}
