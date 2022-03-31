/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md
 */
type Length<T extends readonly string[]> = T['length']


type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
