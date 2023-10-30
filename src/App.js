import Controller from './controller/Controller.js';

class App {
  async play() {
    this.controller = new Controller();
    await this.controller.gameStart();
  }
}

export default App;
