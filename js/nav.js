document.addEventListener("DOMContentLoaded", function () {

    const nav = `
    <nav class="navbar">
        <ul>
            <li class="icon box">
                <a href="index.html">
                    <img class="icon norm" src="icons/home.png" alt="Home">
                    <img class="icon hover" src="icons/home_hover.png" alt="Home">
                    <span>Home</span>
                </a>
            </li>

            <li class="icon box" id="list">
                <a href="Games.html">
                    <img class="icon norm" src="icons/game.png" alt="Games">
                    <img class="icon hover" src="icons/game_hover.png" alt="Games">
                    <span>Games</span>
                </a>

                <ul class="listgames">
                    <li>
                        <a href="Game1.html">
                            <img class="icon norm" src="icons/car.png" alt="Rocket League">
                            <img class="icon hover" src="icons/car_hover.png" alt="Rocket League">
                            <span>Rocket League</span>
                        </a>
                    </li>

                    <li>
                        <a href="Game2.html">
                            <img class="icon norm" src="icons/valo.png" alt="Valorant">
                            <img class="icon hover" src="icons/valo_hover.png" alt="Valorant">
                            <span>Valorant</span>
                        </a>
                    </li>

                    <li>
                        <a href="Game3.html">
                            <img class="icon norm" src="icons/moba.png" alt="Mobile Legends">
                            <img class="icon hover" src="icons/moba_hover.png" alt="Mobile Legends">
                            <span>Mobile Legends</span>
                        </a>
                    </li>

                    <li>
                        <a href="Game4.html">
                            <img class="icon norm" src="icons/apex.png" alt="Apex Legends">
                            <img class="icon hover" src="icons/apex_hover.png" alt="Apex Legends">
                            <span>Apex Legends</span>
                        </a>
                    </li>

                    <li>
                        <a href="Game5.html">
                            <img class="icon norm" src="icons/pubg.png" alt="PUBG">
                            <img class="icon hover" src="icons/pubg_hover.png" alt="PUBG">
                            <span>PUBG</span>
                        </a>
                    </li>

                    <li>
                        <a href="Game6.html">
                            <img class="icon norm" src="icons/csgo.png" alt="Counter Strike 2">
                            <img class="icon hover" src="icons/csgo_hover.png" alt="Counter Strike 2">
                            <span>Counter Strike 2</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="icon box" id="list">
                <a href="schedule.html">
                    <img class="icon norm" src="icons/schedule.png" alt="Calendar">
                    <img class="icon hover" src="icons/schedule_hover.png" alt="Calendar">
                    <span>Schedules</span>
                </a>

                <ul class="listgames">
                    <li>
                        <a href="rocketleague.html">
                            <img class="icon norm" src="icons/car.png" alt="Rocket League">
                            <img class="icon hover" src="icons/car_hover.png" alt="Rocket League">
                            <span>Rocket League</span>
                        </a>
                    </li>

                    <li>
                        <a href="valorant.html">
                            <img class="icon norm" src="icons/valo.png" alt="Valorant">
                            <img class="icon hover" src="icons/valo_hover.png" alt="Valorant">
                            <span>Valorant</span>
                        </a>
                    </li>

                    <li>
                        <a href="mlbb.html">
                            <img class="icon norm" src="icons/moba.png" alt="Mobile Legends">
                            <img class="icon hover" src="icons/moba_hover.png" alt="Mobile Legends">
                            <span>Mobile Legends</span>
                        </a>
                    </li>

                    <li>
                        <a href="apex.html">
                            <img class="icon norm" src="icons/apex.png" alt="Apex Legends">
                            <img class="icon hover" src="icons/apex_hover.png" alt="Apex Legends">
                            <span>Apex Legends</span>
                        </a>
                    </li>

                    <li>
                        <a href="pubg.html">
                            <img class="icon norm" src="icons/pubg.png" alt="PUBG">
                            <img class="icon hover" src="icons/pubg_hover.png" alt="PUBG">
                            <span>PUBG</span>
                        </a>
                    </li>

                    <li>
                        <a href="cs2.html">
                            <img class="icon norm" src="icons/csgo.png" alt="Counter Strike 2">
                            <img class="icon hover" src="icons/csgo_hover.png" alt="Counter Strike 2">
                            <span>Counter Strike 2</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="icon box" id="list">
                <a href="rankingmenu.html">
                    <img class="icon norm" src="icons/trophy.png" alt="Rankings">
                    <img class="icon hover" src="icons/trophy_hover.png" alt="Rankings">
                    <span>Rankings</span>
                </a>

                <ul class="listgames">
                    <li>
                        <a href="ranking.html?game=Rocket%20League">
                            <img class="icon norm" src="icons/car.png" alt="Rocket League">
                            <img class="icon hover" src="icons/car_hover.png" alt="Rocket League">
                            <span>Rocket League</span>
                        </a>
                    </li>

                    <li>
                        <a href="ranking.html?game=Valorant">
                            <img class="icon norm" src="icons/valo.png" alt="Valorant">
                            <img class="icon hover" src="icons/valo_hover.png" alt="Valorant">
                            <span>Valorant</span>
                        </a>
                    </li>

                    <li>
                        <a href="ranking.html?game=Mobile Legends">
                            <img class="icon norm" src="icons/moba.png" alt="Mobile Legends">
                            <img class="icon hover" src="icons/moba_hover.png" alt="Mobile Legends">
                            <span>Mobile Legends</span>
                        </a>
                    </li>

                    <li>
                        <a href="ranking.html?game=Apex Legends">
                            <img class="icon norm" src="icons/apex.png" alt="Apex Legends">
                            <img class="icon hover" src="icons/apex_hover.png" alt="Apex Legends">
                            <span>Apex Legends</span>
                        </a>
                    </li>

                    <li>
                        <a href="ranking.html?game=PUBG">
                            <img class="icon norm" src="icons/pubg.png" alt="PUBG">
                            <img class="icon hover" src="icons/pubg_hover.png" alt="PUBG">
                            <span>PUBG</span>
                        </a>
                    </li>

                    <li>
                        <a href="ranking.html?game=Counter Strike 2">
                            <img class="icon norm" src="icons/csgo.png" alt="Counter Strike 2">
                            <img class="icon hover" src="icons/csgo_hover.png" alt="Counter Strike 2">
                            <span>Counter Strike 2</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="icon box op" id="list">
                <a href="playerprofile.html">
                    <img class="icon norm" src="icons/guy.png" alt="Profile">
                    <img class="icon hover" src="icons/guy_hover.png" alt="Profile">
                    <span>Profile</span>
                </a>
            </li>

            <li class="icon box op">
                <a href="news.html">
                    <img class="icon norm" src="icons/news.png" alt="News">
                    <img class="icon hover" src="icons/news_hover.png" alt="News">
                    <span>News</span>
                </a>
            </li>

            <li class="icon box op">
                <a href="contact us.html">
                    <img class="icon norm" src="icons/contact.png" alt="Contact Us">
                    <img class="icon hover" src="icons/contact_hover.png" alt="Contact Us">
                    <span>Contact Us</span>
                </a>
            </li>

            <li class="icon box more" id="list">
                <a>
                    <img class="icon norm" src="icons/more.png" alt="More">
                    <img class="icon hover" src="icons/more_hover.png" alt="More">
                    <span>More</span>
                </a>

                <ul class="listgames">
                    <li>
                        <a href="playerprofile.html">
                            <img class="icon norm" src="icons/guy_hover.png" alt="Profile">
                            <img class="icon hover" src="icons/guy.png" alt="Profile">
                            <span>Profile</span>
                        </a>
                    </li>

                    <li>
                        <a href="news.html">
                            <img class="icon norm" src="icons/news_hover.png" alt="News">
                            <img class="icon hover" src="icons/news.png" alt="News">
                            <span>News</span>
                        </a>
                    </li>

                    <li>
                        <a href="contact us.html">
                            <img class="icon norm" src="icons/contact_hover.png" alt="Contact Us">
                            <img class="icon hover" src="icons/contact.png" alt="Contact Us">
                            <span>Contact Us</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", nav);


    /* =====================================
       FOOTER
    ===================================== */

    let footer = document.querySelector("footer");

    if (!footer) {
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }

    footer.className = "site-footer";
    footer.innerHTML =
        "© 2026 Gaming Hub. All Rights Reserved.";


    /* =====================================
       COOKIE CONSENT
    ===================================== */

    const consentKey =
        "gamingHubCookieConsent";


    /*
       Read the real browser Cookie.
    */

    const getCookie = function (name) {
        const cookie = document.cookie
            .split("; ")
            .find(function (item) {
                return item.startsWith(name + "=");
            });

        return cookie
            ? cookie.split("=")[1]
            : null;
    };


    /*
       First check the real Cookie.
       If unavailable, check localStorage.
    */

    const getSavedCookieChoice = function () {
        const cookieChoice =
            getCookie(consentKey);

        if (cookieChoice) {
            return cookieChoice;
        }

        try {
            return localStorage.getItem(
                consentKey
            );
        } catch (error) {
            console.warn(
                "Cookie consent could not be loaded.",
                error
            );

            return null;
        }
    };


    /*
       Only display the banner when the user
       has not previously selected an option.
    */

    if (!getSavedCookieChoice()) {
        const cookieBanner = `
            <div
                class="site-cookie-banner"
                id="siteCookieBanner">

                <div>
                    <strong>Cookie Notice</strong>

                    <p>
                        This website uses cookies to improve
                        your browsing experience.
                    </p>
                </div>

                <div class="site-cookie-buttons">
                    <button
                        type="button"
                        id="acceptSiteCookies">
                        Accept
                    </button>

                    <button
                        type="button"
                        id="declineSiteCookies">
                        Decline
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML(
            "beforeend",
            cookieBanner
        );


        /*
           Save the selection as both a real Cookie
           and localStorage.
        */

        const saveCookieChoice = function (choice) {
            document.cookie =
                consentKey +
                "=" +
                choice +
                "; max-age=31536000; path=/; SameSite=Lax";

            try {
                localStorage.setItem(
                    consentKey,
                    choice
                );
            } catch (error) {
                console.warn(
                    "Cookie consent could not be saved locally.",
                    error
                );
            }

            const displayedBanner =
                document.getElementById(
                    "siteCookieBanner"
                );

            if (displayedBanner) {
                displayedBanner.remove();
            }
        };


        /*
           Accept button.
        */

        document
            .getElementById("acceptSiteCookies")
            .addEventListener(
                "click",
                function () {
                    saveCookieChoice("accepted");
                }
            );


        /*
           Decline button.
        */

        document
            .getElementById("declineSiteCookies")
            .addEventListener(
                "click",
                function () {
                    saveCookieChoice("declined");
                }
            );
    }

});