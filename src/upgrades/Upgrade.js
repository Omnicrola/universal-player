import Currency from "../economy/Currency";

export default class Upgrade {
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.costs = params.costs;
        this.isVisible = params.isVisible;
        this.upgrade = params.upgrade;
    }

    isPurchasable(gameStateModule) {
        let total = this.costs.length;
        for (let index = 0; index < total; index++) {
            if (!this._haveCurrency(gameStateModule.state, this.costs[index])) {
                return false;
            }
        }
        return true;
    }

    _haveCurrency(gameState, cost) {
        if (cost.type === Currency.REWARD) {
            return gameState.rewards >= cost.amount;
        }
        return false;
    }

}
