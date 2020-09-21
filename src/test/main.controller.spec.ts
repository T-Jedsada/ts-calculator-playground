import { MainView } from "./../main.contract";
import { Calculator } from "../calculator";
import { MainController } from "./../main.controller";
import { mock } from "jest-mock-extended";

describe("MainController integration test", () => {
  let mainController: MainController;
  let calculator: Calculator;
  let mockMainView: MainView;

  beforeAll(() => {
    mockMainView = mock<MainView>();
    calculator = new Calculator();
    mainController = new MainController(calculator, mockMainView);
  });

  it("test function calculate should be successful", () => {
    mainController.calculate(1, 9, 1);
    expect(mockMainView.setResultCalculation).toHaveBeenCalledWith(10);
  });

  it("test function calculate should be error", () => {
    mainController.calculate(4, 1, 0);
    expect(mockMainView.setErrorMessage).toHaveBeenCalledWith("divide by zero");
  });
});
