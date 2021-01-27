/*
Implement the advanced util type GetRequired<T>, which remains all the required fields
*/
// type GetRequired<T> = Pick<T,Partial<NonNullable<T>>[keyof T]>;
type GetRequired<T> = Pick<T, {[P in keyof T]: T[P] extends NonNullable<T[P]>  ? never : P}[keyof T]>;

type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
const i: I = {foo: 1, bar: 1}

//