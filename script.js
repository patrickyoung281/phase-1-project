fetch("https://picsum.photos/v2/list")
    .then((resp) => resp.json())
    //.then((json) => console.log(json))
    .then(function (data) {
        addFirstFlashCard(data)
    });


function addFirstFlashCard(jsonList) {

    const container = document.getElementById("cardContainer")
    const firstCardImage = jsonList[3].download_url
    const imageTag = document.createElement("img")
    imageTag.src = firstCardImage
    imageTag.className = "image"
    container.appendChild(imageTag); 

    const textTag = document.createElement("h2")
    textTag.innerText = "Wenn ich Freizeit habe, \n gehe ich scwhimmen" 
    textTag.className = "frontText"
    container.appendChild(textTag);

}

const form = document.querySelector("form");

form.addEventListener("submit", addNewCard)

function addNewCard(event) {
    event.preventDefault()
    const name = event.target.name.value
    const image = event.target.image.value 

    const container = document.getElementById("cardContainer")
    const text = document.createElement("h2")
    const userImage = document.createElement("img")
    text.innerText = name
    userImage.src = image 
    container.appendChild(userImage)
    container.appendChild(text)      
}

