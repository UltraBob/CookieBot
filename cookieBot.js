let cookie = document.querySelector('#bigCookie');
let goldenCookie = document.querySelector('#goldenCookie');
let news = document.querySelector('#commentsText');

let goldenClick = function() {
    let goldenCookie = document.querySelectorAll('.shimmer');
    // Click on fortunes in the news if they pop up.
    if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') {
        news.click();
    }
    goldenCookie.forEach(function(item) {
        if (item !== null) {
            item.click();
        }
    });
};
let buyer = function() {
    let upgrades = document.querySelectorAll('#upgrades .upgrade.enabled');
    let purchases = document.querySelectorAll('.product.enabled:not(.selector)');
    let all_purchases = document.querySelectorAll('.product');
    let filter = Array.prototype.filter;
    let all_purchasable = filter.call(all_purchases, function(node) {
        let owned = parseInt(node.querySelector('.owned').innerText);
        return isNaN(owned) || owned < 600;
    });
    let eligible_purchases = filter.call(purchases, function(node) {
        let owned = parseInt(node.querySelector('.owned').innerText);
        return isNaN(owned) || owned < 600;
    });
    let purchases_to_buy = (all_purchasable.length > 0 ? eligible_purchases : purchases);
    let last_upgrade = false;
    for (let $i = upgrades.length - 1; $i > -1; $i--) {
        if (!upgrades[$i].classList.contains('selector')) {
            last_upgrade = upgrades[$i];
            break;
        }
    }
    // let last_upgrade = upgrades.length > 0 ? upgrades[upgrades.length-1]: false;
    let last_purchase = purchases_to_buy.length > 0 ? purchases_to_buy[purchases_to_buy.length-1]: false;
    if (last_upgrade) {
        last_upgrade.click();
    } else if (last_purchase) {
        last_purchase.click();
    }
};
let cookieClicker = function(){
    const times = 20;
    for (let i=0; i < times; i++) {
        cookie.click();
    }
};
setInterval(buyer, 10000);
setInterval(cookieClicker, 10);
setInterval(goldenClick, 100);

function mouseClicker() {
    let cursorX;
    let cursorY;
    document.onmousedown = function(e) {
        cursorX = e.pageX;
        cursorY = e.pageY;
    }
}
