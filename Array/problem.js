/**
 * Problem statement: Longest subarray with given sum K(positives)
 *
 * Problem Link: https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809
 * TakeUForward Link: https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/
 */
const longestSubArrayWithSumPositiveK = (arr, k) => {
    let  right = 0, left = 0, length = arr.length, sum = arr[0];
    let ans = 0;

    while(right < length) {
        // reduce the left element until reach right
        // or sum being less than k
        while(left <= right && sum > k) {
            sum -= arr[left]; left++;
        }

        if(sum === k){
            ans = Math.max(ans, right - left + 1);
        }

        right ++;
        if(right < length) sum += arr[right];
    }

    return ans;
}

let arr = [1,2,3,1,1,1,1,4,2,3], k = 6;
console.log(longestSubArrayWithSumPositiveK(arr, k));

/**
 * Problem statement: Longest sub array with given sum K(positive + negative)
 * Link: https://practice.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
 * YouTube link: https://www.youtube.com/watch?v=frf7qxiN2qU
 */

const longestSubArrayWithSumK = (arr,k) => {
    let length = arr.length, i = 0, sum = 0, ans = 0;
    let hashTable = new Map();
    while(i < length) {
        sum += arr[i];

        if(sum === k){
            ans = Math.max(ans, i+1);
        }

        if(hashTable.has(sum-k)) {
            ans = Math.max(ans, i - hashTable.get(sum-k));
        }

        if(!hashTable.has(sum)) {
            hashTable.set(sum, i);
        }
        i++;
    }

    return ans;
}

// arr = [1,2,3,1,1,1,4,2,3], k = 3;
arr = [-59,-25,58,-59,-25,58], k = -85;
// arr = [-175,-154,-125,-800,-996,0,-649,206,895,-175,-154,-125,-800,-996,0,-649,206,895], k = 452;
console.log(longestSubArrayWithSumK(arr, k));