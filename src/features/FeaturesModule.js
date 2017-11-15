import Events from "../events/Events";
import {FeatureBuilder} from "./FeatureBuilder";

export default class FeaturesModule {
    constructor(config, eventBus, stateModule) {
        this.features = FeatureBuilder.build(config, eventBus, stateModule);
        eventBus.subscribe(Events.FEATURES_CHANGED, this._onFeatureChange.bind(this));
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