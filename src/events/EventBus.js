import Events from "./Events";

export default class EventBus {

    constructor(config) {
        this.subscribers = [];
        this.config = config;
    }

    broadcast(event) {
        this._broadcastToType(event.type, event);
        this._broadcastToType(Events.ALL, event);
    }


    _broadcastToType(type, event) {
        if (this.subscribers[type]) {

            let subscribersToEvent = this.subscribers[type];
            let total = subscribersToEvent.length;
            console.log("Broadcasting event '" + type + "' to " + total + " subscribers");
            for (let index = 0; index < total; index++) {
                try {
                    subscribersToEvent[index](event);
                } catch (err) {
                    console.log('Subscriber threw an error: ' + err);
                }

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