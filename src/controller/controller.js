import { UserLotto } from '../model/UserLotto.js';
import { Lotto }  from '../model/lotto.js';
import { Statistics } from '../model/statistics.js';
import { InputView } from '../view/InputView.js';

class controller {
	#view;
	#userLotto;
	#winningLotto;
	#statistics;

	constructor() {
		this.#inputView = new InputView();
		this.outputView = new OutputView();
		this.#userLotto = new UserLotto();
		this.#winningLotto = new Lotto();
		this.#statistics = new Statistics();
	}

	init() {
		this.buyLotto();
	}

	buyLotto() {
		const purchaseAmount = this.#view.readPurchaseAmount();

		this.#userLotto.buyLottos(purchaseAmount);
		this.setWinningLottoNumbers();
	}

	setWinningLottoNumbers() {
		const lottoNumbers = this.#view.readLottoNumber();

		this.#userLotto.setWinningLottoNumbers(lottoNumbers);
		this.#setBonusNumber();
	}

	#setBonusNumber() {
		const bonusNumber = this.#view.readBonusNumber();

		this.#userLotto.setBonusNumber(Number(bonusNumber));
		this.#calculateStatistics();
	}

	calculateStatistics() {
		const result = this.#statistics.calculateStatistics(this.#userLotto, this.#winningLotto);
		this.printStatistics(result);
	}

	printStatistics(result) {
		this.#outputView.print();
		this.#outputView.print()
	}
}
