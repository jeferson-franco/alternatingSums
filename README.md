# alternatingSums

Several people are standing in a row and need to be divided into two teams. The first person goes into _team 1_, the second goes into _team 2_, the third goes into _team 1_ again, the fourth into _team 2_, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of _team 1_, and the second element is the total weight of _team 2_ after the division is complete.

## Example

For `a = [50, 60, 60, 45, 70]`, the output should be
`solution(a) = [180, 105]`.

## Input/Output

- [execution-time-limit] 4 seconds (js)

- [input] array.integer a

Guaranteed constraints:
`1 ≤ a.length ≤ 10^5`,
`45 ≤ a[i] ≤ 100`.

- [output] array.integer
