import { Console } from '@woowacourse/mission-utils'

class InputView {
	async readPurchaseAmount() {
		return (await Console.readLineAsync('구입 금액을 입력해주세요.'));
	}

	async readLottoNumber() {
		return (await Console.readLineAsync('당첨 번호를 입력해주세요.'));
	}

	async readBonusNumber() {
		return (await Console.readLineAsync('보너스 번호를 입력해주세요.'));
	}
}

export default InputView;