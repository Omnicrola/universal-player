import {Upgrade} from "./Upgrades";
import Currency from "../economy/Currency";
import GameEvent from "../events/GameEvent";
import Events from "../events/Events";

export default class UpgradeShareWithFriend extends Upgrade {
    constructor() {
        let costs = [{type: Currency.REWARD, amount: 10}];
        super(1, 'Share with a friend (rewards:10, +1 players)', costs);
    }

    isVisible(stateModule) {
        return stateModule.state.rewards >= 25;
    }

    upgrade(eventBus) {
        eventBus.broadcast(new GameEvent(Events.ADD_PLAYER));

    }
}

