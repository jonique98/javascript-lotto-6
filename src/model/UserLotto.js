import UserLottoNumber from './UserLottoNumber.js'

class UserLotto {
	#numberOfPurchase;
	#userLottoNumbers = [];

	constructor(purchaseAmount) {
		this.#calculateNumberOfPurchase(purchaseAmount);

		for (let i = 0; i < this.#numberOfPurchase; i++) {
			this.#userLottoNumbers.push(new UserLottoNumber());
		}
	}

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
		try {
			this.#validate(purchaseAmount);
			this.#numberOfPurchase = purchaseAmount / 1000;
		}catch (error){
			throw error;
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

	getNumberOfPurchase() {
		return this.#numberOfPurchase;
	}

	getUserLottoNumbers() {
		return this.#userLottoNumbers;
	}

}

export default UserLotto;