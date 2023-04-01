document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var transition = document.querySelector(".transition");
        transition.style.opacity = "0";
    }, 500);
});





/* 您之前的 JavaScript 代码 */

// 播放瘟疫动画
function playPlagueAnimation() {
    // 在这里添加您的瘟疫动画代码
}

// 获取播放按钮元素
const playButton = document.getElementById('play-button');

// 为播放按钮添加单击事件监听器
playButton.addEventListener('click', () => {
    playPlagueAnimation();
});



document.querySelector('h1.title').addEventListener('click', function () {
    document.getElementById('page-2').scrollIntoView();
});






// ... 其他 JavaScript 代码保持不变 ...

function showTransition() {
    const transition = document.querySelector(".transition");
    transition.classList.add("show");
}

function hideTransition() {
    const transition = document.querySelector(".transition");
    transition.classList.remove("show");
}

const scrollLink = document.querySelector(".nav-menu a[href='#page-2']");

scrollLink.addEventListener("click", function (event) {
    event.preventDefault();

    showTransition();

    setTimeout(function () {
        window.scrollTo({
            top: document.querySelector("#page-2").offsetTop,
            behavior: "smooth",
        });

        hideTransition();
    }, 1000);
});

// ... 其他 JavaScript 代码保持不变 ...


// 获取页面元素
const navbar = document.querySelector(".navbar");
const page2 = document.querySelector("#page-2");

// 监听页面滚动事件
// ... 其他 JavaScript 代码 ...

// 监听页面滚动
window.addEventListener("scroll", () => {
    const navbarContainer = document.querySelector(".navbar-container");
    // 如果页面向下滚动超过 100 像素，则显示导航栏
    if (window.scrollY > 100) {
        navbarContainer.classList.add("show");
    } else {
        navbarContainer.classList.remove("show");
    }
});

// ... 其他 JavaScript 代码 ...



const menu3 = document.getElementById('menu3');
menu3.addEventListener('click', () => {
    const page3 = document.getElementById('page-3');
    page3.scrollIntoView({ behavior: 'smooth' });
});





function showFanTransition() {
    const fanTransition = document.querySelector(".fan-transition");
    fanTransition.classList.add("show");
}

function hideFanTransition() {
    const fanTransition = document.querySelector(".fan-transition");
    fanTransition.classList.remove("show");
}

