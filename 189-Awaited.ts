/**
 * If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
 * For example if we have Promise<ExampleType> how to get ExampleType?
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.md
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? R : never;


type t = MyAwaited<Promise<string>>;
