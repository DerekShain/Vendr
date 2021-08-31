import { ProxyState } from "../AppState.js";
import Candy from "../Models/Candy.js";

class CandiesService {
  addCandy() {
    ProxyState.candies --
  }
}

export const candiesService = new CandiesService();

