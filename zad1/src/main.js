// UI
let bankValue = 0;
let cookiesPerClick = 1;
let cookierPerSecond = 0;

// Node
const bankValueText = document.querySelector('#bankValue');
const cookiesPerSecondText = document.querySelector('#cookiesPerSecond');
const cookiesPerClickText = document.querySelector('#cookiesPerClick');

// Button
const mainCookieButton = document.querySelector('#mainCookieButton');

// Upgrades
let upgradeLevel = 0;
let upgradeCost = 10;

const upgradeBaseValue = 0.1;

const upgradeButton = document.querySelector('#upgrade1Button');
const upgradeLevelText = document.querySelector('#upgrade1Level');
const upgradeCPS = document.querySelector('#upgrade1CookiesPerSecond');



function UpdateDisplay() {
    bankValueText.innerHTML = bankValue;
    cookiesPerSecondText.innerHTML = cookierPerSecond;
    cookiesPerClickText.innerHTML = cookiesPerClick;
}

function UpdateCookies() {
    bankValue += cookierPerSecond;
}

function CalculateCPS() {
    cookierPerSecond = upgradeLevel * upgradeBaseValue;
}

upgradeButton.addEventListener('click', () => {
    if (bankValue < upgradeCost) {
        return;
    }
    upgradeLevel++;
    bankValue -= upgradeCost;
});

mainCookieButton.addEventListener('click', () => {
    bankValue += cookiesPerClick;
    UpdateDisplay();
});

setInterval(() => {
    CalculateCPS();
    UpdateCookies();
    UpdateDisplay();
}, 1000);



UpdateDisplay();