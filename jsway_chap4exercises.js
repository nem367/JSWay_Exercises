//CHAP 4
//Carousel
//Write a program that launches a carousel for 10 turns, showing the turn number each time. When it’s done, improve it so that the number of turns is given by the user.
//example with for loop
for(let carouselTurn = 0; carouselTurn<11; carouselTurn++){
    console.log(`this is carousel turn number ${carouselTurn}`);
}
//example with while loop
let turn=0;
while(turn<10){
    turn++;
    console.log(`this is carousel turn number ${turn}`);
}
//example with prompt
let turnCount = Number(prompt("How many carousel turns do you want?"));
for(let turn = 0; turn <= turnCount; turn++){
    console.log(`this is carousel turn number ${turn}`);
}

//Parity
let test = Number(prompt("Choose a number"));
for (let i = test; i < test + 10; i++) { 
  if (i % 2 === 0) {
    console.log(`${i} is even`); 
  }else{
    console.log(`${i} is odd`);
  }
};

//Input validation
//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.
//part 1
let nb = 0;
while(nb <= 100){
    nb = Number(prompt("Pick a number"));
    console.log(nb);
}
//part 2
let nb2 = 0;
while(nb2 < 50 || nb2 >100){
    nb2 = Number(prompt("Pick a number between 50 & 100"));
    console.log(nb2);
}

//Multiplication table
//Write a program that asks the user for a number, then shows the multiplication table for this number.
//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
let number = Number(prompt("Pick a number"));
for(let i=0; i<=10; i++){
  console.log(`${i}*${number}=${i*number}`);
}
//part 2
let number2 = 0;
while(number2<2 || number2>9){
    number2 = Number(prompt("Pick a number between 2 and 9"));
    if(number2>=2 && number2<=9){
    for(i=0; i<=10; i++){
     console.log(`${i}*${number2}=${i*number2}`);     
    }
  }
}

//Neither yes nor no
//Write a program that plays “neither yes, nor no” with the user. Specifically, the programs asks the user to enter text until either “yes” or “no” is typed, which ends the game.
let text="";
while(text !== "yes" && text!== "no"){
  text=prompt("Enter text");
}
console.log("the game finished");

//FizzBuzz
/*Write a program that shows all numbers between 1 and 100 with the following exceptions:
  It shows "Fizz" instead if the number is divisible by 3.
  It shows "Buzz" instead if the number is divisible by 5 and not by 3.*/
for(i=0; i<=100; i++){
    if(i%3===0){
      console.log("Fizz");
    }else if(i%5===0 && i%3!==0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
}

//When it’s done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
for(i=0; i<=100; i++){
    if(i%5===0 && i%3===0){
      console.log("FizzBuzz");
    }else if(i%3===0){
      console.log("Fizz");
    }else if(i%5===0 && i%3!==0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
}
