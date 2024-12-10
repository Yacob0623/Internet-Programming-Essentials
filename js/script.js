document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        // Toggle a class that controls visibility
        navMenu.classList.toggle("nav-visible");
    });
});



// Flag to track if the box has already been clicked
let isClicked = false;

// Changes the appearance of the box element on click
function changeBoxAppearance() {
    const box = document.getElementById("colorBox");
    
    if (!isClicked) {
        // First click: Show text and image
        box.style.backgroundColor = "lightblue";
        box.style.color = "white";
        box.innerText = "Style Changed Using: ";
        
        // Create and insert an image element
        const img = document.createElement("img");
        img.src = "images/js.png"; // Replace with your image source
        img.alt = "Box Image";

        // Append the image to the box
        box.appendChild(img);

        // Set flag to true after the first click
        isClicked = true;
    } else {
        // Second click: Restore text and remove the image
        box.style.backgroundColor = "";  // Reset background color
        box.style.color = "";            // Reset text color
        box.innerText = "Click to Change!";  // Restore the original text

        // Remove the image if it exists
        const existingImage = box.querySelector("img");
        if (existingImage) {
            existingImage.remove();
        }

        // Set flag back to false for the next cycle
        isClicked = false;
    }
}