export default {

    playButtonId: '#playButton',
    rewardCountDisplayId: '#rewards',
    playerCountDisplayId: '#player-count-display',
    upgradeContainerId: '#upgrades',

    rewardHighlightElementId: '#reward-highlight',
    rewardGainClass: 'reward-gain',
    rewardMissedClass: 'reward-missed',

    ids: {
        rewardReadoutId: 'reward-amount-feedback'
    },

    playerEngagment: {
        displayId: '#player-engagement-display',
        intervalInSeconds: 5,
        targetInteractionsPerInterval: 15,
        flatOtherPlayerEngagementAmount: 0.2
    },

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