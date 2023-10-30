import { Console } from '@woowacourse/mission-utils';

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.CAR_NAME_INPUT_MESSAGE =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n';
    this.CAR_NAME_LENGTH_ERROR = '[ERROR] 자동차 이름은 5자 이하만 가능합니다.';
    this.TRY_COUNT_INPUT_MESSAGE = '시도할 횟수는 몇 회인가요?\n';
    this.RUN_RESULT_MESSAGE = '실행 결과';
    this.TRY_INPUT_ERROR = '[ERROR] 숫자가 잘못된 형식입니다.';
    this.WINNER_MESSAGE = '최종 우승자 : ';
  }

  async getCarNameInput() {
    const input = await Console.readLineAsync(this.CAR_NAME_INPUT_MESSAGE);
    const inputToArray = input.split(',');

    await this.controller.isCarNameInputValid(inputToArray);
  }

  async carNameInputError() {
    throw new Error(this.CAR_NAME_LENGTH_ERROR);
  }

  async getTryCount() {
    const input = await Console.readLineAsync(this.TRY_COUNT_INPUT_MESSAGE);

    await this.controller.isTryInputValid(Number(input));
  }

  async tryInputError() {
    throw new Error(this.TRY_INPUT_ERROR);
  }

  printRunResult() {
    Console.print(this.RUN_RESULT_MESSAGE);
  }

  static printSingleTryResult(carList) {
    carList.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getMove())}`);
    });
    Console.print('');
  }

  printWinner(carList) {
    Console.print(
      this.WINNER_MESSAGE + carList.map((car) => car.getName()).join(', '),
    );
  }
}
