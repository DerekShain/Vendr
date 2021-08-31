export default class Candy {
    constructor(candyData) {
        this.name = candyData.name
        this.img = candyData.img
        this.price = candyData.price
    }

    get candyTemplate() {

        return /*html*/`
        <div class="card p-2 value">
        <img src = "${this.img}" class="img-fluid rounded">
        <h3 class="text-center">${this.name}</h3>
        <h3 class="text-center">${this.price}</h3>
        </div>
        `
    }
}
