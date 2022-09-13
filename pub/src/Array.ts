import { AsyncValue } from "./AsyncValue"

export type Array<T> = {
    readonly "forEach": (
        $i: ($: T) => void //this one could (should?) be implemented by a resource as well, it's a pure interface, it does not return a value
    ) => void

    readonly "map": <NT>(
        $v: ($: T) => NT
    ) => Array<NT>
    readonly "filter": <NT>(
        $v: ($: T) => NT | undefined
    ) => Array<NT>
    readonly "reduce": <NT>(
        $: NT,
        $v: (current: NT, $: T) => NT,
    ) => NT

    readonly "asyncMap": <NT>(
        $v: ($: T) => AsyncValue<NT>
    ) => AsyncValue<Array<NT>>
}