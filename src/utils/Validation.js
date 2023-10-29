export default class Validation {
  constructor() {
    this.carNameInputValidation = true;
    this.tryInputValidation = true;
  }

  async validateCarNameInput(carNameList) {
    for (let carName of carNameList) {
      if (carName.length > 5) {
        this.carNameInputValidation = false;
        break;
      }
    }
  }

  async getCarNameInputValidation(carNameList) {
    await this.validateCarNameInput(carNameList);
    return this.carNameInputValidation;
  }

  async validateTryInput(tryInput) {
    if (isNaN(tryInput)) {
      this.tryInputValidation = false;
    }
  }

  async getTryInputValidation(tryInput) {
    await this.validateTryInput(tryInput);
    return this.tryInputValidation;
  }
}
