import Currency from '../economy/Currency.js';
import GameEvent from "../events/GameEvent";
import Events from "../events/Events";
import Upgrade from "./Upgrade";

export default class UpgradesBuilder {
    static build() {
        return [
            UpgradeShareWithFriend(1)
        ];
    }
}

function UpgradeShareWithFriend(id) {
    return new Upgrade({
        id: id,
        title: 'Share with a friend (rewards:10, +1 players)',
        costs: [{type: Currency.REWARD, amount: 10}],
        isVisible: (stateModule) => {
            return stateModule.state.rewards >= 25;
        },
        upgrade: (eventBus) => {
            eventBus.broadcast(new GameEvent((Events.ADD_PLAYER)))
        }
    });
}