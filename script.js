let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; // This now tracks the scaling factor directly
const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// array of gifs - in order
const gifs = ["assets/images/togepi-happy.gif", "assets/images/togepi-sad-1.gif", "assets/images/togepi-sad-2.gif", "assets/images/togepi-crying.gif"];
// array of messages
const buttonMessages = ["Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"];

// no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];
    }

    // change no button text
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    // Adjust button width to fit text
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decrease the size of the no button
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // Calculate the scaled width of the yesButton
    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale; // Reflects the actual visual size of the button

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    // Check if the scaled width is less than the max width
    if (scaledWidth < maxYesWidth) {
        yesScale += 1;
        yesButton.style.transform = `scale(${yesScale})`;

        // Adjust the gap dynamically
        const currentGap = parseFloat(buttonContainer.style.gap) || 30;
        const newGap = Math.sqrt(currentGap * 250); // Increase at a decreasing rate
        buttonContainer.style.gap = `${newGap}px`;
    }

    // increment the number of clicks
    noClicks++;
});
