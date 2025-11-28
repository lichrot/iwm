# [@qnd/iwm] Map, both Weak and Iterable

[![Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://opensource.org/license/apache-2-0)
[![JSR Version](https://jsr.io/badges/@qnd/iwm)](https://jsr.io/@qnd/iwm)
[![NPM Version](https://img.shields.io/npm/v/@qnd/iwm)](https://www.npmjs.com/package/@qnd/iwm)

[WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
made iterable.

## [💾] Installation

Choose your fighter:

```sh
npm   install @qnd/iwm
yarn  add     @qnd/iwm
pnpm  install @qnd/iwm
deno  install jsr:@qnd/iwm
```

## [💀] Example

```ts
import { IterableWeakMap } from "@qnd/iwm";

type Listener = (data: Record<string, any>) => void;

const listeners = new IterableWeakMap<{ type: string }, Listener>();
const key = { type: "type" };
const logValue = (data) => console.log(data.value);
listeners.set(key, logValue);
for (const listener of listeners.values()) listener({ value: "abc" });
listeners.delete(key);
```

## [🖥️] Tasks

```sh
# Run publishing in dry mode
deno task dry-run

# Prepare for publishing (does all of the above)
deno task prepare

# Publish to JSR and NPM
deno task publish
```

## [📝] License

This work is licensed under
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) (see
[NOTICE](/NOTICE)).
