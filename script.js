let lastScrollTop = 0
let isScrollUp = true
document.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Người dùng cuộn xuống
        isScrollUp = false
    } else {
        // Người dùng cuộn lên
        isScrollUp = true
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});

setInterval(() => {
    if(isScrollUp) {
        const s = document.querySelector('.a1').classList.remove('hide');
    } else {
        const s = document.querySelector('.a1').classList.add('hide');
    }
}, 200)