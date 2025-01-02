# Conway's Game of Life 🧬
Developed in [TypeScript](https://www.typescriptlang.org/) and [Bun](https://bun.sh).

## What is the game of life?
It is a cellular automaton, a mathematical model to simulate a dynamic system. It has no players, you can neither "win" nor "lose". It is played on a grid board, and we only control the initial position of the pieces.

## How did it originate?
It was invented by mathematician John Conway in 1970. His goal was to create a system that simulates life and its unpredictable nature.

## Rules
The rules of the game are:

- If a cell is alive and has two or three living neighbors, it survives.
- If a cell is dead and has three live neighbors, it is born.
- If a cell is alive and has more than three live neighbors, it dies.

The process can run indefinitely.

## Dev Note

`Hotfix`

```ts
// dts-bundle-generator/dist/bundle-generator.js:672:27
function getExportedSymbolsUsingSymbol(nodeSymbol) {
  const symbolsUsingNode = typesUsageEvaluator.getSymbolsUsingSymbol(nodeSymbol);
  if (symbolsUsingNode === null) {
    ...
    return []
  }
```
