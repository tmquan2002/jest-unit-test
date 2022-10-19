const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

const isReversible = n => {
    const str = n.toString();
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] != str[length - i - 1])
            return false;
    }
    return true;
}

const sumDigits = n => {
    const str = n.toString();
    let sum = 0;
    for (let digit of str)
        sum += parseInt(digit);
    return sum;
}

const solve = nStr => {
    let n = parseInt(nStr)
    if (isNaN(n)) throw "N digits must be a number";
    if (n < 1) throw "N digits must be greater than 0";

    const start = (n == 1) ? 1 : Math.pow(10, n - 1) + 1;
    const end = Math.pow(10, n);
    const res = [];

    if (n == 1) res.push(2);
    for (let i = start; i < end; i += 2) {
        if (
            isReversible(i)
            && isReversible(sumDigits(i))
            && isPrime(i)
        )
            res.push(i);
    }

    return res;
}

export {isPrime, isReversible, sumDigits, solve};