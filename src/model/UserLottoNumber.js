import { Random } from '@woowacourse/mission-utils'

class UserLottoNumber {
	#lottoNumber;

	constructor() {
		this.lottoNumber = this.#generateLottoNumber();
	}

	#generateLottoNumber() {
		const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
		return lottoNumber.sort((a, b) => a - b);
	}

	calculateMatchingNumber(winningLotto) {
		const winningLottoNumber = winningLotto.getLottoNumber();
		return this.#lottoNumber.filter((number) => winningLottoNumber.includes(number));
	}
}
