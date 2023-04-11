
export interface AsyncValue<T> {
    map<NT>($v: ($: T) => AsyncValue<NT>): AsyncValue<NT>

    //methods that are only to be used by resources
    __execute(
        $i: ($: T) => void
    ): void
}