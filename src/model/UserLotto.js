class PurchaseLotto {
	#numberOfPurchaseLotto;
	#userLottoNumbers;

	#validate(purchaseAmount) {
		this.#typeCheck(purchaseAmount);
		this.#divisionCheck(purchaseAmount);
	}

	#typeCheck(purchaseAmount) {
		if (Number.isNaN(purchaseAmountToNumber)) {
			throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
		}
	}

	#divisionCheck(purchaseAmount) {
		if (purchaseAmountToNumber % 1000 !== 0) {
			throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
		}
	}

	#calculateNumberOfPurchase(purchaseAmount) {
		const purchaseAmountToNumber = Number(purchaseAmount);

		this.#validate(purchaseAmountToNumber);
		this.#numberOfPurchase = purchaseAmountToNumber / 1000;
	}

	buyLotto(purchaseAmount) {
		this.#calculateNumberOfPurchase(purchaseAmount);

		for (let i = 0; i < this.#numberOfPurchase; i++) {
			this.#userLottoNumbers.push(new UserLottoNumber());
		}
	}

	calculateMatchingNumber(winningLotto) {
		const ranking = {
			fifth: 0,
			fourth: 0,
			third: 0,
			second: 0,
			first: 0,
		};

		for(let i = 0; i < this.#numberOfPurchase; i++) {
			const rank = this.#userLottoNumbers[i].calculateMatchingNumber(winningLotto);
			ranking[rank] += 1;
		}
		return ranking;
	}

}

export default PurchaseLotto;