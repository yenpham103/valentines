// Constants
const noClicks = {
    count: 1,
    max: 4,
    scale: {
        current: 1,
        min: 0.65
    }
};

const yesScale = {
    current: 1,
    increment: 0.5
};

// DOM Elements
const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const message = document.getElementById("message");

// Content Arrays
const gifs = [
    "assets/images/togepi-happy.gif",
    "assets/images/togepi-sad-1.gif",
    "assets/images/togepi-sad-2.gif",
    "assets/images/togepi-crying.gif"
];

const buttonMessages = [
    "Are you sure? 🥺",
    "Pookie please! 💝",
    "Don't do this! 💔",
    "Last chance! 🙏"
];

const headerMessages = [
    "Will you be my Valentine?",
    "Please reconsider!",
    "I'll be so sad...",
    "Don't break my heart!"
];

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.color = `rgba(255, ${Math.random() * 50 + 150}, ${Math.random() * 50 + 150}, ${Math.random() * 0.5 + 0.5})`;
    heart.style.animation = `heartFloat ${Math.random() * 2 + 3}s linear`;
    
    document.querySelector('.hearts-bg').appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// No button click handler
noButton.addEventListener("click", () => {
    if (noClicks.count < noClicks.max) {
        // Update content
        gifElement.src = gifs[noClicks.count];
        noButton.textContent = buttonMessages[noClicks.count % noClicks.max];
        message.textContent = headerMessages[noClicks.count % noClicks.max];

        // Shake effect for the gif
        gifElement.style.animation = 'none';
        gifElement.offsetHeight; // Trigger reflow
        gifElement.style.animation = 'shake 0.5s ease';

        // Adjust button sizes
        if (noClicks.scale.current > noClicks.scale.min) {
            noClicks.scale.current -= 0.1;
            noButton.style.transform = `scale(${noClicks.scale.current})`;
        }

        // Make "Yes" button bigger
        const yesButtonStyle = window.getComputedStyle(yesButton);
        const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);
        const baseWidth = parseFloat(yesButtonStyle.width);
        const scaledWidth = baseWidth * yesScale.current;

        if (scaledWidth < maxYesWidth) {
            yesScale.current += yesScale.increment;
            yesButton.style.transform = `scale(${yesScale.current})`;

            // Adjust gap
            const rootStyles = getComputedStyle(document.documentElement);
            const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;
            const currentGap = parseFloat(buttonContainer.style.gap) || 20;
            const newGap = Math.sqrt(currentGap * gapScaleFactor);
            buttonContainer.style.gap = `${newGap}px`;
        }
    }

    noClicks.count++;
});