/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hashMap=new Map();
    for(let char of magazine){
        if(hashMap.has(char)){
            hashMap.set(char,hashMap.get(char)+1);
        }else{
            hashMap.set(char,1);
        }
    }

    for(let char of ransomNote){
        if(hashMap.has(char)){
            if(hashMap.get(char)<1){
                return false;
            }else{
                hashMap.set(char,hashMap.get(char)-1);
            } 
        }else{
            return false;
        }
    }
    return true;
};