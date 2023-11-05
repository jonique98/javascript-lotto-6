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

	#calculateRateOfReturns(purchaseAmount, totalWinnings) {
		this.#rateofreturns = totalWinnings / purchaseAmount;
	}

}