import PlayButtonModule from './PlayButtonModule.js'
import ButtonEventAdapter from './ButtonEventAdapter.js'
import EventBus from "./events/EventBus";
import config from './configuration.js';

export default class MainLoop {

    static build() {
        let fps = 30;

        let eventBus = new EventBus(config);
        return new MainLoop(fps, [
            new ButtonEventAdapter(config, eventBus),
            new PlayButtonModule(eventBus),
        ]);
    }

    constructor(fps, modules) {
        this.fps = fps;
        this.msPerFrame = 1000 / fps;
        this.modules = modules;
    }

    start() {
        console.log('started! ' + this.fps);
        requestAnimationFrame(this._runLoop.bind(this));
    }

    _runLoop() {
        let timestamp = Date.now();
        if (timestamp < this.lastFrameTimeMs + (1000 / this.fps)) {
            requestAnimationFrame(this._runLoop.bind(this));
            return;
        }
        let delta = (timestamp - this.lastFrameTimeMs ) / this.msPerFrame;
        this._update(delta);
        this._render();
        this.lastFrameTimeMs = timestamp;
        requestAnimationFrame(this._runLoop.bind(this));
    }

    _update(delta) {
        let total = this.modules.length;
        for (let index = 0; index < total; index++) {
            this.modules[index].update(delta);
        }
    }

    _render() {

    }
}