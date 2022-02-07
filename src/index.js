import {render} from './render'
import addPicure from './addPicture'
import calculateTax from './calculateTax'
import text from './text'
import {startButton,wrap,spendMoney,result} from './domElements'
import addPicture from './addPicture'

startButton.addEventListener('click', start.bind(this));

function start() {
    let taxValue = calculateTax(spendMoney.value);
    render(wrap)
    if (taxValue >= 0){
        result.innerHTML = text(taxValue);
        if (taxValue > 10000) {
            addPicture('../img/money.jpeg', wrap)
        } else {
            addPicture('../img/poor.jpeg', wrap)
        }
    } else {
        result.innerHTML = 'но ведь нельзя купить в минус('
    }
}


