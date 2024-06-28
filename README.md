### This works
```
pnpm run dev
```

### This does NOT work
```
pnpm check-types
```

- @repo/ui#check-types --> SUCCESS
- docs#check-types --> SUCCESS
- web#check-types  --> FAIL

The web app picks up `../../packages/ui/src/input.tsx`
and doesn't understand the node path `"#deps/primitive/base-input"`
which results in `Cannot find module `#deps/primitive/base-input' or its corresponding type declarations.`

### This does NOT work
```
pnpm run build
```

