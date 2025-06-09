export function fn1() {
    // oxc          not warn
    // eslint-ts    has warn    OK
    const arr: Array<number>[] = []; // should be number[][]
    return arr;
}

export function fn2() {
    // oxc          has warn    OK
    // eslint-ts    has warn    OK
    const arr: Array<number> = [];
    return arr;
}

// oxc          https://oxc.rs/docs/guide/usage/linter/rules/typescript/array-type.html#typescript-array-type
// eslint-ts    https://typescript-eslint.io/rules/array-type/#array
