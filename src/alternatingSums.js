function solution(a) {
    let even = 0;
    let odd = 0;
    for (const val of a.entries()) {
        if (val[0] % 2 === 0) {
            even += val[1];
        } else {
            odd += val[1];
        }
    }
    return [even, odd];
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test alternatingSums

// alternative solution
// solution = (a) => a.reduce((p, v, i) => ((p[i & 1] += v), p), [0, 0]);

// alternative solution
// function solution(a) {
//     let team1 = 0;
//     let team2 = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 == 0) {
//             team1 += a[i];
//         } else {
//             team2 += a[i];
//         }
//     }
//     return [team1, team2];
// }

// alternative solution
// function solution(a) {
//     let res = [0, 0];
//     for (let i in a) {
//         res[i % 2] += a[i];
//     }
//     return res;
// }
