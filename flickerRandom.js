const projectAnchors = document.querySelectorAll('.project-tile a');
let currentAnimation = null;

function startRandomAnimation() {
    // If there's a current animation, remove it
    if (currentAnimation) {
        currentAnimation.style.animation = '';
        currentAnimation.style.borderColor = ''; 
    }

    // Pick a random anchor
    const randomIndex = Math.floor(Math.random() * projectAnchors.length);
    const randomAnchor = projectAnchors[randomIndex];
    
    // Random duration between 3 and 8 seconds
    const randomDuration = 3 + (Math.random() * 5);
    
    // Start new animation
    randomAnchor.style.animation = `randomFlicker ${randomDuration}s`;
    currentAnimation = randomAnchor;

    // Set timeout for next animation
    setTimeout(() => {
        startRandomAnimation();
    }, (randomDuration * 1000) + (Math.random() * 2000 + 1000));
}

// Start the cycle
startRandomAnimation();