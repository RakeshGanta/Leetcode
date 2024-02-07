/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  
        let le=0,ri=nums.length-1;
        while(le<ri){
            let mid=Math.floor((le+ri)/2);
            if(nums[mid]>nums[ri]){
               le=mid+1;
            }else{
                ri=mid;
            }
        }
        return nums[le]; 
    
};