
export type AsyncValue<T> = {
    execute: (
        callback: (v: T) => void
    ) => void
}