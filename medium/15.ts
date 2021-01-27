type Last<T extends Array<string|number>> = T[T['length'] ]

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

const test:tail1 = 'c' // undefined :(