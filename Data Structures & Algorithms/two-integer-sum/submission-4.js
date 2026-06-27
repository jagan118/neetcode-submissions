class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
         const seenNumbers = new Map();

        for(let i = 0;i<nums.length;i++){
            if(seenNumbers.has(target - nums[i])){
                return [seenNumbers.get(target - nums[i]),i];
            }
            seenNumbers.set(nums[i],i);
        }
          
    }
}
