import reverseString from "../reverse-string/reverseString"
import assert from "assert"

describe("reverseString()", () => {
    it("Should reverse an array of characters in place", () => {
        let s: string[] = ["h","e","l","l","o"]
        reverseString(s)
        assert.deepEqual(s, ["o","l","l","e","h"])
    })
    it("Should reverse an array of characters in place maintaining capitalization", () => {
        let s: string[] = ["H","a","n","n","a","h"]
        reverseString(s)
        assert.deepEqual(s, ["h","a","n","n","a","H"])
    })
})