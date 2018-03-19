process.stdout.write("Hello World!\n");
process.stdin.setEncoding("utf8");
var number, number2;
process.stdout.write("Please enter a number: ");
process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    let possibleNumber = parseInt(chunk);
    if (isNaN(possibleNumber)) {
      console.log("That's not a number!");
      return;
    }
    if (number == null) {
      number = possibleNumber;
      process.stdout.write("Please enter another number: ");
      return;
    }
    if (number2 == null) {
      number2 = possibleNumber;
      let sum = number + number2;
      console.log(`The sum of ${number} + ${number2} = ${sum}`);
    }
    // process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("end");
});
