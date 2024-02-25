# string-width-tests

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Results

```shell
$ bun index.ts
┌───┬───────────────────┬──────────────────────────┐
│   │ name              │ result                   │
├───┼───────────────────┼──────────────────────────┤
│ 0 │ string-width      │ [ 5, 10, 2, 2, 2, 3, 2 ] │
│ 1 │ fast-string-width │ [ 5, 10, 2, 2, 2, 3, 2 ] │
│ 2 │ bun-string-width  │ [ 5, 10, 2, 2, 2, 3, 2 ] │
└───┴───────────────────┴──────────────────────────┘
```



This project was created using `bun init` in bun v1.0.23. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
