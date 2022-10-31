//CHAP 2

//Improved hello
//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
alert(`Hello ${firstName} ${lastName}`);

//VAT calculation
//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let rawPrice = Number(prompt("How much does your product cost before tax?"));
let finalPrice = rawPrice + rawPrice * (20.6/100);
console.log("The sales price is:", finalPrice);

//From Celsius to Fahrenheit degrees
//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
//The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
let temperatureCelsius = Number(prompt("What's today's temperature in Celsius?"));
let temperatureFarenheit = temperatureCelsius * 9/5 + 32;
console.log("Today's temperature in Farenheit is:", temperatureFarenheit);

//Variable swapping
let number1 = 5; 
let number2 = 3;
// TODO: type your code here (and nowhere else!) 
let temp; //temporary variable
temp = number1;
number1 = number2;
number2 = temp;
console.log(number1); // Should show 3
console.log(number2); // Should show 5

//Chap 3

//Following day
//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
const day = prompt("What day is it today?"); 
switch (day) {
	case "monday": 
		console.log("tuesday"); 
		break;
	case "tuesday": 
		console.log("wednesday"); 
		break;
	case "wednesday":
		console.log("thursday");
		break;
	case "thursday":
		console.log("friday");
		break;
	case "friday":
		console.log("saturday");
		break;
	case "saturday":
		console.log("sunday");
		break;
	case "sunday":
		console.log("monday");
		break;
	default:
		console.log("You didn't enter a valid day");
}

//Number comparison
//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let n1 = Number(prompt("Enter a number"));
let n2= Number(prompt("Enter another number"));
if(n1>n2){
	console.log(`The first number ${n1} is greater than the second number ${n2}`);
}else if (n1<n2){
  console.log(`The first number ${n1} is smaller than the second number ${n2}`);
}else{
  console.log(`The first number ${n1} equals the second number ${n2}`);
}

//Number of days in a month
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
const month = Number(prompt("Enter a month number"));
if((month % 2 != 0) && (month <= 12)){
	console.log("Number of days of that month is: 31");
}else if(month == 2){
	console.log("Number of days of that month is: 28");
}else if ((month % 2 == 0) && (month <= 12)){
	console.log("Number of days of that month is: 30");
}else{
  console.log("You've entered an invalid month number");
}

//Following second
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
const hour=Number(prompt("What is the current hour?"));
const min=Number(prompt("What is the current minute?"));
const sec=Number(prompt("What is the current second?"));
if(sec<59){
  console.log(`${hour}h${min}m${sec+1}s`);
}else if((sec==59) && (min<59)){
  console.log(`${hour}h${min+1}m0s`);
}else if((sec==59) && (min==59) && (hour==23)){
  console.log(`0h0m0s`);
}else if((sec==59) && (min==59)){
  console.log(`${hour+1}h0m0s`);
}