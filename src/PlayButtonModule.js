import Events from "./Events";
import Randomizer from './util/Randomizer.js'
import GameEvent from "./GameEvent";

export default class PlayButtonModule {
    constructor(eventBus, stateModule) {
        this.stateModule = stateModule;
        this.eventBus = eventBus;
        eventBus.subscribe(Events.PLAY_BUTTON, this.onPlayButton.bind(this));
    }

    onPlayButton(event) {
        let chanceOfReward = this.stateModule.manualPlayRewardRatio;
        let shouldGetReward = Randomizer.reward(chanceOfReward);
        if(shouldGetReward){
            this.eventBus.broadcast(new GameEvent(Events.GAIN_REWARD));
        } else {
            this.eventBus.broadcast(new GameEvent(Events.REWARD_MISSED));
        }
    }

    update(delta) {

    }
}