import CandiesController from "./Controllers/CandiesController.js";
import { MoneyController } from "./Controllers/MoneyController.js";

class App {
  candyController = new CandiesController();
  moneyController = new MoneyController();
}

window["app"] = new App();
