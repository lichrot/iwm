/**
 * An iterable version of [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).
 *
 * @example Usage
 * ```ts
 * type Listener = (data: Record<string, any>) => void;
 *
 * const listeners = new IterableWeakMap<{ type: string }, Listener>();
 * const key = { type: "type" };
 * const logValue = (data) => console.log(data.value);
 * listeners.set(key, logValue);
 * for (const listener of listeners.values()) listener({ value: "abc" });
 * listeners.delete(key);
 * ```
 */
export declare class IterableWeakMap<K extends WeakKey, V> {
    #private;
    static readonly [Symbol.species]: typeof IterableWeakMap;
    /** It's weak map iterating time. */
    readonly [Symbol.toStringTag]: string;
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    entries(): MapIterator<[K, V]>;
    /**
     * Creates an iterable version of WeakMap.
     * @param iterable Iterable to construct this IterableWeakMap from
     */
    constructor(iterable?: readonly (readonly [K, V])[] | Iterable<(readonly [K, V])> | null);
    /**
     * Returns the number of (unique) elements in IterableWeakMap.
     * @returns The number of (unique) elements in IterableWeakMap
     */
    get size(): number;
    /**
     * Checks whether an element with the specified key exists in the IterableWeakMap or not.
     * @param key
     * @returns A boolean indicating whether an element with the specified value exists in the IterableWeakMap or not
     */
    has(key: K): boolean;
    /**
     * Returns an element with the given key or undefined if not present.
     * @param key
     * @returns An element or undefined if not present
     */
    get(key: K): V | undefined;
    /**
     * Appends a new element with a specified value to the end of the IterableWeakMap.
     * @param key
     * @param value A value to set
     * @returns The original IterableWeakMap
     */
    set(key: K, value: V): this;
    /**
     * Removes an element specified by the key from the IterableWeakMap.
     * @param key
     * @returns Returns true if an element in the IterableWeakMap existed and has been removed, or false if the element does not exist
     */
    delete(key: K): boolean;
    /** Purges all existing elements from the IterableWeakMap */
    clear(): void;
    /**
     * Executes a provided function once per each value in the IterableWeakMap object, in insertion order.
     * @param cb A function to use with each value
     * @param thisArg A reference to an object to use as this inside the callback function
     */
    forEach(cb: (value: V, key: K, map: IterableWeakMap<K, V>) => void, thisArg: unknown): void;
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    keys(): MapIterator<K>;
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    values(): MapIterator<V>;
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    [Symbol.iterator](): MapIterator<[K, V]>;
}
