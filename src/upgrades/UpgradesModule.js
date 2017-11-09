import Events from '../events/Events';
import UpgradesBuilder from "./UpgradesBuilder";

export default class UpgradesModule {
    constructor(config, stateModule, eventBus) {
        this.config = config;
        this.stateModule = stateModule;
        this.upgrades = UpgradesBuilder.build();
        this.displayElements = [];
        eventBus.subscribe(Events.CURRENCY_CHANGED, this._evaluate.bind(this));
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
        let visible = upgrade.isVisible(this.stateModule);
        if (visible && this._isNotCurrentlyVisible(upgrade.id)) {
            this._createElement(upgrade);
        }
        if (visible) {
            let purchasable = upgrade.isPurchasable(this.stateModule);
            console.log(upgrade.title + " is purchasable: " + purchasable);
            this.displayElements[upgrade.id].disabled = !purchasable;
        }
    }

    _createElement(upgrade) {
        let upgradeContainer = document.querySelector(this.config.upgradeContainerId);
        let newButton = document.createElement('button');
        newButton.upgrade = upgrade;
        newButton.innerHTML = this._buildUpgradeText(upgrade);
        newButton.id = 'upgrade-' + upgrade.id;
        newButton.disabled = !upgrade.isPurchasable(this.stateModule);
        newButton.onclick = this._onUpgradeActivate(upgrade).bind(this);
        upgradeContainer.appendChild(newButton);
        this.displayElements[upgrade.id] = newButton;
    }

    _buildUpgradeText(upgrade) {
        return `<strong>${upgrade.title}</strong> <br/>
            (${upgrade.cost}) =&gt; <em>${upgrade.yields}</em>`;
    }

    _onUpgradeActivate(upgrade) {
        return (event) => {
            upgrade.activate(this.stateModule);
        };
    }

    _isNotCurrentlyVisible(id) {
        return !this.displayElements[id];
    }
}