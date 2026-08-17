function scrollToHash() {
    if (!window.location.hash) return;

    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", function () {
    window.setTimeout(scrollToHash, 100);
});

window.addEventListener("load", function () {
    window.setTimeout(scrollToHash, 250);
});

document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href$="#schedule"]');
    if (!link) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.pathname !== window.location.pathname) return;

    const schedule = document.getElementById("schedule");
    if (!schedule) return;

    event.preventDefault();
    history.replaceState(null, "", "#schedule");
    scrollToHash();
});
