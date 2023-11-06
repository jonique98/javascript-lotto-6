import UserLottoNumber from './UserLottoNumber.js';
import { NUMBER } from '../constants/constants.js';

class UserLotto {
  #numberOfPurchase;
  #userLottoNumbers = [];

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#setPurchaseVariable(purchaseAmount);
  }

  #setPurchaseVariable(purchaseAmount) {
    this.#numberOfPurchase = purchaseAmount / NUMBER.lottoprice;
    this.#userLottoNumbers = Array.from(
      { length: this.#numberOfPurchase },
      () => new UserLottoNumber()
    );
  }

  getNumberOfPurchase() {
    return this.#numberOfPurchase;
  }

  getUserLottoNumbers() {
    return this.#userLottoNumbers;
  }

  calculateMatchingNumber(winningLotto) {
    const ranking = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    this.#userLottoNumbers.forEach((userLottoNumber) => {
      const rank = userLottoNumber.calculateMatchingNumber(winningLotto);
      ranking[rank] += 1;
    });

    return ranking;
  }

  #validate(purchaseAmount) {
    this.#typeCheck(purchaseAmount);
    this.#divisionCheck(purchaseAmount);
  }

  #typeCheck(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }
  }

  #divisionCheck(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.');
    }
  }
}

export default UserLotto;
