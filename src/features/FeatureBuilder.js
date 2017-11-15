import PositiveReinforcementFeature from "./PositiveReinforcementFeature";
import PlayerEngagementFeature from "./PlayerEngagementFeature";

export class FeatureBuilder {
    static build(config, eventBus, stateModule) {
        return [
            new PositiveReinforcementFeature(config, eventBus),
            new PlayerEngagementFeature(config, eventBus, stateModule)
        ];
    }
}