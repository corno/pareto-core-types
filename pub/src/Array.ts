import { AsyncValue } from "./AsyncValue"

export type Array<T> = {
    readonly "map": <NT>(
        $v: ($: T) => NT
    ) => Array<NT>
    readonly "asyncMap": <NT>(
        $v: ($: T) => AsyncValue<NT>
    ) => AsyncValue<Array<NT>>

    //methods that are only to be used by resources
    readonly "__forEach": (
        $i: ($: T) => void
    ) => void
    readonly "__length": () => number
    readonly "__getElementAt": (index: number) => T //throws exception if index < 0 or index >= length
}