`npx oxlint` produces the following output. It is a false positive for `curly: ["error", "multi-line"]`

```
  × eslint(curly): Expected { after 'else'.
    ╭─[index.ts:11:14]
 10 │         else if (typeof obj === 'string') return false;
 11 │         else return typeof value[Symbol.iterator] === 'function';
    ·              ────────────────────────────────────────────────────
 12 │     };
    ╰────
  help: Replace `return typeof value[Symbol.iterator] === 'function';` with `{return typeof value[Symbol.iterator] === 'function';}`.

    ╭─[index.ts:11:14]
 10 │         else if (typeof obj === 'string') return false;
 11 │         else return typeof value[Symbol.iterator] === 'function';
    ·              ────────────────────────────────────────────────────
 12 │     };
    ╰────
  help: Replace `return typeof value[Symbol.iterator] === 'function';` with `{return typeof value[Symbol.iterator] === 'function';}`.
```
