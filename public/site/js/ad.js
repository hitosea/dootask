// 根据窗口宽度设置广告栏高度
let adBarHeight = window?.innerWidth <= 768 ? 48 : 64;
const adBarHeightPX = `${adBarHeight}px`;

// 当DOM加载完成时执行
document.addEventListener("DOMContentLoaded", function () {
    // 获取当前页面路径
    const currentPath = window.location.pathname;
    // 判断是否为广告页面
    const isAdPage = currentPath.includes("ad.html");

    // 获取URL对象
    const url = new URL(window.location.href);
    // 分割路径
    const pathSegments = url.pathname.split("/");
    // 确定语言
    const language = pathSegments.includes("zh")
        ? "zh"
        : pathSegments.includes("en")
        ? "en"
        : "zh";

    if (isAdPage) {
        // 如果是广告页面，设置导航背景色并获取广告计划和介绍
        setNavBackgroundColor();
        fetchAdBanner(language);
        fetchAdPlan(language);
        fetchAdIntro(language);
    } else {
        // 如果不是广告页面，插入广告样式表并获取广告栏
        insertAdStylesheet();
        fetchAdBar(language);
    }
});

// 初始化广告栏
function initializeAdBar() {
    displayAdBar();
    adjustNavPosition("down");

    // 添加关闭广告栏的事件监听器
    const closeAdBarButton = document.getElementById("ad-close");
    closeAdBarButton.addEventListener("click", () => {
        hideAdBar();
        adjustNavPosition("up");
    });
}

// 显示广告栏
function displayAdBar() {
    const adWrapper = document.getElementById("ad");
    if (!adWrapper) return;
    adWrapper.style.height = adBarHeightPX;
    adWrapper.style.display = "block";

    // 调整头部元素的边距
    const headerEl = document.getElementsByTagName("header")[0];
    if (!headerEl) return;
    headerEl.style.marginTop = adBarHeightPX;
}

// 隐藏广告栏
function hideAdBar() {
    const adWrapper = document.getElementById("ad");
    if (!adWrapper) return;
    adWrapper.style.height = "0px";
    adWrapper.style.display = "none";

    // 重置头部元素的边距
    const headerEl = document.getElementsByTagName("header")[0];
    if (!headerEl) return;
    headerEl.style.marginTop = "0px";
}

// 调整导航栏位置
function adjustNavPosition(direction) {
    const navWrapper = document.getElementsByClassName("nav")[0];
    navWrapper.style.top = direction === "down" ? adBarHeightPX : "0";
}

// 获取广告栏数据
function fetchAdBar(language) {
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-bar?locale=${language}&populate[0]=background`;
    fetchData(apiUrl)
        .then(({ data: { attributes } }) => {
            updateAdBar(attributes);
        })
        .catch(handleError);
}

// 获取广告banner数据
function fetchAdBanner(language) {
    const query = window.Qs.stringify(
        {
            locale: language,
            populate: {
                title: {
                    populate: "*",
                },
                description: {
                    populate: "*",
                },
                background: {
                    populate: "*",
                },
                underline: {
                    populate: "*",
                },
                signUpButton: {
                    populate: "*",
                },
                selfHostButton: {
                    populate: "*",
                },
                localizations: {
                    populate: "*",
                },
            },
        },
        {
            encodeValuesOnly: true,
        }
    );
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-banner?${query}`;
    fetchData(apiUrl).then(handleAdBannerResponse).catch(handleError);
}

// 获取广告计划数据
function fetchAdPlan(language) {
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-plan?locale=${language}&populate[0]=background`;
    fetchData(apiUrl).then(handleAdPlanResponse).catch(handleError);
}

// 获取广告介绍数据
function fetchAdIntro(language) {
    const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-intro?locale=${language}&populate[0]=background`;
    fetchData(apiUrl).then(handleAdIntroResponse).catch(handleError);
}

// 通用数据获取函数
function fetchData(url) {
    return fetch(url).then((response) => response.json());
}

function getMediaUrl(media) {
    if (!media?.data?.attributes?.url) {
        return "";
    }
    return `https://cms.hitosea.com${media.data.attributes.url}`;
}

function getStyle(style) {
    if (!style) return null;
    return Object.keys(style)
        .map((key) => `${key}: ${style[key]}`)
        .join("; ");
}

// 处理广告banner响应
function handleAdBannerResponse(response) {
    // 在此实现广告banner处理逻辑
    try {
        const {
            data: {
                attributes: {
                    title,
                    description,
                    background,
                    underline,
                    signUpButton,
                    selfHostButton,
                },
            },
        } = response;
        handleAdBannerTitle(title);
        handleAdBannerDescription(description);
        handleAdBannerBackground(background);
        handleAdBannerUnderline(underline);
        handleAdBannerSignUpButton(signUpButton);
        handleAdBannerSelfHostButton(selfHostButton);
    } catch (error) {
        console.error("处理广告banner响应时出错:", error);
    }
}

function handleAdBannerTitle(title) {
    const titleText = {};
    if (Array.isArray(title)) {
        title.forEach((item) => {
            titleText[item.key] = { text: item.text, style: item.style };
        });
    }
    const titlePart1El = document.getElementById("ad-banner-title-part1");
    const titlePart2El = document.getElementById("ad-banner-title-part2");
    const titlePart3El = document.getElementById("ad-banner-title-part3");
    if (titlePart1El && titleText["part1"]) {
        titlePart1El.textContent = titleText["part1"].text;
        titlePart1El.style = getStyle(titleText["part1"].style);
    }
    if (titlePart2El && titleText["part2"]) {
        titlePart2El.textContent = titleText["part2"].text;
        titlePart2El.style = getStyle(titleText["part2"].style);
    }
    if (titlePart3El && titleText["part3"]) {
        titlePart3El.textContent = titleText["part3"].text;
        titlePart3El.style = getStyle(titleText["part3"].style);
    }
}

function handleAdBannerDescription(description) {
    const descriptionText = {
        text: description.text,
        style: description.style,
    };
    const descriptionEl = document.getElementById("ad-banner-description");
    if (descriptionEl && descriptionText.text) {
        descriptionEl.textContent = descriptionText.text;
        descriptionEl.style = getStyle(descriptionText.style);
    }
}

function handleAdBannerBackground(background) {
    const backgroundUrl = getMediaUrl(background);
    const adBannerEl = document.getElementById("ad-banner");

    if (adBannerEl && backgroundUrl) {
        adBannerEl.style.backgroundImage = `url(${backgroundUrl})`;
    }
}

function handleAdBannerUnderline(underline) {
    const underlineUrl = getMediaUrl(underline);
    const adBannerTitleUnderlineEl = document.getElementById(
        "ad-banner-title-underline"
    );
    if (adBannerTitleUnderlineEl && underlineUrl) {
        adBannerTitleUnderlineEl.innerHTML = `<img class="arcs ad" src="${underlineUrl}" alt="underline" />`;
    }
}

function handleAdBannerSignUpButton({
    theme,
    style,
    link: { label, href, target, slug },
}) {
    const signUpButtonEl = document.getElementById("ad-banner-sign-up-button");
    if (signUpButtonEl) {
        signUpButtonEl.innerHTML = `
        <a href="${href}" ${target === "_blank" ? 'target="_blank"' : ""} >
          <button class="btn btn-primary">
            ${label}
          </button>
        </a>`;
        signUpButtonEl.style = getStyle(style);
    }
}

function handleAdBannerSelfHostButton({
    theme,
    style,
    link: { label, href, target, slug },
}) {
    const selfHostButtonEl = document.getElementById(
        "ad-banner-self-host-button"
    );
    if (selfHostButtonEl) {
        selfHostButtonEl.innerHTML = `
        <a href="${href}" ${target === "_blank" ? 'target="_blank"' : ""} >
          <button class="btn btn-default">
            ${label}
          </button>
        </a>`;
        selfHostButtonEl.style = getStyle(style);
    }
}

// 处理广告计划响应
function handleAdPlanResponse(response) {
    console.log(response);
    // 在此实现广告计划处理逻辑
}

// 处理广告介绍响应
function handleAdIntroResponse(response) {
    console.log(response);
    // 在此实现广告介绍处理逻辑
}

// 错误处理函数
function handleError(error) {
    console.error("获取数据时出错:", error);
}

// 插入广告栏元素
function insertAdBarElement() {
    const adBarHTML = `
        <div id="ad" class="ad">
            <div class="ad-content">
                <div class="ad-content-left">
                    <p id="ad-text" class="ad-text">最新活动</p>
                    <button id="ad-btn" class="ad-btn">查看详情</button>
                </div>
                <div id="ad-close" class="ad-close">
                    <img src="../img/price_icon2.svg" alt="关闭" />
                </div>
            </div>
        </div>`;
    const headerElement = document.getElementsByTagName("header")[0];
    if (headerElement) {
        headerElement.insertAdjacentHTML("afterbegin", adBarHTML);
    }

    // 添加广告按钮点击事件
    const adButton = document.getElementById("ad-btn");
    if (adButton) {
        adButton.addEventListener("click", () => {
            window.location.href = "ad.html";
        });
    }
}

// 插入广告样式表
function insertAdStylesheet() {
    const adStylesheet = document.createElement("link");
    adStylesheet.rel = "stylesheet";
    adStylesheet.type = "text/css";
    adStylesheet.href = "../css/ad.css";
    document.head.appendChild(adStylesheet);
}

// 更新广告栏内容
function updateAdBar({ background, text, buttonText }) {
    insertAdBarElement();

    const adWrapper = document.getElementById("ad");
    if (!adWrapper) return;

    // 设置背景图片
    const backgroundUrl = background?.data?.attributes?.url;
    if (backgroundUrl) {
        adWrapper.style.backgroundImage = `url(https://cms.hitosea.com${backgroundUrl})`;
    }

    // 更新文本内容
    const textElement = adWrapper.querySelector(".ad-text");
    if (textElement) {
        textElement.textContent = text;
    }

    // 更新按钮文本
    const buttonElement = adWrapper.querySelector(".ad-btn");
    if (buttonElement) {
        buttonElement.textContent = buttonText;
    }

    initializeAdBar();
}

// 设置导航栏背景颜色
function setNavBackgroundColor() {
    const navWrapper = document.getElementsByClassName("nav")[0];
    navWrapper.style.backgroundColor = "#fff";
}
