import  UserLotto  from '../model/UserLotto.js';
import  Lotto   from '../model/lotto.js';
import  Statistics  from '../model/statistics.js';
import  InputView  from '../view/InputView.js';
import  OutputView  from '../view/OutputView.js';
import { MESSAGE, CHARACTER } from '../constants/constants.js';

class controller {
	#inputView
	#outputView
	#userLotto;
	#winningLotto;
	#statistics;

	constructor() {
		this.#inputView = new InputView();
		this.#outputView = new OutputView();
		this.#statistics = new Statistics();
	}

	async init() {
		await this.buyLotto();
	}

	async buyLotto() {
		const purchaseAmount = await this.#inputView.readPurchaseAmount();

		try{
			this.#userLotto = new UserLotto(purchaseAmount);
			this.priintUserLottoNumbers()
			await this.setWinningLottoNumbers();
		}catch (error){
			this.#outputView.print(error.message);
			this.buyLotto();
		}
	}

	priintUserLottoNumbers() {
		this.#outputView.print(this.#userLotto.getNumberOfPurchase() + "개를 구매했습니다.");
		this.#userLotto.getUserLottoNumbers().forEach(userLottoNumber => {
			const message = userLottoNumber.getLottoNumber().join(`, `);
			this.#outputView.print(`[${message}]`);
		});
	}

	async setWinningLottoNumbers() {
		const lottoNumbers = await this.#inputView.readLottoNumber();

		try{
			this.#winningLotto = new Lotto(lottoNumbers);
			await this.#setBonusNumber();
		} catch (error) {
			this.#outputView.print(error.message);
			this.setWinningLottoNumbers();
		}
	}

	async #setBonusNumber() {
		const bonusNumber = await this.#inputView.readBonusNumber();

		this.#winningLotto.setBonusNumber(bonusNumber);
		this.calculateStatistics();
	}

	calculateStatistics() {
		this.#statistics.calculateStatistics(this.#userLotto, this.#winningLotto);
		this.printStatistics(this.#statistics.getStatistics());
	}

	printStatistics(result) {
		result.forEach(statistics => {
			this.#outputView.print(`${MESSAGE[statistics.rank]}${statistics.count}${CHARACTER.countsuffix}`);
		});
		this.#outputView.print(`${this.#statistics.getRateOfReturns()}${CHARACTER.percent}`);
		return ;
	}
}

export default controller;