import PositiveReinforcementFeature from "./PositiveReinforcementFeature";
import PlayerEngagementFeature from "./PlayerEngagementFeature";
import RandomRewardFeature from "./RandomRewardFeature";

export class FeatureBuilder {
    static build(config, eventBus, stateModule) {
        return [
            new PositiveReinforcementFeature(config, eventBus),
            new PlayerEngagementFeature(config, eventBus, stateModule),
            new RandomRewardFeature(config, eventBus)
        ];
    }
}