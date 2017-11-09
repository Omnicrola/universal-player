import PositiveReinforcementFeature from "./PositiveReinforcementFeature";

export class FeatureBuilder {
    static build(config, eventBus) {
        return [new PositiveReinforcementFeature(config, eventBus)];
    }
}