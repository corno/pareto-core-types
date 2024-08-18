
/**
 * Why this type and not use for example 'null | T'?
 * the 'null | T' is vulnerable. If you have a parametrized function 'foo<T>() null | T' and T is null | number,
 * you cannot discern if a return value is null because of the function or because of the data
 * this 'OptionalValue' type makes it possible to have recursive optional types like this: OptionalValue<OptionalValue<number>>
 */
export type OptionalValue<T> = [false] | [true, T]

/*
TBD: why is this not an interface with a map function?

one reason I can think of is that it allows for a switch like this:

switch (x[0]) {
    case false:
        //do something
    case true:
        ss($[i], ($) => {
            //do something else
        })
    default: au(x[0])
}
*/