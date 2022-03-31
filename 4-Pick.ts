/**
 * Implement the built-in Pick<T, K> generic without using it.
 *
 * https://github.com/type-challenges/type-challenges/tree/master/questions/4-easy-pick
 */
type MyPick<T, P extends keyof T> = {
    [K in P]: T[K];
}


interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
