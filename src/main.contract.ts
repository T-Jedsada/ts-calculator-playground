export interface MainView {
  setResultCalculation(result: number);
  setErrorMessage(message: string)
}

export interface MainControllerImpl {
  calculate(operator: number, number1: number, number2: number);
}
