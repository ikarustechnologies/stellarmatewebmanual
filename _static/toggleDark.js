// _static/js/dark_mode_toggle.js

document.addEventListener("DOMContentLoaded", function() {
    // Check the current mode
    const currentMode = localStorage.getItem('darkMode') || 'light';  // Default to light if no mode is saved
    
    // Set the mode on page load
    if (currentMode === 'dark') {
        document.body.classList.add('dark');
    }

    // Create the toggle button
    const button = document.createElement('button');
    button.innerHTML = currentMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.zIndex = '1000';
    button.style.padding = '10px';
    
    // Toggle the dark mode
    button.onclick = function() {
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        localStorage.setItem('darkMode', newMode);
        document.body.classList.toggle('dark');
        button.innerHTML = newMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };

    document.body.appendChild(button);
});
