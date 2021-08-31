import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Candy from "./Models/Candy.js"

class AppState extends EventEmitter {
  /** @type {Candy[]} */
  candies = []
  money = 0
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, candy) {
    isValidProp(target, prop)
    target[prop] = candy
    target.emit(prop, candy)
    return true
  }
})
