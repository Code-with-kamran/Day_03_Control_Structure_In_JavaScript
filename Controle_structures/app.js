// check wheather a number is positive , negative or zero

let num = 4;
if (num == 0) {
  console.log(`Number ${num} is zero`);
} else if (num > 0) {
  console.log(`Number ${num} is Positve`);
} else {
  console.log(`Number ${num} is Negative`);
}

// chech if a person is eligible for vote or not
let age = 19;
if (age >= 18) {
  console.log("Eligible for vote");
} else {
  console.log("Not Eligible for vote");
}

// largest of three number
let num1 = 8;
let num2 = 6;
let num3 = 7;
let largest = num1;

if (num1 > num2) {
  if (num1 > num3) {
    // largest remain same
  } else {
    // num3>num1
    largest = num3;
  }
} else {
  if (num2 > num3) {
    largest = num2;
  } else {
    largest = num3;
  }
}
console.log(largest);

// Activity 03
let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid input");
    break;
}

// Activty 04

let score = 80;
let grade = "";
switch (score) {
  case  90:
    grade = "A";
    break;
  case 80:
    grade = "b";
    break;
  case 70:
    grade = "c";
    break;
  case 60:
    grade = "D";
    break;
  default:
    grade = "F";
  
}

console.log(grade);


// even or odd usign ternary operator

let givenNum = 1;
let res = (givenNum%2==0)? `Given number ${givenNum} is even`:`Given number ${givenNum} is odd`;
console.log(res);



let year = 2003;
if (year%4 == 0 && (year%100 != 0 || year % 400 == 0)) {
    console.log("leap year");
} else {
    console.log("not a leap year");
}