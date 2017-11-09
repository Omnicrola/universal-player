export default {

    playButtonId: '#playButton',
    rewardCountDisplayId: '#rewards',
    playerCountDisplayId: '#players',
    upgradeContainerId: '#upgrades',

    rewardHighlightElementId: '#reward-highlight',
    rewardGainClass: 'reward-gain',
    rewardMissedClass: 'reward-missed',

    storageKey: 'universal-player-v1',
    autoSaveInterval: (1000 * 30),
    defaults: {
        rewards: 0,
        players: 1,
        upgrades: [],
        features: {},
        manualPlayRewardRatio: 1
    }
}