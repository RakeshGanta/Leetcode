/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0;
    let j=nums.length-1;
    let length=nums.length;
    while(i<=j){
        if(nums[i]===val){
            while(nums[j]===val){
                j--;
            }
            if(i>j) return i;
            let le=nums[i];
            nums[i]=nums[j];
            nums[j]=le;
            j--;
        }
        i++;
    }
    // console.log(i>length?0:i,length)
    return i;
};