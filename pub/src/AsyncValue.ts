
export type AsyncValue<T> = {
    map: <NT>($c: ($: T) => AsyncValue<NT>) => AsyncValue<NT>

    /**
     * if the callback returns undefined, the resulting asynchronous value is never evaluated
     * the async chain stops.
     */
    setCondition: <NT>($c: ($: T) => AsyncValue<NT> | undefined) => AsyncValue<NT>
    _execute: (
        callback: ($: T) => void
    ) => void
}