export default class EventBus {

    constructor(config) {
        this.subscribers = [];
        this.config = config;
    }

    broadcast(event) {
        if (this.subscribers[event.type]) {
            let subscribersToEvent = this.subscribers[event.type];
            let total = subscribersToEvent.length;
            console.log("Broadcasting event '" + event.type + "' to " + total + " subscribers");
            for (let index = 0; index < total; index++) {
                subscribersToEvent[index](event);
            }
        } else {
            console.log('No subscribers found for GameEvent of type : ' + event.type);
        }
    }

    subscribe(eventType, subscriber) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(subscriber);
    }
}