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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Events {
    static get GAME_INIT_COMPLETE() {
        return 'game-init-complete';
    };

    static get FEATURES_CHANGED() {
        return 'features-changed';
    };

    static get REWARDS_CHANGED() {
        return 'rewards-changed'
    };

    static get ALL() {
        return 'all';
    };

    static get PLAYER_COUNT_CHANGE() {
        return 'player-count-change';
    };

    static get CURRENCY_CHANGED() {
        return 'currency-changed';
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
class Currency {
    static get REWARD() {
        return 'rewards';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Currency;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Features {
    static get POSITIVE_FEEDBACK() {
        return 'positive-feedback';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Features;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainLoop_js__ = __webpack_require__(5);


var mainLoop = __WEBPACK_IMPORTED_MODULE_0__MainLoop_js__["a" /* default */].build();
mainLoop.start();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlayButtonModule_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ButtonEventAdapter_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_DisplayValueEventAdapter_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StateModule_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_EventBus__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upgrades_UpgradesModule__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_FeaturesModule__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_GameEvent__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events_Events__ = __webpack_require__(0);











class MainLoop {

    static build() {
        let fps = 30;

        let eventBus = new __WEBPACK_IMPORTED_MODULE_4__events_EventBus__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */]);
        let stateModule = new __WEBPACK_IMPORTED_MODULE_3__StateModule_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus);

        return new MainLoop(fps, eventBus, [
            new __WEBPACK_IMPORTED_MODULE_1__util_ButtonEventAdapter_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus),
            new __WEBPACK_IMPORTED_MODULE_2__util_DisplayValueEventAdapter_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus),
            new __WEBPACK_IMPORTED_MODULE_0__PlayButtonModule_js__["a" /* default */](eventBus, stateModule),
            new __WEBPACK_IMPORTED_MODULE_6__upgrades_UpgradesModule__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], stateModule, eventBus),
            new __WEBPACK_IMPORTED_MODULE_7__features_FeaturesModule__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* default */], eventBus, stateModule),
        ]);
    }

    constructor(fps, eventBus, modules) {
        this.fps = fps;
        this.msPerFrame = 1000 / fps;
        this.modules = modules;
        this.eventBus = eventBus;

    }

    start() {
        console.log('started! ' + this.fps);
        this.lastFrameTimeMs = Date.now();
        requestAnimationFrame(this._runLoop.bind(this));
        this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_8__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_9__events_Events__["a" /* default */].GAME_INIT_COMPLETE));
    }

    _runLoop() {
        let timestamp = Date.now();
        if (timestamp < this.lastFrameTimeMs + this.msPerFrame) {
            requestAnimationFrame(this._runLoop.bind(this));
            return;
        }
        let delta = (timestamp - this.lastFrameTimeMs ) / 1000;
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Randomizer_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_GameEvent__ = __webpack_require__(1);




class PlayButtonModule {
    constructor(eventBus, stateModule) {
        this.stateModule = stateModule;
        this.eventBus = eventBus;
        eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].PLAY_BUTTON, this.onPlayButton.bind(this));
    }

    onPlayButton(event) {
        let chanceOfReward = this.stateModule.manualPlayRewardRatio();
        let shouldGetReward = __WEBPACK_IMPORTED_MODULE_1__util_Randomizer_js__["a" /* default */].reward(chanceOfReward);
        if (shouldGetReward) {
            this.stateModule.addReward(1);
            this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_2__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].GAIN_REWARD));
        } else {
            this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_2__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].REWARD_MISSED));
        }
    }

    update(delta) {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayButtonModule;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    reward(chanceOfSuccess) {
        let number = Math.random();
        return number <= chanceOfSuccess;
    },

    jitter(num, amount) {
        let offset = (Math.random() * (amount * 2)) - amount;
        return num + offset;
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_GameEvent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_Events_js__ = __webpack_require__(0);



class ButtonEventAdapter {
    constructor(config, eventBus) {
        this.eventBus = eventBus;
        this._bindButtonsToEventSystem(config);
    }

    _bindButtonsToEventSystem(config) {
        this._bindButton(config.playButtonId, __WEBPACK_IMPORTED_MODULE_1__events_Events_js__["a" /* default */].PLAY_BUTTON);
    }

    _bindButton(querySelector, eventName) {
        let playButton = document.querySelector(querySelector);
        let self = this;
        playButton.onclick = () => {
            self.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_0__events_GameEvent_js__["a" /* default */](eventName));
        }
    }

    update(delta) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ButtonEventAdapter;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_Events__ = __webpack_require__(0);


class DisplayValueEventAdapter {
    constructor(config, eventBus) {
        this.config = config;
        this.eventBus = eventBus;
        this._bindFieldsToEvents();
    }

    update(delta) {
    }

    _bindFieldsToEvents() {
        this._bindField(this.config.rewardCountDisplayId, __WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].REWARDS_CHANGED);
        this._bindField(this.config.playerCountDisplayId, __WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].PLAYER_COUNT_CHANGE);
    }

    _bindField(querySelector, eventType) {
        let element = document.querySelector(querySelector);
        this.eventBus.subscribe(eventType, (event) => {
            element.innerText = event.data;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayValueEventAdapter;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__economy_Currency__ = __webpack_require__(2);




class StateModule {

    constructor(config, eventBus) {
        this.globalState = config.defaults;
        this.config = config;
        this.eventBus = eventBus;
        this.eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].GAME_INIT_COMPLETE, this._loadExistingState.bind(this));
    }

    addPlayer(count) {
        this.globalState.players += count;
        this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].PLAYER_COUNT_CHANGE, this.globalState.players));
    }

    addReward(count) {
        this.globalState.rewards += count;
        this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].REWARDS_CHANGED, this.globalState.rewards));
        this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].CURRENCY_CHANGED));
    }

    activateFeature(feature) {
        this.globalState.features[feature] = true;
        this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].FEATURES_CHANGED, feature));
    }

    rewards() {
        return this.globalState.rewards;
    }

    players() {
        return this.globalState.players;
    }

    manualPlayRewardRatio() {
        return this.globalState.manualPlayRewardRatio;
    }

    isUpgradePurchased(upgrade) {
        let contains = this.globalState.upgrades.indexOf(upgrade.id) >= 0;
        return contains;
    }

    purchaseUpgrade(upgrade) {
        upgrade.activate(this);
        this.globalState.upgrades.push(upgrade.id);
    }


    _loadExistingState() {
        let serialData = window.localStorage.getItem(this.config.storageKey);
        if (serialData !== "undefined") {
            let stateData = JSON.parse(serialData);
            if (stateData) {
                Object.assign(this.globalState, stateData);
                this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].PLAYER_COUNT_CHANGE, this.globalState.players));
                this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].REWARDS_CHANGED, this.globalState.rewards));
                this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].CURRENCY_CHANGED));
                this._broadcastFeatures();
                console.log('Loaded existing game.');
            } else {
                console.log('No existing game found.');
            }
        } else {
            console.log('No existing game found.');
        }
        setInterval(this._saveState.bind(this), this.config.autoSaveInterval);
    }

    _broadcastFeatures() {
        for (var feature in this.globalState.features) {
            this.eventBus.broadcast(new __WEBPACK_IMPORTED_MODULE_1__events_GameEvent__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].FEATURES_CHANGED, feature));
        }
    }

    _saveState() {
        let serialData = JSON.stringify(this.globalState);
        window.localStorage.setItem(this.config.storageKey, serialData);
        console.log('Auto-saved : ' + serialData);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StateModule;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(0);


class EventBus {

    constructor(config) {
        this.subscribers = [];
        this.config = config;
    }

    broadcast(event) {
        this._broadcastToType(event.type, event);
        this._broadcastToType(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */].ALL, event);
    }


    _broadcastToType(type, event) {
        if (this.subscribers[type]) {

            let subscribersToEvent = this.subscribers[type];
            let total = subscribersToEvent.length;
            console.log("Broadcasting event '" + type + "' to " + total + " subscribers");
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
/* harmony export (immutable) */ __webpack_exports__["a"] = EventBus;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    playButtonId: '#playButton',
    rewardCountDisplayId: '#rewards',
    playerCountDisplayId: '#player-count-display',
    upgradeContainerId: '#upgrades',

    rewardHighlightElementId: '#reward-highlight',
    rewardGainClass: 'reward-gain',
    rewardMissedClass: 'reward-missed',

    playerEngagment: {
        displayId: '#player-engagement-display',
        intervalInSeconds: 5,
        targetInteractionsPerInterval: 15,
        flatOtherPlayerEngagementAmount: 0.2
    },

    storageKey: 'universal-player-v1',
    autoSaveInterval: (1000 * 30),
    defaults: {
        rewards: 0,
        players: 1,
        upgrades: [],
        features: {},
        manualPlayRewardRatio: 1
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UpgradesBuilder__ = __webpack_require__(14);



class UpgradesModule {
    constructor(config, stateModule, eventBus) {
        this.config = config;
        this.stateModule = stateModule;
        this.upgrades = __WEBPACK_IMPORTED_MODULE_1__UpgradesBuilder__["a" /* default */].build();
        this.displayElements = [];
        eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].CURRENCY_CHANGED, this._evaluate.bind(this));
    }

    update(delta) {
        let total = this.displayElements.length;
        for (let index = 0; index < total; index++) {
            let displayElement = this.displayElements[index];
            displayElement.disabled = !displayElement.upgrade.isPurchasable(this.stateModule);
        }
    }

    _evaluate(event) {
        let total = this.upgrades.length;
        for (let index = 0; index < total; index++) {
            this._evalUpgrade(this.upgrades[index]);
        }
    }

    _evalUpgrade(upgrade) {
        let isAlreadyPurchased = this.stateModule.isUpgradePurchased(upgrade);
        if (isAlreadyPurchased) {
            this._removeUpgrade(upgrade);
        } else if (upgrade.isVisible(this.stateModule)) {
            this._updateUpgradeElement(upgrade);
        }
    }

    _removeUpgrade(upgrade) {
        let element = this._getElement(upgrade.id);
        if (element) {
            element.parent().removeChild(element);
            let element = this._getElement(upgrade.id);
            let index = this.displayElements.indexOf(element);
            this.displayElements.splice(index, 1);
        }
    }

    _updateUpgradeElement(upgrade) {
        if (this._isNotCurrentlyVisible(upgrade.id)) {
            this._createElement(upgrade);
        }
        let purchasable = upgrade.isPurchasable(this.stateModule);
        console.log(upgrade.title + " is purchasable: " + purchasable);
        let element = this._getElement(upgrade.id);
        element.disabled = !purchasable;
    }

    _createElement(upgrade) {
        let upgradeContainer = document.querySelector(this.config.upgradeContainerId);
        let listElement = document.createElement('li');
        listElement.upgrade = upgrade;

        let newButton = document.createElement('button');
        newButton.innerHTML = this._buildUpgradeText(upgrade);
        newButton.id = 'upgrade-' + upgrade.id;
        newButton.classList.add('btn', 'btn-primary');
        newButton.disabled = !upgrade.isPurchasable(this.stateModule);
        newButton.onclick = this._onUpgradeActivate(upgrade).bind(this);

        listElement.appendChild(newButton);
        upgradeContainer.appendChild(listElement);
        this.displayElements.push(listElement);
    }

    _buildUpgradeText(upgrade) {
        return `<strong>${upgrade.title}</strong> <br/>
            (${upgrade.cost}) =&gt; <em>${upgrade.yields}</em>`;
    }

    _onUpgradeActivate(upgrade) {
        return (event) => {
            this.stateModule.purchaseUpgrade(upgrade);
            this._evaluate(null);
        };
    }

    _isNotCurrentlyVisible(id) {
        return !this._getElement(id);
    }

    _getElement(id) {
        return this.displayElements.filter(element => element.upgrade.id === id)[0];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UpgradesModule;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__economy_Currency_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Upgrade__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_Features__ = __webpack_require__(3);




class UpgradesBuilder {
    static build() {
        return [
            UpgradeShareWithFriend(1),
            UpgradeAddRewardFeedback(2),
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UpgradesBuilder;


function UpgradeAddRewardFeedback(id){
    return new __WEBPACK_IMPORTED_MODULE_1__Upgrade__["a" /* default */]({
        id: id,
        title: 'Basic operant conditioning',
        cost: '25 Rewards',
        yields: 'Positive behavior reinforcement',
        costs: [{type: __WEBPACK_IMPORTED_MODULE_0__economy_Currency_js__["a" /* default */].REWARD, amount: 25}],
        isVisible: (stateModule) => {
            return stateModule.rewards() >= 10;
        },
        activate: (gameStateModule) => {
            gameStateModule.activateFeature(__WEBPACK_IMPORTED_MODULE_2__features_Features__["a" /* default */].POSITIVE_FEEDBACK);
        }
    });

}
function UpgradeShareWithFriend(id) {
    return new __WEBPACK_IMPORTED_MODULE_1__Upgrade__["a" /* default */]({
        id: id,
        title: 'Share with a friend',
        cost: '10 Rewards',
        yields: '+1 Player',
        costs: [{type: __WEBPACK_IMPORTED_MODULE_0__economy_Currency_js__["a" /* default */].REWARD, amount: 10}],
        isVisible: (stateModule) => {
            return stateModule.rewards() >= 25;
        },
        activate: (gameStateModule) => {
            gameStateModule.addPlayer(1);
        }
    });
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__economy_Currency__ = __webpack_require__(2);


class Upgrade {
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.cost = params.cost;
        this.yields = params.yields;
        this.costs = params.costs;
        this.isVisible = params.isVisible;
        this.activate = params.activate;
    }

    activate(gameStateModule) {
        throw new Error('Not implemented!');
    }

    isVisible(gameStateModule) {
        throw new Error('Not implemented!');
    }

    isPurchasable(gameStateModule) {
        let total = this.costs.length;
        for (let index = 0; index < total; index++) {
            if (!this._haveCurrency(gameStateModule, this.costs[index])) {
                return false;
            }
        }
        return true;
    }

    _haveCurrency(gameState, cost) {
        if (cost.type === __WEBPACK_IMPORTED_MODULE_0__economy_Currency__["a" /* default */].REWARD) {
            return gameState.rewards() >= cost.amount;
        }
        return false;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Upgrade;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FeatureBuilder__ = __webpack_require__(17);



class FeaturesModule {
    constructor(config, eventBus, stateModule) {
        this.features = __WEBPACK_IMPORTED_MODULE_1__FeatureBuilder__["a" /* FeatureBuilder */].build(config, eventBus, stateModule);
        eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].FEATURES_CHANGED, this._onFeatureChange.bind(this));
    }

    _onFeatureChange(event) {
        let size = this.features.length;
        for (let index = 0; index < size; index++) {
            let feature = this.features[index];
            if (feature.name === event.data) {
                feature.activate();
            }
        }
    }

    update(delta) {
        let total = this.features.length;
        for (let index = 0; index < total; index++) {
            this.features[index].update(delta);
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = FeaturesModule;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PositiveReinforcementFeature__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PlayerEngagementFeature__ = __webpack_require__(19);



class FeatureBuilder {
    static build(config, eventBus, stateModule) {
        return [
            new __WEBPACK_IMPORTED_MODULE_0__PositiveReinforcementFeature__["a" /* default */](config, eventBus),
            new __WEBPACK_IMPORTED_MODULE_1__PlayerEngagementFeature__["a" /* default */](config, eventBus, stateModule)
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FeatureBuilder;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Features__ = __webpack_require__(3);



class PositiveReinforcementFeature {
    constructor(config, eventBus) {
        this.config = config;
        this.eventBus = eventBus;
        this.rewardElement = document.querySelector(config.rewardHighlightElementId);
    }

    get name() {
        return __WEBPACK_IMPORTED_MODULE_1__Features__["a" /* default */].POSITIVE_FEEDBACK;
    }

    activate() {
        this.eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].GAIN_REWARD, this._onRewardGain.bind(this));
        this.eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_0__events_Events__["a" /* default */].REWARD_MISSED, this._onRewardMissed.bind(this));
    }

    deactivate() {
    }

    update(delta) {
    }

    _addRemoveClass(className) {
        this.rewardElement.classList.add(className);
        let self = this;
        setTimeout(() => {
            self.rewardElement.classList.remove(className)
        }, 500);

    }

    _onRewardGain() {
        this._addRemoveClass(this.config.rewardGainClass);
    }

    _onRewardMissed() {
        this._addRemoveClass(this.config.rewardMissedClass)
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PositiveReinforcementFeature;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Features__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_Formatters__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_Randomizer__ = __webpack_require__(7);





class PlayerEngagementFeature {
    constructor(config, eventBus, stateModule) {
        this.config = config;
        this.eventBus = eventBus;
        this.stateModule = stateModule;
        this.totalInteractionsThisInterval = 0;
        this.elapsedSinceLastUpdate = 0;
        this.engagmentElement = document.querySelector(config.playerEngagment.displayId);
    }

    get name() {
        return __WEBPACK_IMPORTED_MODULE_0__Features__["a" /* default */].POSITIVE_FEEDBACK;
    }

    activate() {
        this.eventBus.subscribe(__WEBPACK_IMPORTED_MODULE_1__events_Events__["a" /* default */].PLAY_BUTTON, this._onInteraction.bind(this));
    }

    deactivate() {
    }

    update(delta) {
        this.elapsedSinceLastUpdate += delta;
        let interval = this.config.playerEngagment.intervalInSeconds;
        if (this.elapsedSinceLastUpdate > interval) {
            this._calculateEngagement();
            this.totalInteractionsThisInterval = 0;
            this.elapsedSinceLastUpdate = 0;
        }
    }

    _onInteraction() {
        this.totalInteractionsThisInterval++;
    }

    _calculateEngagement() {

        let otherPlayersRateTotal = this._getOtherPlayersEngagement();
        let otherPlayerCount = this.stateModule.players();

        let targetInteractions = this.config.playerEngagment.targetInteractionsPerInterval;
        let activePlayersRate = Math.min(1, this.totalInteractionsThisInterval / targetInteractions);

        let actualRate = (otherPlayersRateTotal + activePlayersRate) / (otherPlayerCount + 1);
        this._updateDisplay(actualRate);
    }

    _getOtherPlayersEngagement() {
        let otherPlayerRate = this.config.playerEngagment.flatOtherPlayerEngagementAmount;
        let otherPlayerCount = this.stateModule.players();
        let otherPlayersRateTotal = __WEBPACK_IMPORTED_MODULE_3__util_Randomizer__["a" /* default */].jitter(otherPlayerRate * otherPlayerCount, 0.01);
        return otherPlayersRateTotal;
    }

    _updateDisplay(engagementPerInterval) {
        this.engagmentElement.innerText = __WEBPACK_IMPORTED_MODULE_2__util_Formatters__["a" /* default */].number(engagementPerInterval * 100, 2, 3) + "%";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayerEngagementFeature;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Formatters {
    static number(theNumber, decimals, leadingZeros = 0) {
        if (typeof theNumber !== 'number') {
            theNumber = 0;
        }
        let withDecimals = theNumber.toFixed(decimals)
        let zerosToAdd = leadingZeros - theNumber.toFixed(0).toString().length;

        let zeros = "";
        for (let i = 0; i < zerosToAdd; i++) {
            zeros += "0";
        }
        return zeros + withDecimals;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Formatters;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map