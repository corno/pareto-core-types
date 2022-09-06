import { AsyncValue } from "./AsyncValue"

export type Dictionary<T> = {
    readonly "map": <NT>(
        $c: ($: T, key: string) => NT
    ) => Dictionary<NT>
    readonly "filter": <NT>(
        $c: ($: T, key: string) => NT | undefined
    ) => Dictionary<NT>
    readonly "reduce": <NT>(
        $: NT,
        $c: (current: NT, $: T, key: string) => NT,
    ) => NT


    readonly "asyncMap": <NT>(
        $c: ($: T, key: string) => AsyncValue<NT>
    ) => AsyncValue<Dictionary<NT>>
}