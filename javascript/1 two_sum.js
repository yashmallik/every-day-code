Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
---------------------------------------------------------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    pos = []
    for (let i = 0; i<nums.length;i++){
        for(let j = i+1; j<nums.length;j++){
            if(nums[i]+nums[j]== target){
                pos.push(i,j);
                break;
            }
        }
    }
    return pos

};

--------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i<nums.length; i++){
        let comp = target-nums[i];
        if(obj.hasOwnProperty(comp)){
            return[obj[comp],i]
        }
        obj[nums[i]] = i;
    }
};
