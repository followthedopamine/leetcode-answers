import reverseWords from "../reverse-words-in-a-string-iii/reverseWords"
import assert from "assert"

describe("reverseWords()", () => {
    it("Should reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.", () => {
        assert.equal(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc")
    })
    it("Should reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.", () => {
        assert.equal(reverseWords("God Ding"), "doG gniD")
    })
})