// script.js
document.getElementById('celebrate-btn').addEventListener('click', function() {
    // Create confetti effect
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
    
    // Optional: Play a sound (uncomment if you have a sound file)
    // const audio = new Audio('celebration-sound.mp3');
    // audio.play();
});