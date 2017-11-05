import GameEvent from './GameEvent.js'
import Events from './Events.js'

export default class ButtonEventAdapter {
    constructor(config, eventBus) {
        this.eventBus = eventBus;
        this._bindButtonsToEventSystem(config);
    }

    _bindButtonsToEventSystem(config) {
        this._bindButton(config.playButtonId, Events.PLAY_BUTTON);
    }

    _bindButton(querySelector, eventName) {
        let playButton = document.querySelector(querySelector);
        let self = this;
        playButton.onclick = () => {
            self.eventBus.broadcast(new GameEvent(eventName));
        }
    }

    update(delta) {
    }
}