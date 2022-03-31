/**
 * Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F.
 * C is expected to be either true or false while T and F can be any type.
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md
 */
type If<T extends boolean, A, B> = T extends true ? A : B;


type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
