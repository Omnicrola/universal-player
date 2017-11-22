import Features from "./Features";
import Events from "../events/Events";

export default class RandomRewardFeature {


    constructor(config, eventBus) {
        this.eventBus = eventBus;
        this.readoutElement = document.querySelector(config.ids.rewardReadoutId);
        this.baseClass = 'reward-feedback';
        this.rewardClass = 'reward';
        this.lossClass = 'loss';
    }

    get name() {
        return Features.RANDOM_BONUS;
    }

    activate() {
        this.eventBus.subscribe(Events.GAIN_REWARD, this._onRewardGain.bind(this));
        this.eventBus.subscribe(Events.REWARD_MISSED, this._onRewardMissed.bind(this));
    }

    deactivate() {
    }

    upgrade(delta) {
    }

    _onRewardGain() {
        this.readoutElement.innerText = "+1";
        this._resetClass(this.rewardClass);
        this._delayedResetClass(this.rewardClass, 500);
    }

    _onRewardMissed() {
        this.readoutElement.innerText = "-1";
        this._resetClass(this.lossClass);
        this._delayedResetClass(this.lossClass, 500);
    }

    _delayedResetClass(className, delay) {
        setTimeout(() => {
            this.readoutElement.classList.remove(className);
        }, delay);
    }

    _resetClass(className) {
        this.readoutElement.classList.remove(this.baseClass);
        this.readoutElement.classList.remove(this.rewardClass);
        this.readoutElement.className.add(className);
    }
}