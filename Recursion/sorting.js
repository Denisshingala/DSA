// recursive bubble sort
const bubbleSort = (arr, index) => {
    if(index == 1) {
        return;
    }
    let temp;
    for(let i = 0; i < index; i++) {
        if(arr[i] > arr[i+1]) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    bubbleSort(arr, index - 1);
}

let arr = [9, 8, 7, 6, 5, 4];
bubbleSort(arr, arr.length)
console.log(arr);

// recursive selection sort
const selectionSort = (arr, index) => {
    let length = arr.length -1, temp, smallIndex = index;
    if(index == length)
        return;

    for(let i=length; i > index; i--){
        if(arr[smallIndex] > arr[i])
           smallIndex = i;
    }

    if(smallIndex != index){
        temp = arr[smallIndex];
        arr[smallIndex] = arr[index];
        arr[index] = temp;
    }

    selectionSort(arr, index + 1);
}

arr = [9, 8, 7, 6, 5, 4];
selectionSort(arr, 0);
console.log(arr);

// recursive insertion sort
const insertionSort = (arr, index) => {
    let length = arr.length, temp;
    if(index == length)
        return;

    for(let i = index; i > 0; i--){
        if(arr[i] < arr[i-1]){
            temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }

    insertionSort(arr, index + 1);
}

arr = [9, 8, 7, 6, 5, 4];
insertionSort(arr, 0);
console.log(arr);
