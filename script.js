fetch("https://picsum.photos/v2/list")
    .then((resp) => resp.json())
    //.then((json) => console.log(json))
    .then(function (data) {
        addFirstFlashCard(data)
    });


function addFirstFlashCard(jsonList) {

    const container = document.getElementById("here")
    const firstCardImage = jsonList[3].download_url
    const imageTag = document.createElement("img")
    imageTag.src = firstCardImage
    imageTag.className = "image"
    container.appendChild(imageTag) 
}