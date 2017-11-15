export default class Formatters {
    static number(theNumber, decimals, leadingZeros = 0) {
        if (typeof theNumber !== 'number') {
            theNumber = 0;
        }
        let withDecimals = theNumber.toFixed(decimals)
        let zerosToAdd = leadingZeros - theNumber.toFixed(0).toString().length;

        let zeros = "";
        for (let i = 0; i < zerosToAdd; i++) {
            zeros += "0";
        }
        return zeros + withDecimals;
    }
}