/* ==========================================================================
   NEWS PAGE — shared behaviour
   Storage technologies used on this page (per assignment brief):
     - localStorage   -> remembers the last category filter chosen,
                          stays selected next time this page is opened.
     - sessionStorage -> recently viewed articles, clears when the tab closes.
   ========================================================================== */

/* ---------------- News filter (localStorage remembers last filter) ---------------- */
function initNewsFilter() {
    const $chips = $('.filter-chip');
    const $cards = $('.article-card');
    if (!$chips.length) return;

    function applyFilter(cat) {
        $chips.removeClass('active');
        $chips.filter(`[data-filter="${cat}"]`).addClass('active');

        let visible = 0;
        $cards.each(function () {
            const match = cat === 'all' || $(this).data('category') === cat;
            $(this).toggleClass('show', match);
            if (match) visible++;
        });
        $('#news-empty').toggleClass('d-none', visible !== 0);
        $('#news-count').text(visible);
    }

    $chips.on('click', function () {
        const cat = $(this).data('filter');
        localStorage.setItem('esc_news_filter', cat);
        applyFilter(cat);
    });

    applyFilter(localStorage.getItem('esc_news_filter') || 'all');
}

/* ---------------- Recently viewed articles (sessionStorage) ---------------- */
function renderRecentlyViewed() {
    const list = JSON.parse(sessionStorage.getItem('esc_recent_articles') || '[]');
    const $box = $('#recent-list');
    if (!$box.length) return;
    $box.empty();
    if (!list.length) {
        $box.append('<p class="empty-note">Nothing read yet this session — open an article to the left.</p>');
        return;
    }
    list.slice(0, 5).forEach(item => {
        $box.append(`<div class="recent-item"><span>${item.title}</span><span class="tag">${item.tag}</span></div>`);
    });
}

function initArticleTracking() {
    $('#article-list').on('click', '.read-link', function (e) {
        e.preventDefault();
        const $card = $(this).closest('.article-card');
        const title = $card.data('title');
        const tag = $card.data('category');

        let list = JSON.parse(sessionStorage.getItem('esc_recent_articles') || '[]');
        list = list.filter(i => i.title !== title); // de-dupe, most-recent first
        list.unshift({ title, tag });
        sessionStorage.setItem('esc_recent_articles', JSON.stringify(list));
        renderRecentlyViewed();

        const $body = $card.find('.article-body');
        $body.slideToggle(150, function () {
            $(e.currentTarget).text($body.is(':visible') ? 'COLLAPSE –' : 'READ MORE +');
        });

    });
}

/* ---------------- Coach's tip (RESTful API demo via jQuery.ajax) ---------------- */
function initCoachTip() {
    const $box = $('#coach-tip');
    if (!$box.length) return;

    function fetchTip() {
        $box.addClass('loading').text('Radioing the coach…');
        $.ajax({
            url: 'https://api.adviceslip.com/advice',
            method: 'GET',
            dataType: 'json',
            timeout: 6000
        }).done(function (data) {
            $box.text('"' + data.slip.advice + '"');
        }).fail(function () {
            $box.text('"Warm up before you queue — the advice line is lagging, try again."');
        }).always(function () {
            $box.removeClass('loading');
        });
    }

    $('#refresh-tip').on('click', fetchTip);
    fetchTip();
}

$(function () {
    initNewsFilter();
    initArticleTracking();
    initCoachTip();
});
