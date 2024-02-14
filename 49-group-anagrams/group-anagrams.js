/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    const hashMap=new Map();
    function generateAnagramKey(word) {
        // Convert the word to lowercase for case-insensitive comparison
        // word = word.toLowerCase();

        // Initialize an array to hold the counts of each letter
        const counts = new Array(26).fill(0); // Assuming only lowercase English letters

        // Iterate over each character in the word
        for (let i = 0; i < word.length; i++) {
            // Get the ASCII code of the character
            const charCode = word.charCodeAt(i);

            // Increment the count of the corresponding letter
            // if (charCode >= 97 && charCode <= 122) { // Check if it's a lowercase letter
                
            // }
            counts[charCode - 97]++;
        }

        // Convert the counts array to a string representation
        return counts.join('-');
    } 
    for(const word of strs){
        const key=generateAnagramKey(word);
        if(hashMap.has(key)){
            hashMap.set(key,[...hashMap.get(key),word]);
        }else{
            hashMap.set(key,[word]);
        }
    }  
    return Array.from(hashMap.values());
};

