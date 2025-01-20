let noClicks = 0;
const maxNoClicks = 4;
const maxYesSize = 300;

const gifElement = document.getElementById("togepi-gif")
const noButton = document.getElementById("no-btn")
const yesButton = document.getElementById("yes-btn")

// array of gifs - in order
// happy, sad1, sad2, crying
const gifs = ["images/togepi-happy.gif", "images/togepi-sad-1.gif", "images/togepi-sad-2.gif", "images/togepi-crying.gif"]
// array of messages
const buttonMessages = ["Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"]

// no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];

        // change no button text
        noButton.textContent = buttonMessages[noClicks]
        noClicks++;
    }
})

yesButton.addEventListener("click", () => {
    window.location.href = yay.html;
})