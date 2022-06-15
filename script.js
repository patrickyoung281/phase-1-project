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
    userImage.src = image 
    text.className = "frontText"
    userImage.className = "image" 
    newDiv.appendChild(userImage)
    newDiv.appendChild(text)
    
    const button = document.createElement("button")
    button.type = "button" 
    button.innerText = "Click here for English translation" 
    button.className = "buttons"
    newDiv.appendChild(button)

    const englishElement = document.createElement("h3")
    englishElement.innerText = `(${name} = ${english})` 
    newDiv.appendChild(englishElement)

    newDiv.setAttribute("id", name) 

}

/* const buttons = document.getElementsByClassName("buttons")

buttons.addEventListener("click", showEnglish)

function showEnglish (event) {
    event.preventDefault()
    const english = 
}


*/
