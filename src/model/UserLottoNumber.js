import { Random } from '@woowacourse/mission-utils'

class UserLottoNumber {
	#lottoNumber;

	constructor() {
		this.#lottoNumber = this.#generateLottoNumber();
	}

	#generateLottoNumber() {
		const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
		return lottoNumber.sort((a, b) => a - b);
	}

	calculateMatchingNumber(winningLotto) {
		const matchingNumbers = this.#lottoNumber.filter((number) => winningLotto.getFullLottoNumbers().includes(number));
		const bonusNumber = matchingNumbers.includes(winningLotto.getBonusNumber());

		if (matchingNumbers.length === 3) return 'fifth';
		if (matchingNumbers.length === 4) return 'fourth';
		if (matchingNumbers.length === 5) return 'third';
		if (matchingNumbers.length === 5 && bonusNumber) return 'second';
		if (matchingNumbers.length === 6) return 'first';
	}
}

export default UserLottoNumber;
