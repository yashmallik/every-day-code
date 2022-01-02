// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


---------------------------------------------------------------------------------------------------------------
  
  /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x>0 || x%10==0 && x !=0){
        return false;
    }
    let num = x;
    let mun = 0;
    while(x>mun){
        mun = num % 10 + mun*10;
        num /= 10
    }
    return x == mun || x== mun/10;
};
