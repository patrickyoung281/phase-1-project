const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

fetch("https://picsum.photos/v2/list")
    .then((resp) => resp.json())
    //.then((json) => console.log(json))
    .then(function (data) {
        addFirstFlashCard(data)
    });

function addFirstFlashCard(jsonList) {
    const exampleCard = jsonList[3].download_url
    const flashcards = document.getElementById("flashcards")
    const newCard = document.createElement("img")
    newCard.className = "flashCardFormat"
    newCard.src = exampleCard
    const newCardtextFront = document.createElement("h2")
    newCardtextFront.innerText = "schwimmen"
    flashcards.appendChild(newCard)
    flashcards.appendChild(newCardtextFront);
}