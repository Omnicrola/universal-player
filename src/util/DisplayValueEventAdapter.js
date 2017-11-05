import Events from "../Events";

export default class DisplayValueEventAdapter {
    constructor(config, eventBus) {
        this.config = config;
        this.eventBus = eventBus;
        this._bindFieldsToEvents();
    }

    update(delta) {
    }

    _bindFieldsToEvents() {
        this._bindField(this.config.rewardCountDisplayId, Events.REWARD_COUNT_CHANGE);
    }

    _bindField(querySelector, eventType){
        let element = document.querySelector(querySelector);
        this.eventBus.subscribe(eventType, (event) => {
            element.innerText = event.data;
        });
    }
}