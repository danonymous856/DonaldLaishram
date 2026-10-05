const emailButton = document.querySelector("[data-copy-email]");
const yearButtons = document.querySelectorAll("[data-year]");
const journeyEntries = document.querySelectorAll("[data-journey-year]");

function copyEmail() {
    const email = "donaldlaishram2k2@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        if (!emailButton) return;
        const original = emailButton.textContent;
        emailButton.textContent = "Copied!";
        window.setTimeout(() => {
            emailButton.textContent = original;
        }, 1800);
    });
}

function setActiveYear(year) {
    yearButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.year === year);
    });

    journeyEntries.forEach((entry) => {
        entry.classList.toggle("is-active", entry.dataset.journeyYear === year);
    });
}

if (emailButton) {
    emailButton.addEventListener("click", copyEmail);
}

yearButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveYear(button.dataset.year));
});

if (yearButtons.length) {
    setActiveYear(yearButtons[0].dataset.year);
}
