
/**
 * Why this type and not use for example 'null | T'?
 * the 'null | T' is vulnerable. If you have a parametrized function 'foo<T>() null | T' and T is null | number,
 * you cannot discern if a return value is null because of the function or because of the data
 * this 'OptionalValue' type makes it possible to have recursive optional types like this: OptionalValue<OptionalValue<number>>
 */
export type OptionalValue<T> = [false] | [true, T]