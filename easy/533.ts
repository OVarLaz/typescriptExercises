/*
Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
*/
type Concat<T extends Array<number>, U extends Array<number>> = [...T, ...U]
type Result = Concat<[1], [2]> // expected to be [1, 2]

const testV: Result = [1,2]

//Done