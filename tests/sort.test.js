const { bubbleSort } = require("../sort")

test("bubbleSort sorts an array of numbers", () => {
    expect(bubbleSort([5, 2, 9, 1])).toEqual([1, 2, 5, 9])
})

test("bubbleSort does not modify original array", () => {
    const arr = [3, 1, 2]
    const sorted = bubbleSort(arr)
    expect(arr).toEqual([3, 1, 2])
})

test("bubbleSort throws on non-array", () => {
    expect(() => bubbleSort("not an array")).toThrow("Input must be an array")
})
