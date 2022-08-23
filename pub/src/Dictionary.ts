
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
        callback: (entry: T, current: NT, key: string) => NT,
        seed: NT
    ) => NT
}