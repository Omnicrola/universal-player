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
            console.log("WTF");
            console.log(element);
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
        let filtered = this.displayElements
            .filter(element => element.upgrade.id === id);
        console.log(filtered)
        return filtered[0];
    }
}