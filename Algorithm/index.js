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