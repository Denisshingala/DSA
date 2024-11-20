/**
 * Binary search
 */
const binarySearchArray = (arr, ele, start, end) => {
    if(start > end)
        return -1;

    let mid = Math.floor((start+end)/2);

    if(ele == arr[mid]){
        return mid;
    } else if(ele > arr[mid]){
        return binarySearchArray(arr, ele, mid+1, end);
    } else {
        return binarySearchArray(arr, ele, start, mid-1);
    }
}

const binarySearch = (arr, ele) => {
    let length = arr.length;

    return binarySearchArray(arr, ele, 0, length);
}

let arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 5));