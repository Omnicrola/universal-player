import Events from "../events/Events";
import {FeatureBuilder} from "./FeatureBuilder";

export default class FeaturesModule {
    constructor(config, eventBus) {
        this.features = FeatureBuilder.build(config, eventBus);
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
    }

}