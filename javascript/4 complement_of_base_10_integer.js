// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

 ----------------------------------------------------------------------------------------------------------------------------------------------
 
 /**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let bin =  n.toString(2);
    let count = 0;

    bin = bin.split(''); 
    while(count < bin.length){
        if(bin[bin.length-1] == 1){
            bin.pop();
            bin.unshift("0")
        }else{
            bin.pop();
            bin.unshift("1")
        }
        count++
    }
    bin = bin.join("");
    return parseInt(bin, 2)
};
