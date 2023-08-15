// Define all generic types here.

/** A high-level generic object. */
export type GenericObject<T = unknown> = {[key: string]: T};

/** Generic type to allow null. */
export type Nullable<T> = T | null;

/** Function with single parameter returning void */
export type FunctionWithParam<T> = (p: T) => void;

/** Function with single parameter returning void */
export type FunctionWithNoParam = () => void;

/** Type to get value property of object */
export type ValueOf<T> = T[keyof T];

export type NonUndefined<T> = T extends undefined ? never : T;
