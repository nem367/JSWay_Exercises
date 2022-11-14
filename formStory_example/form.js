// document.getElementById("submitButton").addEventListener('submit', story);

formElement=document.getElementById("form");

// function story() {  
formElement.addEventListener("submit", e => {

    const animal = e.target.elements.animal.value;
    const color = e.target.elements.color.value;
    const location = e.target.elements.location.value;

    console.log(`The ${animal} is ${color} and likes to sleep in ${location}`);

    const storyElement = document.createElement("p");
    storyElement.id = "storyText";
    storyElement.textContent = `The ${animal} is ${color} and likes to sleep in ${location}`;
    document.getElementById("content").appendChild(storyElement);

    setTimeout(() => {
        formElement.reset(); 
        document.getElementById("storyText").style.display="none"; 
    }, 5000)

    e.preventDefault();
});