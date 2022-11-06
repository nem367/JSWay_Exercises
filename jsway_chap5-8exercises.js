//CHAP 5
//Improved hello
//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}
// TODO: ask user for first and last name
let firstName=prompt("What is your first name?");
let lastName = prompt("What is your last name?");
// TODO: call sayHello() and show its result
console.log(sayHello(firstName, lastName));

//Number squaring
// Square the given number x
function square1(x) {
  x=x*x;
  return x;
}
// Square the given number x
const square2 = x => x*x;
//part 2
for(let i = 0; i<10; i++){
  let a = square1(i);
  console.log(a);
}

//Circumference and area of a circle
//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
let radius = Number(prompt("Enter a circle radius value"));
function circumference(radius){
  return 2 * Math.PI * radius;
}
function area(radius){
  return Math.PI * radius * radius;
}
console.log(`The circumference of a circle with radius of ${radius} is ${circumference(radius)}`);
console.log(`The area of a circle with radius of ${radius} is ${area(radius)}`);

//CHAP 6
//Adding character experience
//Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
// TODO: create the character object here
const aurora ={
    health: 150,
    strength: 25,
    xp: 0,
    
    describe(){
      return`Aurora has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
  }
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());

//Modelling a dog
//Complete the following program to add the dog object definition.
// TODO: create the dog object here
const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    
    bark(){
      return "Grrr! Grrr!";
    }
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`); 
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Modeling a circle
//Complete the following program to add the circle object definition. Its radius value is input by the user.
const r = Number(prompt("Enter the circle radius:")); 
// TODO: create the circle object here
const circle ={
  radius: r,
  circumference(){
    return 2 * Math.PI * this.radius;
  },
  area(){
    return Math.PI * this.radius * this.radius;
  }
};
console.log(`Its circumference is ${circle.circumference()}`); 
console.log(`Its area is ${circle.area()}`);

//Modeling a bank account
const account = {
  name: "Alex",
  balance: 0,
  credit(value){
    this.balance=this.balance+value;
  },
  describe(){
    return `owner:${this.name}, balance:${this.balance}`;
  }
};

// let value = Number(prompt("Enter an amount to credit/debit"));
console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());

//CHAP 7
//Musketeers
const musketeers = ["Athos", "Porthos", "Aramis"];
for(let i=0; i<musketeers.length; i++){
  console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(musketeer => {
  console.log(musketeer);
});
musketeers.splice(2,1); //at position 2 remove 1 item
for (const musketeer of musketeers) {
  console.log(musketeer);
}

//Sum of values
//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
let sum=0;
for (let i = 0; i < values.length; i++) {
  // console.log(values[i]);
  sum+=values[i];
}
console.log(sum);

//Array maximum
//Write a program that creates the following array, then calculates and shows the array’s maximum value.
const values1 = [3, 11, 7, 2, 9, 10];
let max = values1[0];
for(i = 1; i < values1.length; i++) {
  if(max < values1[i]){
    max=values1[i];
  }
}
console.log(max);

//List of words
//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
const wordArray1=[];
let words;
while(words!=="stop"){
  words=prompt("Enter a word");
  if(words!=="stop"){
    words.push(words);
  }
}

console.log(wordArray1);

//CHAP 8
//Word info
//Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
let word1=prompt("What is your favorite word?");
console.log(word1.length, word1.toLowerCase(), word1.toUpperCase());

//Vowel count
//Improve the previous program so that it also shows the number of vowels inside the word.
let word2=prompt("What is your favorite word?");
// console.log(word.length, word.toLowerCase(), word.toUpperCase());
let vowels = ["a", "e", "i", "o", "u"];

function countVowels(string){
  let count = 0;
  
  //loop through string to test if each character is a vowel
  for (let character of string.toLowerCase()) {
    if (vowels.includes(character)) {
      //returns true if a string contains a specified string
      count++;
    }
  }
  
  return count;
}

const result = countVowels(word);

console.log(word.length, word.toLowerCase(), word.toUpperCase(), result);

//Backwards word
//Improve the previous program so that it shows the word written backwards.
const word=prompt("What is your favorite word?");
const wordArray=[];
for (let i = 0; i < word.length; i++) {
  //creates an array with each element being a character of the word
  wordArray.push(word[i]);
}
//reverses the word array
wordArray.reverse();
let wordReversed = wordArray.toString();
console.log(wordReversed);

//need to concatenate the string to form one word
// let wordReversed = wordArray.toString();
/*for (let i = 0; i < wordReversed.length; i++) {
  wordReversed=+wordReversed[i];
}*/

if(word.toLowerCase()===wordReversed.toLowerCase()){
  console.log("The word you entered is a palindrome");
}


