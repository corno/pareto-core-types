import { AsyncValue } from "./AsyncValue";

export type AsyncFunction<In, Out> = ($: In) => AsyncValue<Out>