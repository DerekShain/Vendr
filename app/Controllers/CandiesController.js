import { ProxyState } from "../AppState.js";
import { candiesService } from "../Services/CandiesService.js";

function drawCandy(){
  document.getElementById('candy').innerText = ProxyState.candies
}
  export default class CandiesController {
    constructor() {
      console.log('Hello from candy controller')
      ProxyState.on('candy', drawCandy)
    }
  
    addCandy() {
      candiesService.addCandy()
    }
  
  }