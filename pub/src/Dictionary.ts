import { AsyncValue } from "./AsyncValue"

export type Dictionary<T> = {
    readonly "map": <NT>(
        $v: ($: T, key: string) => NT
    ) => Dictionary<NT>
    readonly "forEach": (
        isFirstBeforeSecond: (first: string, second: string) => boolean,
        $v: ($: T, key: string) => void
    ) => void
    readonly "filter": <NT>(
        $v: ($: T, key: string) => NT | undefined
    ) => Dictionary<NT>
    readonly "reduce": <NT>(
        $: NT,
        $v: (current: NT, $: T, key: string) => NT,
    ) => NT


    readonly "asyncMap": <NT>(
        $v: ($: T, key: string) => AsyncValue<NT>
    ) => AsyncValue<Dictionary<NT>>
}