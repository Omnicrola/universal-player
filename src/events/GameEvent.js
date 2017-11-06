export default class GameEvent {
    constructor(eventType, data) {
        this.eventType = eventType;
        this.eventData = data;
    }

    get data() {
        return this.eventData;
    }

    get type() {
        return this.eventType;
    }
}