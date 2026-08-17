document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookieBanner");
    const accept = document.getElementById("acceptCookies");
    const decline = document.getElementById("declineCookies");
    const storageKey = "scheduleCookieConsent";

    if (!banner || !accept || !decline) return;

    function saveChoice(choice) {
        try {
            localStorage.setItem(storageKey, choice);
        } catch (error) {
            console.warn("Cookie choice could not be saved.", error);
        }
        banner.classList.add("hidden");
    }

    try {
        if (localStorage.getItem(storageKey)) banner.classList.add("hidden");
    } catch (error) {
        console.warn("Cookie choice could not be loaded.", error);
    }

    accept.addEventListener("click", function () {
        saveChoice("accepted");
    });

    decline.addEventListener("click", function () {
        saveChoice("declined");
    });
});
