let startButton = document.getElementById('start');
startButton.addEventListener('click', start.bind(this));
let wrap = document.getElementById('moneyWrap');

function start() {
    let taxValue = calculateTax();
    if (taxValue >= 0){
        render()
        document.getElementById('result').innerHTML = text(taxValue);
        if (taxValue > 10000) {
            addPictureRich()
        } else {
            addPicturePoor()
        }
    } else {
        alert('Но ведь нельзя купить в минус(')
    }
}

function text(value) {
    return `Вы можете вернуть ${value} PLN.`
}

function calculateTax() {
    return document.getElementById('cash').value * 0.23;
}

function addPictureRich() {
    let img = document.createElement("img");
    img.src = 'img/money.jpeg';
    wrap.append(img);
}

function addPicturePoor() {
    let img = document.createElement("img");
    img.src = 'img/poor.jpeg';
    wrap.append(img);
}

function render() {
    if (wrap.firstChild) {
        wrap.firstChild.remove();
    }
}


