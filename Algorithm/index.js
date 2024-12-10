/**
 * Kadane's Algorithm : Maximum Subarray Sum in an Array
 *
 * Link: https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
 */
const findMaxSubArraySum = (arr) => {
    let length = arr.length, sum = 0, ans = Number.NEGATIVE_INFINITY, i = 0;

    while(i < length){
        sum += arr[i];

        ans = Math.max(ans, sum);

        if(sum < 0)
            sum = 0;
        i++;
    }
    return ans;
}

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(findMaxSubArraySum(arr));

/**
 * Next Permutation
 *
 * Link: https://leetcode.com/problems/next-permutation/description/
 */

const getNextPermutation = (arr) => {
    let ind = -1, length = arr.length;

    for(let i = length - 2; i>=0; i--) {
        if(arr[i] < arr[i+1]) {
            ind = i;
            break;
        }
    }

    if(ind == -1) {
        arr.reverse();
        return arr;
    }

    for(let i = length - 1; i >= ind; i--){
        if(arr[i] > arr[ind]) {
            let temp = arr[i];
            arr[i] = arr[ind];
            arr[ind] = temp;
            break;
        }
    }

    let leftPart = arr.slice(0, ind+1);
    let rightPart = arr.slice(ind+1).reverse();

    return [...leftPart, ...rightPart];
}

arr = [5,4,3,2,1];
console.log(getNextPermutation(arr));