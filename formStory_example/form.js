document.getElementById("submitButton").addEventListener('click', story);

function story() {  
    document.getElementById("form").style.display="none";
    let animalElement = document.getElementById("animal").value;
    let colorElement = document.getElementById("color").value;
    let locationElement = document.getElementById("location").value;
    console.log(`The ${animalElement} is ${colorElement} and likes to sleep in ${locationElement}`);

    const storyElement = document.createElement("p");
    storyElement.id = "storyText";
    storyElement.textContent = `The ${animalElement} is ${colorElement} and likes to sleep in ${locationElement}`;
    document.getElementById("content").appendChild(storyElement);

    setTimeout(() => {
        document.getElementById("form").style.display="block";
        document.getElementById("storyText").style.display="none";
    }, 5000)
}  