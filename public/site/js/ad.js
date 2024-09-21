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
