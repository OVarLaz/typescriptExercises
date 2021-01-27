/*
Implement the built-in Pick<T, K> generic without using it.
Constructs a type by picking the set of properties K from T
*/
type MyPick<T, U extends keyof T> = {[i in U]: T[i] } ;


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

//Done