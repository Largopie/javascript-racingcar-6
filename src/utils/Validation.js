export default class Validation {
  constructor() {
    this.carNameInputValidation = true;
    this.tryInputValidation = true;
  }

  async validateCarNameInput(carNameList) {
    this.carNameInputValidation = carNameList.every(
      (carNAme) => carNAme.length < 5,
    );
  }

  async getCarNameInputValidation(carNameList) {
    await this.validateCarNameInput(carNameList);
    return this.carNameInputValidation;
  }

  async validateTryInput(tryInput) {
    if (Number.isNaN(tryInput)) {
      this.tryInputValidation = false;
    }
  }

  async getTryInputValidation(tryInput) {
    await this.validateTryInput(tryInput);
    return this.tryInputValidation;
  }
}
