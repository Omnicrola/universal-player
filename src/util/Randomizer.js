export default {
    reward(chanceOfSuccess) {
        let number = Math.random();
        return number <= chanceOfSuccess;
    },

    jitter(num, amount) {
        let offset = (Math.random() * (amount * 2)) - amount;
        return num + offset;
    }
}