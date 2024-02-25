import fastStringWidth from 'fast-string-width';
import stringWidth  from "string-width";
const APIs = [
    {
        name: "string-width",
        fn: stringWidth
    },
    {
        name: "fast-string-width",
        fn: fastStringWidth
    },
    {
        name: "bun-string-width",
        // @ts-ignore
        fn: Bun.stringWidth
    }
];
const TEST_DATA = [
    "Hello",
    "こんにちは",
    "〆切",
    " ",
    "　",
    "😀",
    "👩‍👩‍👦",
    "👩‍❤️‍👨",
    // thai
    "ปฏัก",
    "_\u0E34\""
];
// All APIs should return the same result
const expected = APIs.map(api => {
    return {
        name: api.name,
        result: TEST_DATA.map(text => api.fn(text))
    };
});
console.table(expected);
