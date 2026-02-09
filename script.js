const CORRECT_PASSWORD = "LOML@1234";

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function verifyPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordValue = passwordInput.value.trim();
    const errorElement = document.getElementById('passwordError');
    
    if (passwordValue === CORRECT_PASSWORD) {
        document.getElementById('passwordModal').style.setProperty('display', 'none', 'important');
        document.getElementById('mainContent').style.setProperty('display', 'flex', 'important');
        errorElement.textContent = '';
        passwordInput.value = '';
    } else {
        errorElement.textContent = '❌ Wrong password. Try again!';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function handlePasswordKeyPress(event) {
    if (event.key === 'Enter') {
        verifyPassword();
    }
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}