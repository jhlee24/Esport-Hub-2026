/* ==========================================================================
   HOME PAGE — shared behaviour
   Storage technology used on this page (per assignment brief):
     - COOKIE -> remembers whether this browser has visited before,
                 persists ~6 months, used to tailor the hero greeting.
   ========================================================================== */

/* ---------------- Cookie helpers ---------------- */
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

/* ---------------- Welcome banner (cookie-backed) ---------------- */
function initWelcomeNote() {
    const $note = $('#welcome-note');
    if (!$note.length) return;

    const hasVisited = getCookie('esc_visited');
    if (hasVisited) {
        $note.text('Welcome back to the club.');
    } else {
        $note.text('First time here? Glad you found us.');
        setCookie('esc_visited', 'true', 180); // remembered for ~6 months
    }
}

/* ---------------- Shoutcaster line (RESTful API demo via jQuery.ajax) ---------------- */
function initHypeQuote() {
    const $box = $('#hype-quote');
    if (!$box.length) return;

    function fetchQuote() {
        $box.addClass('loading').text('Pulling a fresh line from the booth…');
        $.ajax({
            url: 'https://api.chucknorris.io/jokes/random?category=dev',
            method: 'GET',
            dataType: 'json',
            timeout: 6000
        }).done(function (data) {
            $box.text('"' + data.value + '"');
        }).fail(function () {
            $box.text('"Clutch or nothing — the booth is buffering, try again."');
        }).always(function () {
            $box.removeClass('loading');
        });
    }

    $('#refresh-quote').on('click', fetchQuote);
    fetchQuote();
}

/* ---------------- Social share plugin row ---------------- */
function initSocialShare() {
    $('.share-btn').on('click', function (e) {
        e.preventDefault();
        const network = $(this).data('network');
        const pageUrl = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Check out the E-Sports Club');
        const urls = {
            x: `https://twitter.com/intent/tweet?text=${text}&url=${pageUrl}`,
            discord: 'https://discord.com/invite/',
            whatsapp: `https://wa.me/?text=${text}%20${pageUrl}`,
            instagram: 'https://www.instagram.com/'
        };
        if (urls[network]) window.open(urls[network], '_blank', 'width=580,height=520');
    });
}

$(function () {
    initWelcomeNote();
    initHypeQuote();
    initSocialShare();
});
