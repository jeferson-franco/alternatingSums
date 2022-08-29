const solution = require('./alternatingSums.js');

test('test 1', () => {
    expect(solution([50, 60, 60, 45, 70])).toEqual([180, 105]);
});

test('test 2', () => {
    expect(solution([100, 50])).toEqual([100, 50]);
});

test('test 3', () => {
    expect(solution([80])).toEqual([80, 0]);
});

test('test 4', () => {
    expect(solution([100, 50, 50, 100])).toEqual([150, 150]);
});

test('test 5', () => {
    expect(solution([100, 51, 50, 100])).toEqual([150, 151]);
});
