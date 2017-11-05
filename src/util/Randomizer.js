export default {
    reward(chanceOfSuccess) {
        let number = Math.random();
        return  number <= chanceOfSuccess;
    }
}