function reverseString(str) {
    if (typeof str !== "string") throw new Error("Input must be a string")
    return str.split("").reverse().join("")
}

function capitalizeString(str) {
    if (typeof str !== "string") throw new Error("Input must be a string")
    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = { reverseString, capitalizeString }
