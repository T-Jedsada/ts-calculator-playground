import { Calculator } from "./calculator";
import { MainControllerImpl, MainView } from "./main.contract";

export class MainController implements MainControllerImpl {
  private mainView: MainView;
  private calculator: Calculator;

  constructor(calculator: Calculator, mainView: MainView) {
    this.mainView = mainView;
    this.calculator = calculator;
  }

  calculate(operator: number, number1: number, number2: number) {
    if (operator == 1) {
      const result = this.calculator.plus(number1, number2);
      this.mainView.setResultCalculation(result);
    } else if (operator == 2) {
      const result = this.calculator.minus(number1, number2);
      this.mainView.setResultCalculation(result);
    } else if (operator == 3) {
      const result = this.calculator.multiply(number1, number2);
      this.mainView.setResultCalculation(result);
    } else if (operator == 4) {
      const result = this.calculator.divide(number1, number2);
      if (result == -1) {
        this.mainView.setErrorMessage("divide by zero")
      } else {
        this.mainView.setResultCalculation(result);
      }
    } else {
        this.mainView.setErrorMessage("Something went wrong")
    }
  }
}
