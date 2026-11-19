# Stack.Toolbar transition repro

Minimal reproduction for a bottom `Stack.Toolbar` glitch on iOS 26+ (expo-router 58.0.32).

Two screens, each with a bottom `Stack.Toolbar`:

- `src/app/index.tsx`: a filter button and a spacer.
- `src/app/list.tsx`: the same button and spacer, plus `Stack.Toolbar.SearchBarSlot`, with `headerSearchBarOptions.allowToolbarIntegration`.

## Run

```sh
npm install
npx expo run:ios
```

## Steps

1. Tap **Open list**. During the push, the search slot appears as a full-width empty field and then shrinks into the search button.
2. Go back. The toolbar empties during the pop, then the filter button fades back in.
