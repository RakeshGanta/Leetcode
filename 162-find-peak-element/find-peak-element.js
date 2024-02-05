/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let curr=nums[0];
    let res=0;
    for(let i=1;i<nums.length-1;i++){
        if(nums[i]>curr && nums[i]!==nums[i+1]){
            curr=nums[i];
            res=i;
        }
    }
    if(nums[nums.length-1]!==nums[nums.length-2] && nums[nums.length-1]>curr){
        res=nums.length-1;
    }
    return res;
};