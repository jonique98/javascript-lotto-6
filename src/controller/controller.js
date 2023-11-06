import  UserLotto  from '../model/UserLotto.js';
import  Lotto   from '../model/lotto.js';
import  Statistics  from '../model/statistics.js';
import  InputView  from '../view/InputView.js';
import  OutputView  from '../view/OutputView.js';

class controller {
	#inputView
	#outputView
	#userLotto;
	#winningLotto;
	#statistics;

	constructor() {
		this.#inputView = new InputView();
		this.#outputView = new OutputView();
		this.#userLotto = new UserLotto();
		this.#statistics = new Statistics();
	}

	init() {
		this.buyLotto();
	}

	async buyLotto() {
		const purchaseAmount = await this.#inputView.readPurchaseAmount();

		this.#userLotto.buyLotto(purchaseAmount);
		this.setWinningLottoNumbers();
	}

	async setWinningLottoNumbers() {
		const lottoNumbers = await this.#inputView.readLottoNumber();

		this.#winningLotto = new Lotto(lottoNumbers);
		this.#setBonusNumber();
	}

	async #setBonusNumber() {
		const bonusNumber = await this.#inputView.readBonusNumber();

		this.#winningLotto.setBonusNumber(Number(bonusNumber));
		this.calculateStatistics();
	}

	calculateStatistics() {
		this.#statistics.calculateStatistics(this.#userLotto, this.#winningLotto);
		this.printStatistics(this.#statistics.getStatistics());
	}

	printStatistics(result) {

		result.forEach(statistics => {
			this.#outputView.print(statistics.count);
		})
		this.#outputView.print(this.#statistics.getRateOfReturns());
	}
}

export default controller;