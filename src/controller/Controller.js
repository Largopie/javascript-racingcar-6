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
    const carNameInputValidation = await this.validation.getCarNameInputValidation(carNameList);
    if (!carNameInputValidation) {
      await this.view.carNameInputError();
    }

    this.createCar(carNameList);
    this.view.getTryCount();
  }

  createCar(carNameList) {
    for (let carName of carNameList) {
      this.carList.push(new Car(carName));
    }
  }

  async isTryInputValid(tryInput) {
    const tryInputValidation = await this.validation.getTryInputValidation(tryInput);
    if (!tryInputValidation) {
      await this.view.tryInputError();
    }

    this.moveCars(tryInput);
  }

  moveCars(tryInput) {
    const list = this.carList;
    let max = 0;
    this.view.printRunResult();
    for (let i = 0; i < tryInput; i++) {
      list.map((car) => {
        car.tryMove();
        if (max < car.getMove()) max = car.getMove();
      });
      this.view.printSingleTryResult(list);
    }

    this.checkResult(max);
  }

  checkResult(max) {
    const filterCarList = this.carList.filter((car) => car.getMove() === max);

    this.view.printWinner(filterCarList);
  }

  async init() {
    await this.view.getCarNameInput();
  }
}
