window.onload = function () {
    const currentPath = window.location.pathname;
    const isAdPage = currentPath.includes("ad.html");

    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split("/");
    const isZh = pathSegments.includes("zh");
    const isEn = pathSegments.includes("en");
    const language = isZh ? "zh" : isEn ? "en" : "zh";

    if (isAdPage) {
        changeNavBackgroundColor();
        fetchStrapiAdPlan(language);
        fetchStrapiAdIntro(language);
    } else {
        fetchStrapiAdBar(language);
    }
};

function initAdBar() {
    showAdBar();
    moveDownNav();

    const closeAdBarButton = document.getElementById("ad-close");
    closeAdBarButton.addEventListener("click", () => {
        hideAdBar();
        moveUpNav();
    });
}

function showAdBar() {
    const adWrapper = document.getElementById("ad");
    if (adWrapper) {
        adWrapper.style.height = "64px";
    }
}

function hideAdBar() {
    const adWrapper = document.getElementById("ad");
    if (adWrapper) {
        adWrapper.style.height = "0px";
    }
}

function moveDownNav() {
    const navWrapper = document.getElementsByClassName("nav");
    navWrapper[0].style.top = "64px";
}

function moveUpNav() {
    const navWrapper = document.getElementsByClassName("nav");
    navWrapper[0].style.top = 0;
}

function fetchStrapiAdBar(language) {
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-bar?locale=${language}&populate[0]=background`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
            const {
                data: {
                    attributes: { background, text, buttonText },
                },
            } = response;

            updateAdBar(background, text, buttonText);
        })
        .catch((err) => {});
}

function fetchStrapiAdPlan(language) {
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-plan?locale=${language}&populate[0]=background`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {});
}

function fetchStrapiAdIntro(language) {
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-intro?locale=${language}&populate[0]=background`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {});
}

function insertAdBarEl() {
    const el = `<div id="ad" class="ad">
                    <div class="ad-content">
                        <div class="ad-content-left">
                            <p class="ad-text">最新活动</p>
                            <button class="ad-btn">前往查看</button>
                        </div>
                        <div id="ad-close" class="ad-close">
                            <img src="../img/price_icon2.svg" alt="close" />
                        </div>
                    </div>
                </div>`;
    const headEl = document.getElementsByClassName("head");
    if (headEl[0]) {
        headEl[0].insertAdjacentHTML("afterbegin", el);
        return;
    }
    const headerEl = document.getElementsByTagName("header");
    if (headerEl[0]) {
        headerEl[0].insertAdjacentHTML("afterbegin", el);
    }
}

function insertAdBarCss() {
    // 在head中插入广告栏样式
    const adStyle = document.createElement("link");
    adStyle.rel = "stylesheet";
    adStyle.type = "text/css";
    adStyle.href = "../css/ad.css";
    document.head.appendChild(adStyle);
}

function updateAdBar(background, text, buttonText) {
    insertAdBarCss();
    insertAdBarEl();

    const adWrapper = document.getElementById("ad");
    if (!adWrapper) return;

    const backgroundUrl = background ? background?.data.attributes.url : null;
    if (backgroundUrl) {
        adWrapper.style.backgroundImage = `url(https://cms.hitosea.com${backgroundUrl})`;
    }
    const textEl = adWrapper.getElementsByClassName("ad-text");
    if (textEl[0]) {
        textEl[0].innerText = text;
    }
    const buttonEl = adWrapper.getElementsByClassName("ad-btn");
    if (buttonEl[0]) {
        buttonEl[0].innerText = buttonText;
    }
    initAdBar();
}

function changeNavBackgroundColor() {
    const navWrapper = document.getElementsByClassName("nav");
    navWrapper[0].style.backgroundColor = "#fff";
}
