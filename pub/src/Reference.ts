export type Reference<T> = {
    readonly "get": () => T
    readonly name: string
}