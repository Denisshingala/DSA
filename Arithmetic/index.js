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

// find GCD of given two number (Euclidean algorithm) with recursion strategy
function findGCD(a, b) {
    if(a==0)
        return b;
    else if(b==0)
        return a;

    if(a > b){
        a = a % b;
    } else {
        b = b % a;
    }

    return findGCD(a, b);
}

let GCDNumber = findGCD(462, 231);
console.log(GCDNumber);

// check number is Armstrong Numbers
function findNumberIsArmstrong(a) {
    let sum = 0, actualNumber = a;

    // number of digits in given number
    let length = Math.floor(Math.log10(a) + 1);

    while(a > 0) {
        // get last digit
        let lastDigit = a%10;

        // sum of last digit power length of whole digit
        sum += Math.pow(lastDigit, length);

        // remove last digit from actual number
        a = Math.floor(a/10);
    }

    return actualNumber == sum;
}

let res = findNumberIsArmstrong(153);
console.log(res);

// get the all divisor of given number
function getAllDivisor(a) {
    let ans = [];

    // check one by one number till square root of given number
    for(let i = 1; i <= Math.sqrt(a); ++i) {
        // check the modulo with current number
        if(a % i == 0) {
            // add divisor & dividend into array
            ans.push(i);
            if(a/i != i) {
                ans.push(a/i);
            }
        }
    }

    ans.sort((a, b) => a - b);

    return ans;
}

let divisor = getAllDivisor(36);
console.log(divisor);

// check that number is prime number or not
function isNumberPrime(a) {
    let count = 0;

    // check one by one number till square root of given number
    for(let i = 1; i <= Math.sqrt(a); ++i) {
        // check the modulo with current number
        if(a % i == 0) {
            // add divisor & dividend into array
            count++;
            if(a/i != i) {
                count++;
            }
        }
    }

    return count == 2;
}

res = isNumberPrime(13);
console.log(res);