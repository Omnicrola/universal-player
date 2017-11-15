import Events from "../events/Events";
import Features from "./Features";

export default class PositiveReinforcementFeature {
    constructor(config, eventBus) {
        this.config = config;
        this.eventBus = eventBus;
        this.rewardElement = document.querySelector(config.rewardHighlightElementId);
    }

    get name() {
        return Features.POSITIVE_FEEDBACK;
    }

    activate() {
        this.eventBus.subscribe(Events.GAIN_REWARD, this._onRewardGain.bind(this));
        this.eventBus.subscribe(Events.REWARD_MISSED, this._onRewardMissed.bind(this));
    }

    deactivate() {
    }

    update(delta) {
    }

    _addRemoveClass(className) {
        this.rewardElement.classList.add(className);
        let self = this;
        setTimeout(() => {
            self.rewardElement.classList.remove(className)
        }, 500);

    }

    _onRewardGain() {
        this._addRemoveClass(this.config.rewardGainClass);
    }

    _onRewardMissed() {
        this._addRemoveClass(this.config.rewardMissedClass)
    }

}