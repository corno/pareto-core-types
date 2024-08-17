
/**
 * this type allows to nest a set of data types
 * example: const A: Nested<number> = [ 1, [ 2, 3 ] ]
 */
export type Nested<T> = T | Nested<T>[]