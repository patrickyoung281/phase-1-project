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
    container.appendChild(imageTag) 

    const textTag = document.createElement("h2")
    textTag.innerText = "Wenn ich Freizeit habe, \n gehe ich scwhimmen" 
    textTag.className = "frontText"
    container.appendChild(textTag);

}

/*
function addNewCard (event) {
    event.preventDefault()
    const [name, image] = event.target



fetch("https://picsum.photos/v2/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  
    body: JSON.stringify({
      "name": name.value,
      "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    })
})

.then (response => response.json())
.then (response)

}
*/