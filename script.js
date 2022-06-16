fetch("https://picsum.photos/v2/list")
    .then((resp) => resp.json())
    //.then((json) => console.log(json))
    .then(function (data) {
        addFirstFlashCard(data)
    });


function addFirstFlashCard(jsonList) {


    const container = document.getElementById("cardContainer")
    const newDiv = document.createElement("div")
    newDiv.className = "cards"
    container.appendChild(newDiv)
    const firstCardImage = jsonList[3].download_url
    const imageTag = document.createElement("img")
    imageTag.src = firstCardImage
    imageTag.className = "image"
    newDiv.appendChild(imageTag); 

    const textTag = document.createElement("h2")
    textTag.innerText = "Wenn ich Freizeit habe, \n gehe ich scwhimmen" 
    textTag.className = "frontText"
    newDiv.appendChild(textTag);

    const button = document.createElement("button")
    button.type = "button" 
    button.innerText = "Click here for English translation" 
    button.id = "newButtons1"
    newDiv.appendChild(button)
    
}

const form = document.querySelector("form");

form.addEventListener("submit", addNewCard)

function addNewCard(event) {
    event.preventDefault()
    const name = event.target.name.value
    const image = event.target.image.value 
    const english = event.target.englishTranslation.value

    console.log(english)

    const container = document.getElementById("cardContainer")
    const newDiv = document.createElement("div")
    newDiv.className = "cards"
    container.appendChild(newDiv) 
    const text = document.createElement("h2")
    const userImage = document.createElement("img")
    text.innerText = `Wenn ich Freizeit habe, \n gehe ich ${name}`
    text.style.padding = "20px";
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
        alert(`(${name} = ${english})`);
    }

}


