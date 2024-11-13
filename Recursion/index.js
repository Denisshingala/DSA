// get factorial of given number
const factorialOfNumber = (a) => {
    if(a <= 0)
        return 0;

    if(a == 1)
        return 1;

    return a * factorialOfNumber(a-1);
}

let number = 6;
let res = factorialOfNumber(number);
console.log(`Factorial of ${number} is ${res}`);

// reverse array
const reverseArray = (arr) => {
    let start = 0, end = arr.length - 1;

    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++, end--;
    }

    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

// highest/lowest frequency element
const getHighestLowestFrequencyElement = (arr) => {
    let map = new Map();

    arr.forEach((element) => {
        if(map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    });

    let high = 0, low = Infinity, highIndex = -1, lowIndex = -1;

    map.forEach((value, key) => {
        if(value > high) {
            high = value;
            highIndex = key;
        }
        if(value < low) {
            low = value;
            lowIndex = key;
        }
    });

    return {"highest": highIndex, "lowest": lowIndex};
}

arr = [10,5,10,15,10,5,15,15,15];
res = getHighestLowestFrequencyElement(arr);
console.log("Highest frequency element: ", res['highest']);
console.log("Lowest frequency element: ", res['lowest']);

