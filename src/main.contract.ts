export interface MainView {
  setResultCalculation(result: number): void;
  setErrorMessage(message: string): void;
}

export interface MainControllerImpl {
  calculate(operator: number, number1: number, number2: number): void;
}
