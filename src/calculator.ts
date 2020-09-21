import { CalculatorImpl } from "./calculator.contract";

export class Calculator implements CalculatorImpl {
  plus(number1: number, number2: number) {
    return number1 + number2;
  }
  minus(number1: number, number2: number) {
    return number1 - number2;
  }
  multiply(number1: number, number2: number) {
    return number1 * number2;
  }
  divide(number1: number, number2: number) {
    if (number2 == 0) {
      return -1;
    } else {
      return number1 / number2;
    }
  }
}
