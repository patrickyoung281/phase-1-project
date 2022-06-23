fetch("https://picsum.photos/v2/list") //fetch data from public API
    .then((resp) => resp.json())
    .then(function (data) {
        addFirstFlashCard(data)
    });

function addFirstFlashCard(jsonList) {

    const firstTwoCards = jsonList.slice(2,4)   //create new array of objects from original API data
    firstTwoCards[0]["text"] = "Wenn ich Freizeit habe, \n gehe ich gerne wandern."     //add new key: value pairs to each of the two objects in sliced array
    firstTwoCards[0]["English"] = "to hike"
    firstTwoCards[0]["GermanVerb"] = "wandern"
    firstTwoCards[1]["text"] = "Wenn ich Freizeit habe, \n gehe ich gerne schwimmen." 
    firstTwoCards[1]["English"] = "to swim"
    firstTwoCards[1]["GermanVerb"] = "schwimmen"

    firstTwoCards.forEach(function (element, i) {   //iterate over my sliced array using forEach

    const container = document.getElementById("cardContainer") //create new DOM elements for each array element. This is where API data will be displayed for the user
    const newDiv = document.createElement("div")
    newDiv.className = "cards"
    container.appendChild(newDiv)
    
    const textTag = document.createElement("h2") // create text element for each image 
    textTag.id = `Card${i}`;
    textTag.innerText = element.text // text accessed from the key:value pair created on lines 12 and 15 
    textTag.className = "frontText"
    textTag.style.padding = "40px";
    textTag.style.lineHeight = "40px";
    textTag.style.position = "relative"; 
    textTag.style.float = "left"; 
    textTag.style.display = "block";
    newDiv.appendChild(textTag);
    
    const imageTag = document.createElement("img") // create img element for the image from the API
    imageTag.src = element.download_url // the image URL from the API becomes the src for the image tag
    imageTag.className = "image"
    imageTag.id = `CardImage${i}`;
    imageTag.style.padding = "5px";
    imageTag.style.borderStyle = "solid";
    imageTag.style.borderColor = "red";
    imageTag.style.borderWidth = "5px";
    newDiv.appendChild(imageTag); 

    
    const button = document.createElement("button") //creates the English translation button 
    button.type = "button" 
    button.innerText = "Click here for English translation" 
    button.className = "firstButtons"
    button.style.color = "blue";
    button.style.position = "relative";
    button.style.bottom = "250px";
    button.style.left = "30px";
    newDiv.appendChild(button)
    button.addEventListener("click", showEnglishTranslation);

    const english = element.English //creates global english variable for use in two following functions 

    function showEnglishTranslation() { 
        alert(`English translation: "When I have free time, I like ${english}."`);
    }

    const gotItButton = document.createElement("button") //creates got it button
    gotItButton.className = "gotItButtons0"
    newDiv.appendChild(gotItButton)
    gotItButton.fontSize = "24px";
    gotItButton.innerText = "Click here when you feel like you have memorized the word!" 
    gotItButton.style.backgroundColor = "yellow";
    gotItButton.style.clear = "both";
    

    gotItButton.addEventListener("click", changeColor);

    function changeColor () {
        gotItButton.style.backgroundColor = "MediumSpringGreen";
        gotItButton.fontSize = "24px"; 
        gotItButton.innerText = `Gratuliere! You know that "${element.GermanVerb}" means "${english}."\nKeep going until you have memorized all of the words!`;
    } 
    })    
}

const form = document.querySelector("form"); //user created flashcards form 

const formButton = document.getElementById("submitButton") //Event listeners for interactivity on submit button 

formButton.addEventListener("mouseover", colorSwitch)
function colorSwitch (e) {
    e.target.style.backgroundColor = "orange";
    e.target.style.color = "blue";
}

formButton.addEventListener("mouseout", originalColor)
function originalColor (e) {
    e.target.style.backgroundColor = "blue";
    e.target.style.color = "orange";
}

form.addEventListener("submit", addNewCard) //fired when a user submits a new card 

function addNewCard(event) {
    event.preventDefault()
    const name = event.target.name.value // gives access to three form input boxes/values 
    const image = event.target.image.value 
    const english = event.target.englishTranslation.value

    const container = document.getElementById("cardContainer") //new card DOM div
    const newDiv = document.createElement("div")
    newDiv.className = "cards"
    container.appendChild(newDiv) 


    const text = document.createElement("h2") //new card German text 
    const userImage = document.createElement("img")
    text.innerText = `Wenn ich Freizeit habe, \n gehe ich gerne ${name}`
    text.style.padding = "40px";
    text.style.lineHeight = "40px";
    text.className = "frontText"
    
    userImage.src = image //new card image 
    userImage.className = "image" 
    userImage.style.padding = "5px";
    userImage.style.borderStyle = "solid";
    userImage.style.borderColor = "red";
    userImage.style.borderWidth = "5px";
    newDiv.appendChild(userImage)
    newDiv.appendChild(text)
    
    const button = document.createElement("button") //new card English translation button for user-created cards  
    button.type = "button" 
    button.innerText = "Click here for English translation" 
    button.className = "newButtons"
    newDiv.appendChild(button)
    button.style.color = "blue";
    button.style.position = "relative";
    button.style.bottom = "250px";
    button.style.left = "30px";
    button.addEventListener("click", showEnglishTranslation)

    function showEnglishTranslation() {
        alert(`English translation: "When I have free time, I like ${english}."`);
    }

    const gotItButton = document.createElement("button") //creates got it button for user-created cards 
    gotItButton.className = "gotItButtons0"
    newDiv.appendChild(gotItButton)
    gotItButton.innerText = "Click here when you feel like you have memorized the word!" 
    gotItButton.style.backgroundColor = "yellow";
    gotItButton.style.position = "relative";
    gotItButton.style.left = "-600px";
    gotItButton.style.bottom = "50px";
    gotItButton.style.fontSize = "16px";

    gotItButton.addEventListener("click", changeColor);

    function changeColor () {
        gotItButton.style.backgroundColor = "MediumSpringGreen";
        gotItButton.fontSize = "24px"; 
        gotItButton.innerText = `Gratuliere! You know that "${name}" means "${english}."\nKeep going until you have memorized all of the words!`;

    } 

}