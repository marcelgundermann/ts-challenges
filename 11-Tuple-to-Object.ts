/**
 * Give an array, transform into an object type and the key/value must in the given array.
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md
 */
type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K
}


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
