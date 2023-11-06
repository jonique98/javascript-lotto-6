import { Random } from '@woowacourse/mission-utils'
import { NUMBER } from '../constants/constants.js'

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

		if (matchingNumbers.length === NUMBER.three) return 'fifth';
		if (matchingNumbers.length === NUMBER.four) return 'fourth';
		if (matchingNumbers.length === NUMBER.five) return 'third';
		if (matchingNumbers.length === NUMBER.five && bonusNumber) return 'second';
		if (matchingNumbers.length === NUMBER.six) return 'first';
	}

	getLottoNumber() {
		return this.#lottoNumber;
	}
}

export default UserLottoNumber;
