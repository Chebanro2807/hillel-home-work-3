let startButton = document.getElementById('start');
startButton.addEventListener('click', start.bind(this));

function start() {
    let output = `Вы можете вернуть ${calculateTax()} PLN.`
    document.getElementById('result').innerHTML = output;
    money()
}

function calculateTax() {
    let value = document.getElementById('cash').value * 0.23;
    return value
}

function money() {
    let wrap = document.getElementById('moneyWrap');
    let money = document.createElement("img");
    money.src = 'img/money.jpeg';
    if (!wrap.firstChild) {
        wrap.append(money);
    }
}

