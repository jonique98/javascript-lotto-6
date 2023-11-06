class Statistics {
	#rateofreturns;
	#statistics = [
		{ rank: 'fifth',
			winnings : 5000,
			count: 0 
		},
		{ rank: 'fourth',
			winnings : 50000,
			count: 0 
		},
		{ rank: 'third',
			winnings : 1500000,
			count: 0 
		},
		{ rank: 'second',
			winnings : 30000000,
			count: 0 
		},
		{ rank: 'first',
			winnings : 2000000000,
			count: 0 
		}
	];

	calculateStatistics(userLotto, winningLotto) {
		const rankResult = userLotto.calculateMatchingNumber(winningLotto);

		let totalWinnings = 0;
	
		this.#statistics.forEach((statistic) => {
			statistic.count = rankResult[statistic.rank];
			totalWinnings += statistic.winnings * statistic.count;
		});

		this.#rateofreturns = totalWinnings / (userLotto.getPurchaseAmount() * 1000);
	}

	getRateOfReturns() {
		return (this.#rateofreturns * 100).toFixed(2);
	}

	getStatistics() {
		return this.#statistics;
	}

}

export default Statistics