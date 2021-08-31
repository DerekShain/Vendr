import { ProxyState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"


function drawMoney(){
    document.getElementById('money').innerText = ProxyState.money
}

export class MoneyController {


    constructor(){
        console.log('Hello from money controller')
        ProxyState.on('money', drawMoney)
    }
    addMoney(){
        moneyService.addMoney()
        
    }
}