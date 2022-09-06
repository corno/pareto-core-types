import { AsyncValue } from "./AsyncValue";

export type ProcessAsyncValue = <T>(
    $: AsyncValue<T>,
    $c: ($: T) => void
) => void