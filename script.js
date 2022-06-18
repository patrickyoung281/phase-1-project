fetch("https://picsum.photos/v2/list")
    .then((resp) => resp.json())
    .then(function (data) {
        addFirstFlashCard(data)
    });


function addFirstFlashCard(jsonList) {


    const firstTwoCards = jsonList.slice(2,4)
    firstTwoCards[0]["text"] = "Wenn ich Freizeit habe, \n gehe ich gerne wandern." 
    firstTwoCards[0]["English"] = "to hike."
    firstTwoCards[1]["text"] = "Wenn ich Freizeit habe, \n gehe ich gerne schwimmen." 
    firstTwoCards[1]["English"] = "to swim."

    firstTwoCards.forEach(function (element, i) {

    const container = document.getElementById("cardContainer")
    const newDiv = document.createElement("div")
    newDiv.className = "cards"
    container.appendChild(newDiv)
    const firstCardImage = element.download_url

    const imageTag = document.createElement("img")
    imageTag.src = firstCardImage
    imageTag.className = "image"
    imageTag.style.padding = "5px";
    imageTag.style.borderStyle = "solid";
    imageTag.style.borderColor = "red";
    imageTag.style.borderWidth = "5px";
    newDiv.appendChild(imageTag); 

    const textTag = document.createElement("h2")
    textTag.id = `Card${i}`

    textTag.innerText = element.text 
    textTag.className = "frontText"
    textTag.style.padding = "40px";
    textTag.style.lineHeight = "40px";
    newDiv.appendChild(textTag);

    const button = document.createElement("button")
    button.type = "button" 
    button.innerText = "Click here for English translation" 
    button.id = "newButtons1"
    button.style.color = "blue";
    button.style.position = "relative";
    button.style.bottom = "115px";
    button.style.left = "30px";
    newDiv.appendChild(button)
    const english = element.English
    button.addEventListener("click", showEnglishTranslation);

    function showEnglishTranslation() {
        alert(`English translation: "When I have free time, I like ${english}."`);
    }
    })
}

const form = document.querySelector("form");

form.addEventListener("submit", addNewCard)

function addNewCard(event) {
    event.preventDefault()
    const name = event.target.name.value
    const image = event.target.image.value 
    const english = event.target.englishTranslation.value

    const container = document.getElementById("cardContainer")
    const newDiv = document.createElement("div")
    newDiv.className = "cards"
    container.appendChild(newDiv) 
    const text = document.createElement("h2")
    const userImage = document.createElement("img")
    text.innerText = `Wenn ich Freizeit habe, \n gehe ich gerne ${name}`
    text.style.padding = "40px";
    text.style.lineHeight = "40px";
    
    
    userImage.src = image 
    text.className = "frontText"
    userImage.className = "image" 
    userImage.style.padding = "5px";
    userImage.style.borderStyle = "solid";
    userImage.style.borderColor = "red";
    userImage.style.borderWidth = "5px";
    newDiv.appendChild(userImage)
    newDiv.appendChild(text)
    
    const button = document.createElement("button")
    button.type = "button" 
    button.innerText = "Click here for English translation" 
    button.className = "newButtons"
    newDiv.appendChild(button)
    button.style.color = "blue";
    button.style.position = "relative";
    button.style.bottom = "115px";
    button.style.left = "30px";
    button.addEventListener("click", showEnglishTranslation)


    const englishElement = document.createElement("h3")
    englishElement.className = "englishTranslation"
    englishElement.innerText = `(${name} = ${english})` 
    newDiv.appendChild(englishElement)

    newDiv.setAttribute("id", name) 

    
    const buttons = document.querySelector("button")

    console.log("buttons", buttons)

    buttons.addEventListener("click", showEnglishTranslation);

    function showEnglishTranslation() {
        alert(`English translation: "When I have free time, I like ${english}."`);
    }

    const gotItButton = document.createElement("button")
    gotItButton.className = "gotItButtons"
    newDiv.appendChild(gotItButton)
    gotItButton.innerText = "Click here when you feel like you have memorized the word!" 
    gotItButton.style.backgroundColor = "yellow";
    gotItButton.style.position = "relative";
    gotItButton.style.left = "340px";
    gotItButton.style.bottom = "40px";
    gotItButton.style.fontSize = "16px";

    gotItButton.addEventListener("click", changeColor);

   function changeColor () {
        gotItButton.style.backgroundColor = "MediumSpringGreen";
        gotItButton.fontSize = "24px"; 
        gotItButton.innerText = `Gratuliere! You know that "${name}" means "${english}."\nKeep going until you have memorized all of the words!`;

    } 

}