let startButton = document.getElementById('start');
startButton.addEventListener('click', start.bind(this));
let wrap = document.getElementById('moneyWrap');
let spendMoney = document.getElementById('cash');
let result = document.getElementById('result');

function start() {
    let taxValue = calculateTax(spendMoney.value);
    render(wrap)
    if (taxValue >= 0){
        result.innerHTML = text(taxValue);
        if (taxValue > 10000) {
            addPicture('img/money.jpeg', wrap)
        } else {
            addPicture('img/poor.jpeg', wrap)
        }
    } else {
        result.innerHTML = 'но ведь нельзя купить в минус('
    }
}

function text(value) {
    return `Вы можете вернуть ${value} PLN.`
}

function calculateTax(value) {
    return value * 0.23;
}

function addPicture(src, item) {
    let img = document.createElement("img");
    img.src = src;
    item.append(img);
}

function render(item) {
    if (item.firstChild) {
        item.firstChild.remove();
    }
}


