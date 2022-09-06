import { AsyncValue } from "./AsyncValue"

export type Array<T> = {
    readonly "map": <NT>(
        $c: ($: T) => NT
    ) => Array<NT>
    readonly "filter": <NT>(
        $c: ($: T) => NT | undefined
    ) => Array<NT>
    readonly "reduce": <NT>(
        $: NT,
        $c: (current: NT, $: T) => NT,
    ) => NT

    readonly "asyncMap": <NT>(
        $c: ($: T) => AsyncValue<NT>
    ) => AsyncValue<Array<NT>>
}