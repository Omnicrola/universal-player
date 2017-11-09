import Currency from '../economy/Currency.js';
import Upgrade from "./Upgrade";
import Features from "../features/Features";

export default class UpgradesBuilder {
    static build() {
        return [
            UpgradeShareWithFriend(1),
            UpgradeAddRewardFeedback(2),
        ];
    }
}

function UpgradeAddRewardFeedback(id){
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