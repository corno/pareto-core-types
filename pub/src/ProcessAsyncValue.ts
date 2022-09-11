import { AsyncValue } from "./AsyncValue";

export type ProcessAsyncValue = <T>(
    $: AsyncValue<T>,
    $i: ($: T) => void
) => void