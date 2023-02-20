import { AsyncValue } from "./AsyncValue"

export type Dictionary<T> = {
    readonly "map": <NT>(
        $v: ($: T) => NT
    ) => Dictionary<NT>
    readonly "asyncMap": <NT>(
        $v: ($: T) => AsyncValue<NT>
    ) => AsyncValue<Dictionary<NT>>
    
    
    //methods that are only to be used by resources
    readonly "__mapWithKey": <NT>(
        $v: ($: T) => NT
    ) => Dictionary<NT>
    readonly "__forEach": (
        isFirstBeforeSecond: (first: string, second: string) => boolean,
        $v: ($: T, key: string) => void
    ) => void
    readonly "__unsafeGetEntry": (
        key: string,
    ) => T
    readonly "__getEntry": <RT>(
        key: string,
        exists: ($: T) => RT,
        nonExists: () => RT,
    ) => RT
}