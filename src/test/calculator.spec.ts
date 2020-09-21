import { Calculator } from "../calculator";

describe("Calculator function", () => {
  let calculator: Calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  it("function plus 5 + 5 should return 10", () => {
    const result = calculator.plus(5, 5);
    expect(result).toBe(10);
  });

  it("function minus 1 - 5 should return -4", () => {
    const result = calculator.minus(1, 5);
    expect(result).toBe(-4);
  });

  it("function minus 1 - 1 should return 0", () => {
    const result = calculator.minus(1, 1);
    expect(result).toBe(0);
  });

  it("function multiply 6 * 499 should return 2994", () => {
    const result = calculator.multiply(6, 499);
    expect(result).toBe(2994);
  });

  it("function divide 36 / 6 should return 6", () => {
    const result = calculator.divide(36, 6);
    expect(result).toBe(6);
  });

  it("function divide 1 / 0 should return -1", () => {
    const result = calculator.divide(1, 0);
    expect(result).toBe(-1);
  });
});
