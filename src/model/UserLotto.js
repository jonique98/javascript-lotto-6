import UserLottoNumber from './UserLottoNumber.js'

class PurchaseLotto {
	#numberOfPurchase;
	#userLottoNumbers = [];

	#validate(purchaseAmount) {
		this.#typeCheck(purchaseAmount);
		this.#divisionCheck(purchaseAmount);
	}

	#typeCheck(purchaseAmount) {
		if (Number.isNaN(purchaseAmount)) {
			throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
		}
	}

	#divisionCheck(purchaseAmount) {
		if (purchaseAmount % 1000 !== 0) {
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

		this.#userLottoNumbers.forEach(userLottoNumber => {
			const rank = userLottoNumber.calculateMatchingNumber(winningLotto);
			ranking[rank] += 1;
		})
		
		return ranking;
	}

	getPurchaseAmount() {
		return this.#numberOfPurchase;
	}

}

export default PurchaseLotto;