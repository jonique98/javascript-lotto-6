import { STATISTICS } from '../constants/constants.js';

class Statistics {
	#rateofreturns;
	#statistics = [];

	calculateStatistics(userLotto, winningLotto) {
		this.#statistics = STATISTICS;
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