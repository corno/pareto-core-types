import { AsyncValue } from "./AsyncValue"

export interface Dictionary<T> {
    map<NT>(
        $v: ($: T) => NT
    ): Dictionary<NT>
    asyncMap<NT>(
        $v: ($: T) => AsyncValue<NT>
    ): AsyncValue<Dictionary<NT>>


    //methods that are only to be used by resources
    __mapWithKey<NT>(
        $v: ($: T, key: string) => NT
    ): Dictionary<NT>
    __forEach(
        isFirstBeforeSecond: (first: string, second: string) => boolean,
        $v: ($: T, key: string) => void
    ): void
    __unsafeGetEntry(
        key: string,
    ): T
    __getEntry<RT>(
        key: string,
        exists: ($: T) => RT,
        nonExists: () => RT,
    ): RT
}