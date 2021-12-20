let startButton = document.getElementById('start');
startButton.addEventListener('click', start.bind(this));
let wrap = document.getElementById('moneyWrap');

function start() {
    let taxValue = calculateTax();
    if (taxValue >= 0){
        render(wrap)
        document.getElementById('result').innerHTML = text(taxValue);
        if (taxValue > 10000) {
            addPicture('money.jpeg',wrap)
        } else {
            addPicture('poor.jpeg',wrap)
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


