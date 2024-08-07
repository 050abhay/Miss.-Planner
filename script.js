function showSurprise() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }

    // Redirect to the surprise page after a short delay
    setTimeout(() => {
        window.location.href = 'surprise.html';
    }, 2000); // 2 seconds delay
}

// Confetti Styles
const confettiStyles = document.createElement('style');
confettiStyles.innerHTML = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ff6f61;
        opacity: 0.7;
        border-radius: 50%;
        animation: fall linear forwards;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyles);

