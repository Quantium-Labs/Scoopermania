document.addEventListener('DOMContentLoaded', function() {
    // Get the current path to determine if we're in a subdirectory
    const path = window.location.pathname;
    const navbarPath = path.includes('/supporters/') || path.includes('/tickets/') ? '../navbar.html' : 'navbar.html';

    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});

const screenDimmer = document.getElementById("screen-dimmer");
const center = document.getElementById("center");
const mainBtn = document.getElementById("scroll");
const infoRight = document.getElementById("infoRight");
const bar = document.getElementById("bar");

let dimmerOn = false; // Tracks if the PERSISTENT dimmer (from mainBtnClick) is active

const date = new Date("May 17, 2025, 11:00:00").getTime();
let intervalId = null;

// --- Function to update the countdown display ---
function updateCountdown() {
    // Only run if countdown elements exist
    if (!document.getElementById("days")) return;
    let current = new Date().getTime();
    const distance = date - current;

    if (distance < 0) {
        const countdownDays = document.getElementById("days");
        const countdownHours = document.getElementById("hours");
        const countdownMinutes = document.getElementById("minutes");
        const countdownSeconds = document.getElementById("seconds");
        if (countdownDays) countdownDays.innerHTML = "00";
        if (countdownHours) countdownHours.innerHTML = "00";
        if (countdownMinutes) countdownMinutes.innerHTML = "00";
        if (countdownSeconds) countdownSeconds.innerHTML = "00";
        if (intervalId) {
            clearInterval(intervalId);
        }
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownDays = document.getElementById("days");
    const countdownHours = document.getElementById("hours");
    const countdownMinutes = document.getElementById("minutes");
    const countdownSeconds = document.getElementById("seconds");

    if (countdownDays) countdownDays.innerHTML = ("0" + days).slice(-2);
    if (countdownHours) countdownHours.innerHTML = ("0" + hours).slice(-2);
    if (countdownMinutes) countdownMinutes.innerHTML = ("0" + minutes).slice(-2);
    if (countdownSeconds) countdownSeconds.innerHTML = ("0" + seconds).slice(-2);
}
// --- End of updateCountdown function ---

// --- Interaction Functions ---
function barHover() {
    if (!bar) return;
    // Apply bar hover styles
    const allButtons = document.querySelectorAll(".btn");
    bar.style.width = "30%";
    bar.style.height = "8%";
    bar.style.borderRadius = "2em";
    bar.style.backgroundColor = "rgba(130, 130, 130, 0.5)";
    bar.style.borderColor = "rgb(170, 170, 170)";
    bar.style.backdropFilter = "blur(2vw)";
    bar.style.boxShadow = "0px 0px 85px 45px rgba(255,255,255,0.25)";

    allButtons.forEach((button) => {
        button.style.fontSize = "1.4vw";
    });

    // Apply TEMPORARY dimmer visual effect ONLY if the main dimmer isn't active
    if (!dimmerOn && screenDimmer) {
        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        screenDimmer.style.backdropFilter = "blur(0.2vw)";
        screenDimmer.style.webkitBackdropFilter = "blur(0.2vw)";
        // DO NOT set dimmerOn = true or pointerEvents = 'auto' here
    }
}

function barOff() {
    if (!bar) return;
    // Apply bar non-hover styles
    const allButtons = document.querySelectorAll(".btn");
    bar.style.width = "25%";
    bar.style.height = "7%";
    bar.style.borderRadius = "1.45em";
    bar.style.backgroundColor = "rgba(229, 229, 229, 0.3)";
    bar.style.borderColor = "#E5E5E5";
    bar.style.backdropFilter = "blur(1.5vw)";
    bar.style.boxShadow = "0 0.8vw 1.5vw rgba(0, 0, 0, 0.25)";

    allButtons.forEach((button) => {
        button.style.fontSize = "1.2vw";
    });

    // Remove TEMPORARY dimmer visual effect ONLY if the main dimmer isn't active
    if (!dimmerOn && screenDimmer) {
        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0)";
        screenDimmer.style.backdropFilter = "blur(0)";
        screenDimmer.style.webkitBackdropFilter = "blur(0)";
        // DO NOT set dimmerOn = false or pointerEvents = 'none' here
    }
}

function itemHover(element) {
    const img = element.querySelector(".image");
    const btn = element.querySelector(".btn");
    if (img) {
        img.style.opacity = 0;
        img.style.transform = "scale(0.9) translateZ(0)"
    }
    if (btn) {
        btn.style.opacity = 1;
        btn.style.transform = "scale(1.1) translateZ(0)";
    }
}

function itemLeave(element) {
    const img = element.querySelector(".image");
    const btn = element.querySelector(".btn");
    if (img) {
        img.style.opacity = 1;
        img.style.transform = "scale(1) translateZ(0)";
    }
    if (btn) {
        btn.style.opacity = 0;
        btn.style.transform = "scale(1) translateZ(0)";
    }
}

function mainBtnClick() {
    // Only run if infoRight exists
    if (!infoRight) return;
    // Hide centerTickets if it exists (for tickets page)
    const centerTickets = document.getElementById("centerTickets");
    if (centerTickets) {
        centerTickets.style.display = "none";
    }
    // --- Animate elements ---
    if (center) {
        center.style.transition = "0.7s ease-in-out";
        center.style.scale = 0.5;
        center.style.left = "1vw";
        center.style.bottom = "1vw";
        center.style.backgroundColor = "rgba(130, 130, 130, 0.5)";
        center.style.borderColor = "rgb(170, 170, 170)";
    }
    const labels = document.querySelectorAll(".label");
    labels.forEach((label) => {
        label.style.transition = "0.7s ease-in-out";
        label.style.color = "#E5E5E5";
    });
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        number.style.transition = "0.7s ease-in-out";
        number.style.color = "#E5E5E5";
    });
    const colons = document.querySelectorAll(".colon");
    colons.forEach((colon) => {
        colon.style.transition = "0.7s ease-in-out";
        colon.style.color = "#E5E5E5";
    });
    if (mainBtn) {
        mainBtn.style.opacity = 0;
        mainBtn.style.pointerEvents = "none";
    }
    infoRight.style.transition = "0.7s ease-in-out";
    infoRight.style.left = "50%";
    infoRight.style.zIndex = 10;
    if (bar) {
        bar.style.transition = "0.5s ease-in-out";
        bar.style.top = "-10%";
        bar.style.pointerEvents = "none";
    }
    // --- Activate PERSISTENT dimmer ---
    if (screenDimmer) {
        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        screenDimmer.style.pointerEvents = "auto"; // Make it clickable
    }
    dimmerOn = true; // Set the persistent state
}

function exitInfo() {
    // Only run if the persistent dimmer is active
    const centerTickets = document.getElementById("centerTickets");
    if (centerTickets) {
        centerTickets.style.display = "flex";
    }
    if (dimmerOn) {
        // --- Animate elements back ---
        if (center) {
            center.style.transition = "0.7s ease-in-out";
            center.style.scale = 1;
            center.style.left = "50%";
            center.style.bottom = "50%";
            center.style.backgroundColor = "rgba(229, 229, 229, 0.3)";
            center.style.borderColor = "#E5E5E5"; // FIX: Typo corrected
        }
        const labels = document.querySelectorAll(".label");
        labels.forEach((label) => {
            // No need for transition here if you want instant change back
            label.style.color = "white";
        });
        const numbers = document.querySelectorAll(".number");
        numbers.forEach((number) => {
            number.style.color = "white";
        });
        const colons = document.querySelectorAll(".colon");
        colons.forEach((colon) => {
            colon.style.color = "white";
        });
        if (infoRight) {
            infoRight.style.transition = "0.7s ease-in-out";
            infoRight.style.left = "200%";
            infoRight.style.zIndex = 0; // Or appropriate default
        }
        if (bar) {
            bar.style.transition = "0.5s ease-in-out";
            bar.style.top = "8%";
            bar.style.pointerEvents = "auto";
        }
        // --- Deactivate PERSISTENT dimmer ---
        if (screenDimmer) {
            screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0)";
            screenDimmer.style.backdropFilter = "blur(0)";
            screenDimmer.style.webkitBackdropFilter = "blur(0)";
            screenDimmer.style.pointerEvents = "none"; // FIX: Make it unclickable
        }
        document.body.style.cursor = "default";
        if (mainBtn) {
            setTimeout(() => {
                mainBtn.style.opacity = 1;
                mainBtn.style.pointerEvents = "auto";
            }, 500); // 0.5 second delay
        }
        dimmerOn = false;
    }
}
// --- End of Interaction Functions ---

// --- Initial Setup ---
if (document.getElementById("days")) {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
    setTimeout(() => {
        if (bar) bar.offsetHeight; // Force reflow
    }, 10)
}

// Only add document click listeners if bar or infoRight exist
if (bar) {
    document.addEventListener("click", (event) => {
        const menuBar = document.querySelector("#bar");
        if (!menuBar) return;
        const isClickInsideMenuBar = menuBar.contains(event.target);
        if (!isClickInsideMenuBar && dimmerOn) {
            barOff(); // Call your existing function to reset styles
        }
    });
}
if (infoRight) {
    document.addEventListener("click", (event) => {
        const infoRightElement = document.querySelector("#infoRight");
        if (!infoRightElement) return;
        const isClickInsideInfoRight = infoRightElement.contains(event.target);
        if (!isClickInsideInfoRight && dimmerOn) {
            exitInfo(); // Call the function to close the popup
        }
    });
}
if (mainBtn && infoRight) {
    mainBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        // Your existing logic to show the infoRight popup
        infoRight.style.display = "block";
    });
}

function buy() {
    const ticketType = document.getElementById('ticketType')?.value;
    let url = '';
    switch (ticketType) {
        case 'Premium':
            url = 'https://youtube.com';
            break;
        case 'Adult':
            url = 'https://google.com';
            break;
        case 'Child':
            url = 'https://docs.google.com';
            break;
        default:
            return; // Do nothing if no valid option
    }
    window.open(url, '_blank');
}

