import Events from "../events/Events";

export default class DisplayValueEventAdapter {
    constructor(config, eventBus) {
        this.config = config;
        this.eventBus = eventBus;
        this._bindFieldsToEvents();
    }

    update(delta) {
    }

    _bindFieldsToEvents() {
        this._bindField(this.config.rewardCountDisplayId, Events.REWARDS_CHANGED);
        this._bindField(this.config.playerCountDisplayId, Events.PLAYER_COUNT_CHANGE);
    }

    _bindField(querySelector, eventType) {
        let element = document.querySelector(querySelector);
        this.eventBus.subscribe(eventType, (event) => {
            element.innerText = event.data;
        });
    }
}