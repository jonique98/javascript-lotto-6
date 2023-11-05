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

	#calculateStatistics(userLotto, winningLotto) {
		const rankResult = userLotto.calculateMatchingNumber(winningLotto);

		const totalWinnings = 0;
	
		this.#statistics.forEach((statistic) => {
			statistic.count = rankResult[statistic.rank];
			totalWinning += statistic.winnings * statistic.count;
		});

		this.#rateofreturns = totalWinning / userLotto.getPurchaseAmount();
	}

	getRateOfReturns() {
		return this.#rateofreturns;
	}

	getStatistics() {
		return this.#statistics;
	}

}