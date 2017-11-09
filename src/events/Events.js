export default class Events {
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