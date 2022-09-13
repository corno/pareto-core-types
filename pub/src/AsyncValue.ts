
export type AsyncValue<T> = {
    map: <NT>($v: ($: T) => AsyncValue<NT>) => AsyncValue<NT>

    /**
     * if the callback returns undefined, the resulting asynchronous value is never evaluated
     * the async chain stops.
     */
    setCondition: <NT>($v: ($: T) => AsyncValue<NT> | undefined) => AsyncValue<NT>
    _execute: (
        $i: ($: T) => void
    ) => void
    _isGuaranteedToReturnAResult: boolean
}