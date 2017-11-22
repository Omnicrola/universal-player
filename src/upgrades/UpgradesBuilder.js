import Currency from '../economy/Currency.js';
import Upgrade from "./Upgrade";
import Features from "../features/Features";

export default class UpgradesBuilder {
    static build() {
        return [
            UpgradeRandomBonus(1),
            UpgradeShareWithFriend(2),
            UpgradeAddRewardFeedback(3),
        ];
    }
}

function UpgradeRandomBonus(id) {
    return new Upgrade({
        id: id,
        title: 'Extra Bonus',
        cost: '25 Rewards',
        yields: 'Player randomly receives extra Rewards',
        costs: [{type: Currency.REWARD, amount: 25}],
        isVisible: (stateModule) => {
            return stateModule.rewards() >= 20;
        },
        activate: (stateModule) => {
            stateModule.activateFeature(Features.RANDOM_BONUS)
        }
    });
}

function UpgradeAddRewardFeedback(id) {
    return new Upgrade({
        id: id,
        title: 'Basic operant conditioning',
        cost: '25 Rewards',
        yields: 'Positive behavior reinforcement',
        costs: [{type: Currency.REWARD, amount: 25}],
        isVisible: (stateModule) => {
            return stateModule.rewards() >= 10;
        },
        activate: (gameStateModule) => {
            gameStateModule.activateFeature(Features.POSITIVE_FEEDBACK);
        }
    });

}

function UpgradeShareWithFriend(id) {
    return new Upgrade({
        id: id,
        title: 'Share with a friend',
        cost: '10 Rewards',
        yields: '+1 Player',
        costs: [{type: Currency.REWARD, amount: 10}],
        isVisible: (stateModule) => {
            return stateModule.rewards() >= 25;
        },
        activate: (gameStateModule) => {
            gameStateModule.addPlayer(1);
        }
    });
}