let startButton = document.getElementById('start');
startButton.addEventListener('click', start.bind(this));

function start() {
    let value = prompt('Укажите сумму покупок в месной валюте');
    alert(`Вы можете вернуть ${value * 0.23} PLN.`);
    money()
}

function money() {
    let wrap = document.getElementById('moneyWrap');
    let money = document.createElement("img");
    money.src = 'img/money.jpeg';
    wrap.append(money);
}

