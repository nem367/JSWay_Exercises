var name;
var image;
var status;
var counter=0;

document.getElementById("character").addEventListener("click", display);

function display(){
  let randomNumber = Math.floor(Math.random() * 826);
  fetch("https://rickandmortyapi.com/api/character/"+randomNumber)
  .then((response) => response.json())
  .then((data) => {
    name = data.name;
    image = data.image;
    status = data.status;
    // console.log(name, status);
    document.getElementById("characterName").innerHTML = `<p>This character's name is: ${name}</p>`;
    document.getElementById("characterImage").innerHTML = `<img src="${image}">`;
    document.body.style.backgroundColor = "white";
  });
}

document.getElementById("dead").addEventListener("click", deadChecker);

function deadChecker(){
    if(status==="Dead"){
      document.body.style.backgroundColor = "green";
      counter++;
     }else{
      document.body.style.backgroundColor = "red";
      counter--;
     }
}

document.getElementById("alive").addEventListener("click", aliveChecker);

function aliveChecker(){
  if(status==="Alive"){
    document.body.style.backgroundColor = "green";
    // counter+=1;
    counter++;
  }else{
    document.body.style.backgroundColor = "red";
    // counter-=1;
    counter--;
  }
}

document.getElementById("unknown").addEventListener("click", unknownChecker);

function unknownChecker(){
    if(status==="Unknown"){
    document.body.style.backgroundColor = "green";
    counter++;
  }else{
    document.body.style.backgroundColor = "red";
    counter--;
  }
}

console.log(counter);
//we need to fix the counter
//need to fix david's bug of not being able to submit another response

document.getElementById('score').innerText = `Score: ${counter}`;