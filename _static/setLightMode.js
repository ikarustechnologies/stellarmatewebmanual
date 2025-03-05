// _static/set_light_mode.js
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("darkMode")) 
        {
        // If the darkMode preference is not set, force light mode by default
        localStorage.setItem("theme", "light");
        localStorage.setItem("darkMode", "dark");
        window.location.reload();
    }
});
