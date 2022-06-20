<h1>German FLashcard Generator</h1>

<h2>What is this app?</h2>

This app is designed to help beginning German students pracitce using new verbs that express how they like to spend their free time. The goal is to help them memorize these new verbs using images and written text. Students can also self-assess their progress by indicating when they have memorized each new verb. This is a student-generated list, meaning that a teacher is not providing a list of words for students to memroize. Rather, students have an opportunity to explore their own interests and create a list of cards that represents them. This makes the activity much more personal, and will allow students to accurately and honestly express themselves and what they enjoy doing. 

<h2>How can I use it?</h2>

That's easy! First, think of what you like to do in your free time. Then, enter a German verb for that activity in the infinitive. For example, if you like to run in your free time, you would enter the verb <em>laufen</em>. 

Then in the second box, enter the English verb in the infinitive (don't forget that the English infinitive includes the word "to!") For our example verb <em>laufen</em>, you would enter <em>to run</em>. 

Finally, use google to find an image that matches your chosen activity. Copy-and-paste the image URL into the third box.

Once you click "Create Flashcard," a new flashcard will be created using your given image and verb choice. 

Initially, you begin with two example flashcards. But you are enouraged to make as many flashcards as you can! The more, the better. 

<h2>How should I use the flashcards?</h2>

Initially, you will only be given the German verb in a sentence next to the image you chose. Your goal is to repeat the sentence aloud in German, and translate it into English. If you forget how to do that, click the "English Translation" button. The text will appear in English in a dialgoue box. Close the box, then see if you can read the German sentence again, followed by the translation. 

Once you have mastered translating by yourself, click the yellow "I got it!" box underneath the image. This will make the flashcard as memorized for yourself, and you can continue studying the other cards until you have memorized all of them. 

<h2>How does the code for this app work?</h2>

When a user first loads the page, a fetch request is sent to an outside API of images from this website: "https://picsum.photos/v2/list". The site has dozens of images arranged as objects in an array. I used only two of the images, but when I fetched them, I used the addFirstFlashCard function to import only two images, add new keys and values to them for English and German verbs, and add them to the DOM. The user then sees these as the first two flash cards. A second function, addNewCard, allows users to create their own card using the form. Within this function are elements that create the "I got it!" button, add English translations, and add the image that the user selects. 