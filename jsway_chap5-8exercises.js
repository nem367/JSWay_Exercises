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

//CHAP 7
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

//CHAP 8
//Word info
//Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
let word=prompt("What is your favorite word?");
console.log(word.length, word.toLowerCase(), word.toUpperCase());

//Vowel count
//Improve the previous program so that it also shows the number of vowels inside the word.
let word=prompt("What is your favorite word?");
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