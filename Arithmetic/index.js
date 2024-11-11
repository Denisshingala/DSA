// count the number
const countDigits = (number) => {
    // count the number using arithmetic logic function
    let count = Math.floor(Math.log10(number) + 1);

    return count;
}

let a = 2303333;
console.log(countDigits(a));

// reverse number
const reverseNumber = (number, ans = 0) => {
    if(!number){
        return ans;
    }

    // recursively reverse the value
    return reverseNumber(Math.floor(number / 10), (ans * 10) + (number % 10));
}

let number = 1101302392;
console.log(reverseNumber(number));

// check the number is palindrome or not

const isNumberPalindrome = (number) => {
    // do reverse the number
    let reversedNumber = reverseNumber(number);

    // compare with actual number
    return number === reversedNumber;
}

let palindromNumber = 1001;
console.log(isNumberPalindrome(palindromNumber));