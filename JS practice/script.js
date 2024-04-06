console.log("exercise 1  task");
let num = Math.random() * 100;
let x = Math.round(num);
let chances = 1;
let a;
for (a = 1; a <= 100; a++) {
  let choice = prompt("guess the number between 1 to 100");
  if (choice > x) {
    console.log("the number is less than your choice");
  }
  else if (choice < x) {
    console.log("the number is greater than your choice");
  }
  else {
    console.log("congrulations!!! your choice is correct");
    break;
  }
  chances++;
}
console.log("your score is ", (100 - chances));
console.log("you did it in " + chances + "  attempts");
