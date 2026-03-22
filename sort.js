function bubbleSort(arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array")
    const result = [...arr]
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                ;[result[j], result[j + 1]] = [result[j + 1], result[j]]
            }
        }
    }
    return result
}

module.exports = { bubbleSort }
