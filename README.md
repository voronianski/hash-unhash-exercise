# Hash/Unhash Exercise 

Run `npm install` and `npm test` to see the spec passing. For implementation details check out  [`getstr()` func](https://github.com/voronianski/hash-unhash-exercise/blob/master/spec.js#L13). Usually I do not write so much comments in the code, but it feels like this one should be thouroughly documented.

## Task

Write JavaScript code to find a 9 letter string of characters that contains only letters from `acdegilmnoprstuw` such that the `hash(string)` is `956446786872726`.

Function where `hash` is defined by the following pseudo-code:

```
Int64 hash (String s) {
    Int64 h = 7
    String letters = "acdegilmnoprstuw"
    for(Int32 i = 0; i < s.length; i++) {
        h = (h * 37 + letters.indexOf(s[i]))
    }
    return h
}
```

## Example

If we were trying to find the 7 letter string where `hash(string)` was `680131659347`, the answer would be `"leepadg"`.
