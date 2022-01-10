
// Given two binary strings a and b, return their sum as a binary string.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
        const binaryOfA = `0b${a}`
    const binaryOfB = `0b${b}`
    
    const sum = BigInt(binaryOfA) + BigInt(binaryOfB)
    return sum.toString(2)

    
    
};
