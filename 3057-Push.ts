/**
 * Implement the generic version of Array.push
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/3057-easy-push/README.md
 */
type Push<T extends unknown[], P> = [...T, P];


type Result = Push<[1, 2], '3'> // [1, 2, '3']
