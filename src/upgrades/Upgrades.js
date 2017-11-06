import Currency from '../economy/Currency.js';
import UpgradeShareWithFriend from "./UpgradeShareWithFriend";

export default class Upgrades {
    static build() {
        return [
            new UpgradeShareWithFriend()
        ];
    }
}

export class Upgrade {
    constructor(id, title, costs) {
        this.id = id;
        this.title = title;
        this.costs = costs;
    }

    isVisible(gameStateModule) {
        throw new Error('Not implemented');
    }

    upgrade(gameStateModule) {
        throw new Error('Not implemented');
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