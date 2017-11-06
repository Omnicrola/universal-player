import PlayButtonModule from './PlayButtonModule.js';
import ButtonEventAdapter from './util/ButtonEventAdapter.js';
import DisplayValueEventAdapter from './util/DisplayValueEventAdapter.js';
import StateModule from './StateModule.js';
import EventBus from "./events/EventBus";
import config from './configuration.js';
import UpgradesModule from "./upgrades/UpgradesModule";

export default class MainLoop {

    static build() {
        let fps = 30;

        let eventBus = new EventBus(config);
        let stateModule = new StateModule(config, eventBus);

        return new MainLoop(fps, [
            new ButtonEventAdapter(config, eventBus),
            new DisplayValueEventAdapter(config, eventBus),
            new PlayButtonModule(eventBus, stateModule),
            new UpgradesModule(config, stateModule, eventBus)
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