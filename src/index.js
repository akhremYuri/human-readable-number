module.exports = function toReadable(number) {
    let result = "";
    if (number == 0) return "zero";
    let num = Math.floor(number / 100);
    if (num > 0) {
        result = toStrNum(num) + " hundred";
    }
    num = Math.floor((number % 100) / 10);

    if (num >= 2) {
        result += " " + toStrDec(num);
    } else if (num == 1) {
        result += " " + toStrNum(number % 100);
    }
    if (num != 1) result += " " + toStrNum(number % 10);
    result = result.trim();
    return result;
};

function toStrNum(number) {
    switch (number) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        default:
            return "";
    }
}

function toStrDec(number) {
    switch (number) {
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
        default:
            return "";
    }
}
