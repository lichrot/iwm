import { IterableWeakSet } from "@qnd/iws";
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
export class IterableWeakMap {
    /** A set of all keys. Iterating over the set allows to get the values from internal WeakMap. */
    #keys = new IterableWeakSet();
    /** Internal WeakMap that doesn't allow iteration. */
    #values = new WeakMap();
    /**
     * Creates an iterable version of WeakMap.
     * @param iterable Iterable to construct this IterableWeakMap from
     */
    constructor(iterable) {
        if (iterable) {
            for (const entry of iterable)
                this.set(entry[0], entry[1]);
        }
    }
    /**
     * Returns the number of (unique) elements in IterableWeakMap.
     * @returns The number of (unique) elements in IterableWeakMap
     */
    get size() {
        return this.#keys.size;
    }
    /**
     * Checks whether an element with the specified key exists in the IterableWeakMap or not.
     * @param key
     * @returns A boolean indicating whether an element with the specified value exists in the IterableWeakMap or not
     */
    has(key) {
        return this.#keys.has(key);
    }
    /**
     * Returns an element with the given key or undefined if not present.
     * @param key
     * @returns An element or undefined if not present
     */
    get(key) {
        return this.#values.get(key);
    }
    /**
     * Appends a new element with a specified value to the end of the IterableWeakMap.
     * @param key
     * @param value A value to set
     * @returns The original IterableWeakMap
     */
    set(key, value) {
        this.#keys.add(key);
        this.#values.set(key, value);
        return this;
    }
    /**
     * Removes an element specified by the key from the IterableWeakMap.
     * @param key
     * @returns Returns true if an element in the IterableWeakMap existed and has been removed, or false if the element does not exist
     */
    delete(key) {
        this.#keys.delete(key);
        return this.#values.delete(key);
    }
    /** Purges all existing elements from the IterableWeakMap */
    clear() {
        for (const key of this.#keys)
            this.delete(key);
    }
    /**
     * Executes a provided function once per each value in the IterableWeakMap object, in insertion order.
     * @param cb A function to use with each value
     * @param thisArg A reference to an object to use as this inside the callback function
     */
    forEach(cb, thisArg) {
        for (const entry of this)
            cb.call(thisArg, entry[1], entry[0], this);
    }
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    keys() {
        return this.#keys[Symbol.iterator]();
    }
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    *values() {
        for (const key of this.#keys)
            yield this.get(key);
    }
    /**
     * Returns IterableIterator that produces currently existing elements
     * @returns IterableIterator that produces currently existing elements
     */
    *[Symbol.iterator]() {
        for (const key of this.#keys)
            yield [key, this.get(key)];
    }
}
// !!! Prototype shenanigans !!! //
// @ts-ignore: duh
IterableWeakMap[Symbol.species] = IterableWeakMap;
// @ts-ignore: duh
IterableWeakMap.prototype[Symbol.toStringTag] = "IterableWeakMap";
IterableWeakMap.prototype.entries = IterableWeakMap.prototype[Symbol.iterator];
