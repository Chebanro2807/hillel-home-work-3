let startButton = document.getElementById('start');
startButton.addEventListener('click', start.bind(this));

function start() {
    alert('Данный сервис все еще в разработке и работает только с тремя странами.(Украина, Польша, Венгрия)');
    let value = prompt('Укажите сумму покупок в месной валюте');
    let country = prompt('Уточните страну покупки');
    switch (country) {
        case 'Украина': alert(`Вы можете вернуть ${value * 0.2} UAH.`);
        break;
        case 'Польша': alert(`Вы можете вернуть ${value * 0.23} PLN.`);
        break;
        case 'Венгрия': alert(`Вы можете вернуть ${value * 0.27} HUF.`);
        break;
    }
    money()
}

function money() {
    let wrap = document.getElementById('moneyWrap');
    let money = document.createElement("img");
    money.src = 'img/money.jpeg';
    wrap.append(money);
}

let colors = document.querySelectorAll('.colorTag')
colors.forEach((color)=>{
    color.addEventListener('click', textColor.bind(this, color.id));
});

function textColor(color) {
    let text = document.getElementById('tax');
    text.style.color = color;
}

