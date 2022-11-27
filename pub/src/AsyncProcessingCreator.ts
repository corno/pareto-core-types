import { AsyncValue } from "./AsyncValue";

export type AsyncProcessingCreator<Dependencies, Algorithm> = (
    $d: Dependencies,
    $a: <T>($: AsyncValue<T>, $i: ($: T) => void) => void
) => Algorithm