class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
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
    numbers.every((number) => {
      if (Number.isNAN(number)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
    });
  }

  #numberRangeCheck(numbers) {
    numbers.every((number) => {
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

  // TODO: 추가 기능 구현
}

export default Lotto;
