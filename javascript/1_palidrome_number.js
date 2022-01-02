// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


---------------------------------------------------------------------------------------------------------------
  /**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x < 0 || x % 10===0 && x !==0){
        return false;
    }
    rev = 0;
    while(x > rev){
        rev = rev * 10 + x % 10;
        x = parseInt(x / 10)
    }
     return (x == rev || x ==parseInt(rev/10))
};

