/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Events {
    static get REWARD_COUNT_CHANGE() {
        return 'reward-count-change';
    };

    static get REWARD_MISSED() {
        return 'reward-missed';
    }

    static get GAIN_REWARD() {
        return 'gain-reward';
    }

    static get PLAY_BUTTON() {
        return 'play-button';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameEvent {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = GameEvent;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainLoop_js__ = __webpack_require__(3);


var mainLoop = __WEBPACK_IMPORTED_MODULE_0__MainLoop_js__["a" /* default */].build();
mainLoop.start();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlayButtonModule_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ButtonEventAdapter_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_DisplayValueEventAdapter_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StateModule_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_EventBus__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_js__ = __webpack_require__(10);







class MainLoop {

    static build() {
        let fps = 30;

        let eventBus = new __WEBPACK_IMPORTED_MODULE_4__events_EventBus__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */]);
        let stateModule = new __WEBPACK_IMPORTED_MODULE_3__StateModule_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus);

        return new MainLoop(fps, [
            new __WEBPACK_IMPORTED_MODULE_1__util_ButtonEventAdapter_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus),
            new __WEBPACK_IMPORTED_MODULE_2__util_DisplayValueEventAdapter_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus),
            new __WEBPACK_IMPORTED_MODULE_0__PlayButtonModule_js__["a" /* default */](eventBus, stateModule),
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
/* harmony export (immutable) */ __webpack_exports__["a"] = MainLoop;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Randomizer_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameEvent__ = __webpack_require__(1);




class PlayButtonModule {
    constructor(eventBus, stateModule) {
        this.stateModule = stateModule;
        this.eventBus = eventBus;
        eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].PLAY_BUTTON, this.onPlayButton.bind(this));
    }

    onPlayButton(event) {
        let chanceOfReward = this.stateModule.state.manualPlayRewardRatio;
        let shouldGetReward = __WEBPACK_IMPORTED_MODULE_1__util_Randomizer_js__["a" /* default */].reward(chanceOfReward);
        if(shouldGetReward){
            this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_2__GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].GAIN_REWARD));
        } else {
            this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_2__GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].REWARD_MISSED));
        }
    }

    update(delta) {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayButtonModule;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    reward(chanceOfSuccess) {
        let number = Math.random();
        return  number <= chanceOfSuccess;
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameEvent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Events_js__ = __webpack_require__(0);



class ButtonEventAdapter {
    constructor(config, eventBus) {
        this.eventBus = eventBus;
        this._bindButtonsToEventSystem(config);
    }

    _bindButtonsToEventSystem(config) {
        this._bindButton(config.playButtonId, __WEBPACK_IMPORTED_MODULE_1__Events_js__["a" /* default */].PLAY_BUTTON);
    }

    _bindButton(querySelector, eventName) {
        let playButton = document.querySelector(querySelector);
        let self = this;
        playButton.onclick = () => {
            self.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_0__GameEvent_js__["a" /* default */](eventName));
        }
    }

    update(delta) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ButtonEventAdapter;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(0);


class DisplayValueEventAdapter {
    constructor(config, eventBus) {
        this.config = config;
        this.eventBus = eventBus;
        this._bindFieldsToEvents();
    }

    update(delta) {
    }

    _bindFieldsToEvents() {
        this._bindField(this.config.rewardCountDisplayId, __WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].REWARD_COUNT_CHANGE);
    }

    _bindField(querySelector, eventType){
        let element = document.querySelector(querySelector);
        this.eventBus.subscribe(eventType, (event) => {
            element.innerText = event.data;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayValueEventAdapter;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameEvent__ = __webpack_require__(1);



class StateModule {

    constructor(config, eventBus) {
        this.globalState = config.defaults;
        this.config = config;
        this._loadExistingState(config);
        this._addStateWatchers(eventBus);
    }

    _addStateWatchers(eventBus) {
        let self = this;
        eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].GAIN_REWARD, () => {
            self.globalState.rewards++;
            eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].REWARD_COUNT_CHANGE, self.globalState.rewards));
        });
    }

    get state() {
        return this.globalState;
    }

    _loadExistingState(config) {
        let serialData = window.localStorage.getItem(config.storageKey);
        if (serialData !== "undefined") {
            let stateData = JSON.parse(serialData);
            if (stateData) {
                Object.assign(this.globalState, stateData);
                console.log('Loaded existing game.');
            } else {
                console.log('No existing game found.');
            }
        } else {
            console.log('No existing game found.');
        }
        setInterval(this._saveState.bind(this), config.autoSaveInterval);
    }

    _saveState() {
        let serialData = JSON.stringify(this.globalState);
        window.localStorage.setItem(this.config.storageKey, serialData);
        console.log('Auto-saved : ' + serialData);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StateModule;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventBus {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = EventBus;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    playButtonId: '#playButton',
    rewardCountDisplayId: '#rewards',

    storageKey: 'universal-player-v1',
    autoSaveInterval: (1000 * 30),
    defaults: {
        rewards: 0,
        manualPlayRewardRatio: 1
    }
});

/***/ })
/******/ ]);