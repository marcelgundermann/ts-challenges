/**
 * Implement a generic First<T> that takes an Array T and returns it's first element's type.
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md
 */
type First<T extends Array<unknown>> = T['length'] extends 0 ? never : T[0];


type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
