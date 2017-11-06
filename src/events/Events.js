export default class Events {
    static get ADD_PLAYER() {
        return 'add-player';
    };

    static get ALL() {
        return 'all';
    };

    static get PLAYER_COUNT_CHANGE() {
        return 'player-count-change';
    };

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