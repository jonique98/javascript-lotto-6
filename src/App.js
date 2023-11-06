import controller from './controller/controller.js'

class App {
  async play() {
    const lottoGame = new controller();
    await lottoGame.init();
  }
}

export default App;
