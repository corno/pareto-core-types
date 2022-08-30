
export type Dictionary<T> = {
    readonly "forEach": (
        sortAlgorithm: (a: string, b: string) => boolean,
        callback: (entry: T, key: string) => void,
    ) => void
    readonly "map": <NT>(cb: (v: T, key: string) => NT) => Dictionary<NT>

    readonly "filter": <NT>(
        cb: (v: T, key: string) => NT | undefined
    ) => Dictionary<NT>

    readonly "reduce": <NT>(
        seed: NT,
        callback: (current: NT, entry: T, key: string) => NT,
    ) => NT
}