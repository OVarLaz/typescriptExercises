/*
Implement the built-in Exclude<T, U>
*/
type MyExclude<T, U> = T extends U ? never : T;

type excluding = MyExclude<"a" | "b" | "c", "a"> //not obj
const ex: excluding = "b"

//Done