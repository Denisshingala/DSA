/**
 * selection sort
 *
 * compare the current element
 * and swap with the smallest element in remaining array
 */
const selectionSort = (arr) => {
    let length = arr.length, minIndex, temp;

    for(let i = 0; i < length - 1; i++){
        minIndex = i;
        for(let j = i; j < length; j++){
            if(arr[i] > arr[j]){
                minIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

console.log(selectionSort([9, 8, 7, 6, 5]));

/**
 * bubble sort
 *
 * current element with its next element
 * at the end of every iteration we will get
 * the biggest element at the end of an array
 */
const bubbleSort = (arr) => {
    let length = arr.length, temp;

    for(let i = length-1; i >= 0 ; i--){
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([9, 8, 7, 6, 5]));

/**
 * insertion sort
 *
 * compare current element with its previous elements
 * if we got bigger value, then swap it with previous element
 * we won't stop until we will get smaller element
 */
const insertionSort = (arr) => {
    let length = arr.length, temp;

    for(let i = 0; i < length; i++){
        for(let j = i; j > 0 && arr[j] < arr[j-1]; j--){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }

    return arr;
}

console.log(insertionSort([9, 8, 7, 6, 5]));

// merge sort
const merge = (arr, low, mid, high) => {
    let temp = [], left = low, right = mid + 1;

    while(left <= mid && right <= high){
        if(arr[left] > arr[right]){
            temp.push(arr[right]);
            right ++;
        } else {
            temp.push(arr[left]);
            left ++;
        }
    }

    while(left <= mid){
        temp.push(arr[left]);
        left ++;
    }

    while(right <= high){
        temp.push(arr[right]);
        right ++;
    }

    for(let i = low; i <= high; i++){
        arr[i] = temp[i - low];
    }
}

const mergeSort = (arr, low, high) =>  {
    if(low >= high)
        return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

let arr = [9, 8, 7, 6, 5];
mergeSort(arr,0, arr.length - 1);
console.log(arr);

// quick sort
const partition = (arr, left, right) => {
    let pivot = arr[left], temp;
    let i = left, j = right;

    while(i < j) {
        while(arr[i] <= pivot && i < right){
            i++;
        }
        while(arr[j] > pivot && i > left){
            j--;
        }
        if(i<j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    temp = arr[left];
    arr[left] = arr[j];
    arr[j] = temp;

    return j;
}

const quickSort = (arr, low, high) =>  {
    if(low < high) {
       let pIndex = partition(arr, low, high);

       // left portion
       quickSort(arr, low, pIndex - 1);

       // right portion
        quickSort(arr, pIndex + 1, high);
    }
}

arr = [9, 8, 7, 6, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);