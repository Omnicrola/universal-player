export default {
    reward(chanceOfSuccess) {
        return chanceOfSuccess < Math.random();
    }
}