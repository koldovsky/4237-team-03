1.
function stringToArray(string) {
    return string.split(" ");
}

2.
function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U")
}

3.
var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

4.
function min(arr, toReturn) {
    let minValue = Math.min(...arr);
    if (toReturn === "value") {
        return minValue;
    } else {
        return arr.indexOf(minValue);
    }
}

5.
function doubleInteger(i) {
    return i * 2;
}

6.
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

7.
function nthEven(n) {
    return n * 2 - 2;
}

8.
function getRealFloor(n) {
    if (n >= 14) {
        return n - 2;
    } else if (n === 13) {
        return undefined;
    } else if (n > 0) {
        return n - 1;
    } else {
        return n;
    }
}

9.
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}

10.
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
}