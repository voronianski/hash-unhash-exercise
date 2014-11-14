# Hash/Unhash Exercise 

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
