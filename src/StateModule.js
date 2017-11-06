import Events from "./events/Events";
import GameEvent from "./events/GameEvent";

export default class StateModule {

    constructor(config, eventBus) {
        this.globalState = config.defaults;
        this.config = config;
        this._loadExistingState(config);
        this._addStateWatchers(eventBus);
    }

    _addStateWatchers(eventBus) {
        let self = this;
        eventBus.subscribe(Events.GAIN_REWARD, () => {
            self.globalState.rewards++;
            eventBus.broadcast(new GameEvent(Events.REWARD_COUNT_CHANGE, self.globalState.rewards));
        });
    }

    get state() {
        return this.globalState;
    }

    _loadExistingState(config) {
        let serialData = window.localStorage.getItem(config.storageKey);
        if (serialData !== "undefined") {
            let stateData = JSON.parse(serialData);
            if (stateData) {
                Object.assign(this.globalState, stateData);
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