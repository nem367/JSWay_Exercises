//CHAP 13
// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node 
function showChild(node, index){
    // TODO: add code here
    if(node.nodeType === document.ELEMENT_NODE){
      if((index >= 0) && (index < node.childNodes.length)){
        console.log(node.childNodes[index]);
      }else{
        console.error("Incorrect index");
      }
    }else{
      console.error("Wrong node type");
    }
};
// Should show the h1 node
showChild(document.body, 1);
// Should show "Incorrect index"
showChild(document.body, -1); 
// Should show "Incorrect index"
showChild(document.body, 8);
// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);

//CHAP 14
//Counting elements
function countElements(selector){
  return document.querySelectorAll(selector).length;
}

//Handling attributes
function linkInfo(){
  //The total number of links
  nbLinks = document.getElementsByTagName("a").length;
  //The target of the first and last links
  const links = document.getElementsByTagName("a");
  console.log(`This is the first link of this doc ${links[0].getAttribute("href")}`);
  console.log(`This is the last link of this doc ${links[nbLinks-1].getAttribute("href")}`);
  return `There are ${nbLinks} links in this document`;
}

console.log(linkInfo());

//Handling classes
// Show if an element has a class
const has = (id, someClass) => { 
  // TODO: write the function code
  let element = document.getElementById(id);
  if(element !== null){
    console.log(element.classList.contains(someClass));
  }else{
    console.error(`No element has ${id} as an id`);
  }
}

//CHAP 15
//Adding a paragraph
document.getElementById("content").innerHTML += '<p>Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages</p>';

// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];
for(let i=0; i<newspapers.length; i++){
  document.getElementById("content").innerHTML += `<li><a href="${newspapers[i]}">${newspapers[i]}</a></li`;
}

//Mini-dictionary
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

let dlElement = document.createElement("dl");

words.forEach(word => {
  let dtElement = document.createElement("dt");
  let strongElement = document.createElement("strong");
  strongElement.textContent = word.term;
  let ddElement = document.createElement("dd");
  ddElement.textContent = word.definition;
  
  dtElement.appendChild(strongElement);
  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
});

document.getElementById("content").appendChild(dlElement);

//Updating colors
let textColor = prompt("Pick a color for your text").toLowerCase();
let backgroundColor1 = prompt("Pick a color for your background").toLowerCase();
document.querySelector("div").style.color=textColor;
document.querySelector("div").style.backgroundColor=backgroundColor1;