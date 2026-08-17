document.addEventListener("DOMContentLoaded", function () {
    const timer = document.getElementById("timer");
    const searchInput = document.getElementById("searchInput");
    const gameFilter = document.getElementById("gameFilter");
    const cards = document.querySelectorAll(".event-card");
    const favouriteButtons = document.querySelectorAll(".favourite");
    const favouriteText = document.getElementById("favoriteTournament");
    const storageKey = "favouriteTournamentList";

    // Countdown
    const tournamentDate = new Date("August 25, 2026 14:00:00").getTime();

    function updateCountdown() {
        if (!timer) return;

        const distance = tournamentDate - Date.now();
        if (distance <= 0) {
            timer.textContent = "Tournament Started!";
            return;
        }

        const day = 1000 * 60 * 60 * 24;
        const hour = 1000 * 60 * 60;
        const minute = 1000 * 60;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / 1000);

        timer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    updateCountdown();
    window.setInterval(updateCountdown, 1000);

    // Search and filter
    function filterTournaments() {
        const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
        const game = gameFilter ? gameFilter.value.trim().toLowerCase() : "all";

        cards.forEach(function (card) {
            const title = card.querySelector("h4").textContent.toLowerCase();
            const matchesSearch = card.textContent.toLowerCase().includes(keyword);
            const matchesGame = game === "all" || title.includes(game);
            const column = card.closest(".col-lg-4");

            (column || card).style.display = matchesSearch && matchesGame ? "flex" : "none";
        });
    }

    if (searchInput) searchInput.addEventListener("input", filterTournaments);
    if (gameFilter) gameFilter.addEventListener("change", filterTournaments);

    // Favourites
    let favourites = [];

    try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (Array.isArray(saved)) favourites = saved;
    } catch (error) {
        console.warn("Favourites could not be loaded.", error);
    }

    function saveFavourites() {
        try {
            localStorage.setItem(storageKey, JSON.stringify(favourites));
        } catch (error) {
            console.warn("Favourites could not be saved.", error);
        }
    }

    function tournamentName(button) {
        return button.closest(".event-card").querySelector("h4").textContent.trim();
    }

    function updateButton(button) {
        const selected = favourites.includes(tournamentName(button));
        button.textContent = selected ? "❌ Remove Favourite" : "⭐ Favourite";
        button.classList.toggle("btn-danger", selected);
        button.classList.toggle("btn-warning", !selected);
    }

    function updateFavouriteDisplay() {
        if (!favouriteText) return;
        favouriteText.textContent = favourites.length
            ? favourites.join(" • ")
            : "No favourite tournament selected.";
    }

    favouriteButtons.forEach(function (button) {
        updateButton(button);

        button.addEventListener("click", function () {
            const name = tournamentName(button);
            const index = favourites.indexOf(name);

            if (index === -1) favourites.push(name);
            else favourites.splice(index, 1);

            updateButton(button);
            updateFavouriteDisplay();
            saveFavourites();
        });
    });

    updateFavouriteDisplay();

    // View buttons
    document.querySelectorAll(".view").forEach(function (button) {
        button.addEventListener("click", function () {
            const page = button.dataset.page;
            if (page) window.location.href = page;
        });
    });
});
