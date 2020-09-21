var stdin = process.openStdin();

function inputListener(): void {
  stdin.addListener("data", (d) => {
    console.log("you entered: [" + d.toString().trim() + "]");
  });
}

inputListener()
