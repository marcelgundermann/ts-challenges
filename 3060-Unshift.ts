/**
 * Implement the type version of Array.unshift
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/3060-easy-unshift/README.md
 */
type Unshift<T extends unknown[], P> = [P, ...T];


type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
