export default class StateModule {
    static get _STORAGE_KEY() {
        return 'universal_player_data';
    }

    constructor(config) {
        this.state = config.defaults;
        this._loadExistingState(config);
    }

    _loadExistingState(config) {
        let serialData = window.localStorage.getItem(this._STORAGE_KEY);
        if (serialData !== "undefined") {
            let stateData = JSON.parse(serialData);
            Object.assign(this.state, stateData);
            console.log('Loaded existing game.');
        } else {
            console.log('No existing game found.');
        }
        setInterval(this._saveState.bind(this), config.autoSaveInterval);
    }

    _saveState() {
        let serialData = JSON.stringify(this.state);
        window.localStorage.setItem(this._STORAGE_KEY, serialData);
        console.log('Auto-saved');
    }
}