
export type AsyncValue<T> = {
    execute: (
        callback: ($: T) => void
    ) => void
}