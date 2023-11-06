class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    try{
      this.#validate(numbers);
      this.#numbers = numbers;
    }catch (error){
      throw error;
    }
  }

  getFullLottoNumbers(){
    return [...this.#numbers, this.#bonusNumber];
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getLottoNumber() {
    return this.#numbers;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusValidate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #bonusValidate(bonusNumber) {
    // this.#numberTypeCheck(bonusNumber);
    // this.#numberRangeCheck(bonusNumber);
    // this.#bonusNumberDuplicateCheck(bonusNumber);
  }

  #bonusNumberDuplicateCheck(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  #validate(numbers) {
    this.#numberLengthCheck(numbers);
    this.#numberTypeCheck(numbers);
    this.#numberRangeCheck(numbers);
    this.#numberDuplicateCheck(numbers);
  }

  #numberLengthCheck(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #numberTypeCheck(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
    });
  }

  #numberRangeCheck(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
      }
    });
  }

  #numberDuplicateCheck(numbers) {
    const duplicateChecker = new Set(numbers);
    if (duplicateChecker.size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }
}

export default Lotto;
