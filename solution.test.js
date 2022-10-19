import { isPrime, isReversible, sumDigits, solve } from './solution'

/*
 * Test sub functions
 */
describe("Test checking prime", () => {
    const testCases = [
        [2, true],
        [3, true],
        [4, false]
    ]
    test.each(testCases)("N = %i", (n, e) => {
        expect(isPrime(n)).toBe(e)
    })
})

describe("Test checking reversible", () => {
    const testCases = [
        [2, true],
        [22, true],
        [909, true],
        [1431, false]
    ]
    test.each(testCases)("N = %i", (n, e) => {
        expect(isReversible(n)).toBe(e)
    })
})

describe("Test sum digits", () => {
    const testCases = [
        [2, 2],
        [785, 20],
        [89416515, 39]
    ]
    test.each(testCases)("N = %i", (n, e) => {
        expect(sumDigits(n)).toBe(e)
    })
})

/*
 * Test main function
 */
describe("Test exception", () => {
    test('n != number', () => {
        expect(() => solve('a!')).toThrow()
    })
    test('N = 0', () => {
        expect(() => solve(0)).toThrow(/greater/)
    })
})

// DDT
const testCases = [
    [8, [2]],
    [7, [
        1003001, 1022201, 1092901, 1120211, 1123211,
        1190911, 1201021, 1221221, 1280821, 1300031,
        1303031, 1311131, 1338331, 1362631, 1444441,
        1452541, 1542451, 1550551, 1616161, 1640461,
        1714171, 1730371, 1820281, 1988891, 3001003,
        3002003, 3064603, 3072703, 3103013, 3228223,
        3236323, 3252523, 3260623, 3424243, 3698963,
        3878783, 7114117, 7302037, 7310137, 7388837,
        7486847, 7576757, 7592957, 7666667, 7674767,
        7690967, 7764677, 7772777, 7838387, 7897987,
        7960697, 7987897, 9110119, 9196919, 9200029,
        9286829, 9384839, 9556559, 9670769, 9752579,
        9779779, 9787879, 9795979, 9818189, 9908099,
        9916199, 9932399
    ]],
    [6, []],
    [5, [
        10301, 10501, 10601,
        11311, 11411, 13331,
        18481, 30103, 30203,
        31013, 34843, 37273,
        38083, 73237, 74047
    ]],
    [4, []],
    [3, [
        101, 131, 151,
        191, 313, 353,
        787
    ]],
    [2, [11]],
    [1, [2, 3, 5, 7]]
]

describe("DDT sequence", () => {
    test.each(testCases)("N = %i", (n, e) => {
        expect(solve(n)).toStrictEqual(e)
    })
})

// Run all test cases at the same time. Should use "concurrent"
describe("DDT Concurrence", () => {
    test.concurrent.each(testCases)("N = %i", (n, e) => {
        expect(solve(n)).toStrictEqual(e)
    })
})