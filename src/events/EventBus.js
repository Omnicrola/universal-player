export default class EventBus {

    constructor(config) {
        this.subscribers = [];
        this.config = config;
    }

    broadcast(event) {
        if (this.subscribers[event.type]) {
            let subscribersToEvent = this.subscribers[event.type];
            let total = subscribersToEvent.length;
            for (let index = 0; index < total; index++) {
                subscribersToEvent[index](event);
            }
        }
    }

    subscribe(eventType, subscriber) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(subscriber);
    }
}