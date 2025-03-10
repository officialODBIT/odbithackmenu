// Create Open Menu Button
let openMenuButton = document.createElement("button");
openMenuButton.innerText = "Open Menu";
openMenuButton.style.position = "fixed";
openMenuButton.style.top = "20px";
openMenuButton.style.left = "20px";
openMenuButton.style.padding = "12px 24px";
openMenuButton.style.backgroundColor = "transparent";
openMenuButton.style.color = "white";
openMenuButton.style.fontSize = "1.2rem";
openMenuButton.style.border = "2px solid transparent";
openMenuButton.style.borderRadius = "8px";
openMenuButton.style.cursor = "pointer";
openMenuButton.style.outline = "none";

// Add Rainbow Outline Effect to Open Menu Button
openMenuButton.style.background = "linear-gradient(90deg, #ff0000, #ff9900, #33cc33, #0066ff, #9900cc, #ff0066)";
openMenuButton.style.backgroundSize = "400%";
openMenuButton.style.animation = "gradientAnimation 3s ease infinite";

// Open Menu Button Animation
let style = document.createElement('style');
style.innerHTML = `
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`;
document.head.appendChild(style);

// Create Hack Menu Frame
let menu = document.createElement("div");
menu.style.position = "fixed";
menu.style.top = "50%";
menu.style.left = "50%";
menu.style.transform = "translate(-50%, -50%)";
menu.style.padding = "30px";
menu.style.backgroundColor = "#1a1a1a"; // Dark background
menu.style.color = "white"; // White text for visibility
menu.style.textAlign = "center";
menu.style.fontSize = "1.5rem";
menu.style.zIndex = "9999";
menu.style.borderRadius = "15px"; // Rounded corners
menu.style.border = "5px solid black"; // Black frame for the rainbow effect
menu.style.display = "none"; // Hidden by default

// Create Rainbow Border Effect around menu
menu.style.background = "#000000";
menu.style.backgroundSize = "400%";
menu.style.animation = "gradientAnimation 3s ease infinite";

menu.innerHTML = "<h2>Settings</h2><br>";

let buttons = [
    "Enable Dark Mode", 
    "System Alert", 
    "Login Information", 
    "Toggle Background Color", 
    "Display Random Quote", 
    "Console Message",
    "Change Text Color",
    "Show Welcome Message",
    "Launch Easter Egg",
    "Background Animation",
    "Toggle Images",
    "Disable Right Click",
    "Change Button Colors",
    "Alert Me",
    "Display System Status"
];

// Create buttons and add event listeners
buttons.forEach(buttonText => {
    let button = document.createElement("button");
    button.innerText = buttonText;
    button.style.margin = "10px";
    button.style.padding = "12px 24px";
    button.style.backgroundColor = "#5c3c92"; // Dark purple
    button.style.color = "white";
    button.style.fontSize = "1rem";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.borderRadius = "8px";
    button.addEventListener("click", function() {
        if (buttonText === "Enable Dark Mode") {
            enableDarkMode();
        } else if (buttonText === "System Alert") {
            showSystemAlert();
        } else if (buttonText === "Login Information") {
            showLoginInfo();
        } else if (buttonText === "Toggle Background Color") {
            toggleBackgroundColor();
        } else if (buttonText === "Display Random Quote") {
            showRandomQuote();
        } else if (buttonText === "Console Message") {
            displayConsoleMessage();
        } else if (buttonText === "Change Text Color") {
            changeTextColor();
        } else if (buttonText === "Show Welcome Message") {
            showWelcomeMessage();
        } else if (buttonText === "Launch Easter Egg") {
            launchEasterEgg();
        } else if (buttonText === "Background Animation") {
            backgroundAnimation();
        } else if (buttonText === "Toggle Images") {
            toggleImages();
        } else if (buttonText === "Disable Right Click") {
            disableRightClick();
        } else if (buttonText === "Change Button Colors") {
            changeButtonColors();
        } else if (buttonText === "Alert Me") {
            alertMe();
        } else if (buttonText === "Display System Status") {
            displaySystemStatus();
        }
    });
    menu.appendChild(button);
});

// Create Close Button for the menu
let closeButton = document.createElement("button");
closeButton.innerText = "Close Menu";
closeButton.style.marginTop = "20px";
closeButton.style.padding = "12px 24px";
closeButton.style.backgroundColor = "#f44336"; // Red close button
closeButton.style.color = "white";
closeButton.style.fontSize = "1rem";
closeButton.style.border = "none";
closeButton.style.cursor = "pointer";
closeButton.style.borderRadius = "8px";
closeButton.addEventListener("click", function() {
    menu.style.display = "none"; // Hide the menu when clicked
});

// Add the Close Button to the menu
menu.appendChild(closeButton);

// Add the Open Menu Button to the page
document.body.appendChild(openMenuButton);
document.body.appendChild(menu);

// When the open menu button is clicked, show the menu
openMenuButton.addEventListener("click", function() {
    menu.style.display = "block"; // Show the menu
});

// Keep the Open Menu Button visible after closing the menu
openMenuButton.style.display = "block";

// Enable Dark Mode
function enableDarkMode() {
    document.body.style.backgroundColor = "#121212"; // Dark background
    document.body.style.color = "#e1e1e1"; // Light text color
    document.body.style.transition = "background-color 0.5s, color 0.5s"; // Smooth transition
}

// System Alert Function
function showSystemAlert() {
    let alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.padding = "20px";
    alertBox.style.backgroundColor = "#5c3c92"; // Dark purple
    alertBox.style.color = "white";
    alertBox.style.textAlign = "center";
    alertBox.style.fontSize = "1.2rem";
    alertBox.style.zIndex = "10000";
    alertBox.style.borderRadius = "15px";
    alertBox.innerHTML = "<strong>ERROR: 403 UNAUTHORIZED</strong><br><br>This is not for you. Sorry!<br><br><button id='okButton' style='padding: 10px 20px; background-color: #f44336; color: white; border: none; border-radius: 8px;'>OK</button>";

    document.body.appendChild(alertBox);

    document.getElementById("okButton").addEventListener("click", function() {
        alertBox.remove();
    });
}

// Login Info Reveal
function showLoginInfo() {
    let infoBox = document.createElement("div");
    infoBox.style.position = "fixed";
    infoBox.style.top = "50%";
    infoBox.style.left = "50%";
    infoBox.style.transform = "translate(-50%, -50%)";
    infoBox.style.padding = "20px";
    infoBox.style.backgroundColor = "#1a1a1a"; // Dark background
    infoBox.style.color = "white";
    infoBox.style.textAlign = "center";
    infoBox.style.fontSize = "1.2rem";
    infoBox.style.zIndex = "10000";
    infoBox.style.border = "5px solid #5c3c92"; // Dark purple border
    infoBox.style.borderRadius = "15px";
    infoBox.innerHTML = "<strong>login:</strong><br><br>specid: administrativetestingservice<br>pin: admin8dJ@IO9cW**@&<br><br><button id='closeButton' style='padding: 10px 20px; background-color: #f44336; color: white; border: none; border-radius: 8px;'>Close</button>";

    document.body.appendChild(infoBox);

    document.getElementById("closeButton").addEventListener("click", function() {
        infoBox.remove();
    });
}

// Toggle Background Color Hack
function toggleBackgroundColor() {
    if (document.body.style.backgroundColor === "rgb(18, 18, 18)") {
        document.body.style.backgroundColor = "#ffffff"; // Change to white
        document.body.style.color = "#000000"; // Change text color to black
    } else {
        document.body.style.backgroundColor = "#121212"; // Change to dark
        document.body.style.color = "#e1e1e1"; // Change text color to light
    }
}

// Show Random Quote
function showRandomQuote() {
    const quotes = [
        "Don't watch the clock; do what it does. Keep going.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Believe you can and you're halfway there."
    ];
    alert(quotes[Math.floor(Math.random() * quotes.length)]);
}

// Display Console Message
function displayConsoleMessage() {
    console.log("This is a console message.");
}

// Change Text Color
function changeTextColor() {
    document.body.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // Random color
}

// Show Welcome Message
function showWelcomeMessage() {
    alert("Welcome to the website!");
}

// Launch Easter Egg
function launchEasterEgg() {
    alert("Easter Egg activated!");
}

// Background Animation
function backgroundAnimation() {
    document.body.style.animation = "backgroundChange 5s infinite";
    style.innerHTML += `
    @keyframes backgroundChange {
        0% { background-color: #ff0000; }
        25% { background-color: #ff9900; }
        50% { background-color: #33cc33; }
        75% { background-color: #0066ff; }
        100% { background-color: #9900cc; }
    }
    `;
}

// Toggle Images
function toggleImages() {
    let images = document.querySelectorAll("img");
    images.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
}

// Disable Right Click
function disableRightClick() {
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        alert("Right-click is disabled.");
    });
}

// Change Button Colors
function changeButtonColors() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16); // Random color
    });
}

// Alert Me
function alertMe() {
    alert("This is a custom alert!");
}

// Display System Status
function displaySystemStatus() {
    alert("System Status: All systems are operational.");
}
