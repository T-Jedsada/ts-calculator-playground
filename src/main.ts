import { MainController } from "./main.controller";
import { MainView } from "./main.contract";
import { Calculator } from "./calculator";
import { Queue } from "./queue";

class Main implements MainView {
  stdin = process.openStdin();
  values: number[] = [];

  private controller: MainController;

  constructor() {
    this.controller = new MainController(new Calculator(), this);
    this.inputListener();
  }

  setErrorMessage(message: string) {
    console.log(message);
    this.values.length = 0;
    this.printMenuOperator();
  }

  setResultCalculation(result: number) {
    console.log("the result to calculate is : [" + result + "]");
    this.values.length = 0;
    this.printMenuOperator();
  }

  private inputListener(): void {
    this.printMenuOperator();
    this.stdin.addListener("data", (input) => {
      try {
        let data = Number(input.toString().trim());
        if (typeof data === "number") {
          const size = this.values.length;
          this.values.push(data);
          if (size == 0) {
            console.log("you entered: [" + this.values[0] + "]");
            console.log("please enter Number #1: ");
          } else if (size == 1) {
            console.log("you entered Number #1 is : [" + this.values[1] + "]");
            console.log("please enter Number #2: ");
          } else {
            console.log("you entered Number #2 is : [" + this.values[2] + "]");
            this.controller.calculate(
              this.values[0],
              this.values[1],
              this.values[2]
            );
          }
        } else {
          console.log("Please inoput number format");
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  private printMenuOperator(): void {
    console.log("********************************");
    console.log("***Please select operator**");
    console.log("**Number 1 is Plus**");
    console.log("**Number 2 is Minus**");
    console.log("**Number 3 is Multiply**");
    console.log("**Number 4 is Devide**");
    console.log("********************************");
  }
}

function main(): void {
  let queue = new Queue<Number>()
  queue.pushItem(88)
  queue.pushItem(89)
  queue.pop()

  console.log("items: ", queue.getItems())

  new Main();
}

main();
