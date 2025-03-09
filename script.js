// go to README.md

// code:

// Create Open Menu Button
let openMenuButton = document.createElement("button");
openMenuButton.innerText = "Open Hack Menu";
openMenuButton.style.position = "fixed";
openMenuButton.style.top = "20px";
openMenuButton.style.left = "20px";
openMenuButton.style.padding = "12px 24px";
openMenuButton.style.backgroundColor = "black";
openMenuButton.style.color = "white";
openMenuButton.style.border = "2px solid transparent";
openMenuButton.style.borderRadius = "8px";
openMenuButton.style.fontSize = "1rem";
openMenuButton.style.cursor = "pointer";
openMenuButton.style.zIndex = "9998";
openMenuButton.style.transition = "border 0.5s ease";

// Rainbow outline effect
openMenuButton.addEventListener("mouseover", function() {
    openMenuButton.style.animation = "rainbowOutline 1.5s linear infinite";
});

openMenuButton.addEventListener("mouseout", function() {
    openMenuButton.style.animation = "";
});

// Rainbow outline animation
document.styleSheets[0].insertRule(`
@keyframes rainbowOutline {
    0% { border-color: red; }
    14% { border-color: orange; }
    28% { border-color: yellow; }
    42% { border-color: green; }
    57% { border-color: blue; }
    71% { border-color: indigo; }
    85% { border-color: violet; }
    100% { border-color: red; }
}
`, 0);

// Hack Menu
let menu = document.createElement("div");
menu.style.position = "fixed";
menu.style.top = "50%";
menu.style.left = "50%";
menu.style.transform = "translate(-50%, -50%)";
menu.style.border = "5px solid #5c3c92"; // Dark purple border
menu.style.padding = "30px";
menu.style.backgroundColor = "#1a1a1a"; // Dark background
menu.style.color = "white"; // White text for visibility
menu.style.textAlign = "center";
menu.style.fontSize = "1.5rem";
menu.style.zIndex = "9999";
menu.style.borderRadius = "15px"; // Rounded corners
menu.style.display = "none"; // Hidden initially

let buttons = ["Enable Dark Mode", "System Alert", "Login Information"];

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
        }
    });
    menu.appendChild(button);
});

// Create Close Button
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
    menu.style.display = "none"; // Hide the menu when closed
});

// Append the close button to the menu
menu.appendChild(closeButton);
document.body.appendChild(menu);

// Open Menu Button functionality
openMenuButton.addEventListener("click", function() {
    menu.style.display = "block"; // Show the menu when the button is clicked
});

document.body.appendChild(openMenuButton);

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
