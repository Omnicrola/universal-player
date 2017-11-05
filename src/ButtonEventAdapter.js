import GameEvent from './GameEvent.js'
import Events from './Events.js'

export default class ButtonEventAdapter {
    constructor(config, eventBus) {
        this.bindButtonsToEventSystem(config, eventBus);
    }

    bindButtonsToEventSystem(config, eventBus) {
        let playButton = document.querySelector(config.playButtonId);
        playButton.onclick = ()=>{
            eventBus.broadcast(new GameEvent(Events.PLAY_BUTTON));
        }
    }

    update(delta) {
    }
}