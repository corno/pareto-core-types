import { AsyncValue } from "./AsyncValue"

export interface Array<T> {
    map<NT>(
        $v: ($: T) => NT
    ): Array<NT>
    asyncMap<NT>(
        $v: ($: T) => AsyncValue<NT>
    ): AsyncValue<Array<NT>>

    //methods that are only to be used by resources
    __forEach(
        $i: ($: T) => void
    ): void
    __getLength(): number
    __getElementAt(index: number): T //throws exception if index < 0 or index >= length
}