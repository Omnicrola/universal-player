import Events from "./Events";

export default class PlayButtonModule {
    constructor(eventBus) {
        eventBus.subscribe(Events.PLAY_BUTTON, this.onPlayButton);
    }

    onPlayButton(event) {
        console.log('play button clicked!')
    }

    update(delta) {

    }
}