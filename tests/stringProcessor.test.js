const { reverseString, capitalizeString } = require("../stringProcessor")

test("reverseString should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh")
})

test("capitalizeString should capitalize first letter", () => {
    expect(capitalizeString("hello")).toBe("Hello")
})

test("reverseString throws on non-string", () => {
    expect(() => reverseString(123)).toThrow("Input must be a string")
})
