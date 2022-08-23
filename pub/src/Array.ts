
export type Array<T> = {
    readonly "forEach": (callback: (entry: T) => void) => void
    readonly "map": <NT>(callback: (entry: T) => NT) => Array<NT>
}