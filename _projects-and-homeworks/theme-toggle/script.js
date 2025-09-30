const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body

// get localStorage
const mode = localStorage.getItem("theme");
if (mode === "dark") {
    body.classList.toggle("dark");
}

toggleThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark"); // toggle "dark" class to turn it off/on
    if (mode === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
})