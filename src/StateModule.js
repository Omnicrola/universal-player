import Events from "./events/Events";
import GameEvent from "./events/GameEvent";
import Currency from "./economy/Currency";

export default class StateModule {

    constructor(config, eventBus) {
        this.globalState = config.defaults;
        this.config = config;
        this.eventBus = eventBus;
        this._loadExistingState(config);
    }

    addPlayer(count) {
        this.globalState.players += count;
        this.eventBus.broadcast(new GameEvent(Events.PLAYER_COUNT_CHANGE, this.globalState.players));
    }

    addReward(count) {
        this.globalState.rewards += count;
        this.eventBus.broadcast(new GameEvent(Events.REWARDS_CHANGED, this.globalState.rewards));
        this.eventBus.broadcast(new GameEvent(Events.CURRENCY_CHANGED));
    }

    activateFeature(feature) {
        this.globalState.features[feature] = true;
        this.eventBus.broadcast(new GameEvent(Events.FEATURES_CHANGED, feature));
    }

    rewards() {
        return this.globalState.rewards;
    }

    players() {
        return this.globalState.players;
    }

    manualPlayRewardRatio() {
        return this.globalState.manualPlayRewardRatio;
    }

    _loadExistingState(config) {
        let serialData = window.localStorage.getItem(config.storageKey);
        if (serialData !== "undefined") {
            let stateData = JSON.parse(serialData);
            if (stateData) {
                Object.assign(this.globalState, stateData);
                this.eventBus.broadcast(new GameEvent(Events.PLAYER_COUNT_CHANGE, this.globalState.players));
                this.eventBus.broadcast(new GameEvent(Events.REWARDS_CHANGED, this.globalState.rewards));
                console.log('Loaded existing game.');
            } else {
                console.log('No existing game found.');
            }
        } else {
            console.log('No existing game found.');
        }
        setInterval(this._saveState.bind(this), config.autoSaveInterval);
    }

    _saveState() {
        let serialData = JSON.stringify(this.globalState);
        window.localStorage.setItem(this.config.storageKey, serialData);
        console.log('Auto-saved : ' + serialData);
    }
}