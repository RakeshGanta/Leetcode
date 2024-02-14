/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    const nSet=new Set();

    let res=1;
    for(let num of nums){
        nSet.add(num);
    }

    for(let num of  nums){
        if(!nSet.has(num-1) && nSet.has(num+1)){
            let maxlen=1;
            while(nSet.has(num+maxlen)){
                maxlen++;
            }
            res=Math.max(maxlen,res);
        }
    }
    return res;
};