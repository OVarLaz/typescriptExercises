/*
Implement a generic First<T> that takes an Array T and returns it's first element's type.
*/
type First<T extends Array<string|number>> = T[0]
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

const head: head1 = 'a'

//Done