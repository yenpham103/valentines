let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
const maxYesScale = 8;
let yesScale = 1;
const gifElement = document.getElementById("togepi-gif")
const noButton = document.getElementById("no-btn")
const yesButton = document.getElementById("yes-btn")

// array of gifs - in order
const gifs = ["images/togepi-happy.gif", "images/togepi-sad-1.gif", "images/togepi-sad-2.gif", "images/togepi-crying.gif"]
// array of messages
const buttonMessages = ["Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"]

// no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];
    }

    // change no button text
    noButton.textContent = buttonMessages[(noClicks % maxNoClicks)]

    // Adjust button width to fit text
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decrease the size of the no button
    if (noScale > minNoScale) {
        noScale -= 0.1
        // decrease the size of the no button
        noButton.style.transform = `scale(${noScale})`
    }
    
    if (yesScale < maxYesScale) {
        yesScale += 2
        // increase the size of the yes button
        yesButton.style.transform = `scale(${yesScale})`
    }
    // Adjust the gap dynamically
    document.querySelector(".btn-container").style.gap = `${yesScale * 45}px`

    // increment the number of clicks
    noClicks++;
})

// yesButton.addEventListener("click", () => {
//     window.location.href = yay.html;
// })