import { STATISTICS } from '../constants/constants.js';

class Statistics {
	#rateofreturns;
	#statistics ;

	constructor() {
		this.#statistics = STATISTICS;
		this.#rateofreturns = 0;
	}

	calculateStatistics(userLotto, winningLotto) {
		const rankResult = userLotto.calculateMatchingNumber(winningLotto);

		let totalWinnings = 0;
	
		this.#statistics.forEach((statistic) => {
			statistic.count = rankResult[statistic.rank];
			totalWinnings += statistic.winnings * statistic.count;
		});

		this.#rateofreturns = totalWinnings / (userLotto.getNumberOfPurchase() * 1000);
	}

	getRateOfReturns() {
		return (this.#rateofreturns * 100).toFixed(1);
	}

	getStatistics() {
		return this.#statistics;
	}

}

export default Statistics