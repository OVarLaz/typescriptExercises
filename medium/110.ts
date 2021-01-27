/*
Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
*/

type Capitalize<S extends string> = Uppercase<S[0]>

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
const test: capitalized = 'Hello world'