import Features from "./Features";
import Events from "../events/Events";
import Formatters from "../util/Formatters";
import Randomizer from "../util/Randomizer";

export default class PlayerEngagementFeature {
    constructor(config, eventBus, stateModule) {
        this.config = config;
        this.eventBus = eventBus;
        this.stateModule = stateModule;
        this.totalInteractionsThisInterval = 0;
        this.elapsedSinceLastUpdate = 0;
        this.engagmentElement = document.querySelector(config.playerEngagment.displayId);
    }

    get name() {
        return Features.POSITIVE_FEEDBACK;
    }

    activate() {
        this.eventBus.subscribe(Events.PLAY_BUTTON, this._onInteraction.bind(this));
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
        let otherPlayersRateTotal = Randomizer.jitter(otherPlayerRate * otherPlayerCount, 0.01);
        return otherPlayersRateTotal;
    }

    _updateDisplay(engagementPerInterval) {
        this.engagmentElement.innerText = Formatters.number(engagementPerInterval * 100, 2, 3) + "%";
    }
}